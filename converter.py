#!/usr/bin/env python3

import os
import re
import json
import frontmatter

def sanitize(lines):
    # matches lines starting with "=" to remove them from ingredients list
    pattern = re.compile(r"^=+")
    return [line for line in lines if not pattern.match(line)]

def convert_md_to_json(input="content/recipes", output="assets/recipes.json"):
    recipes = []
    success = []
    failed = []

    for filename in os.listdir(input):
        if filename.endswith(".md") and filename != "_template.md":
            filepath = os.path.join(input, filename)

            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    post = frontmatter.load(file)
                    if post.get("parent") == "Hauptspeisen":
                        title = post.get("title")
                        ingredients = post.get("ingredients")

                        if not title:
                            err = "missing or empty 'title'"
                            failed.append({"file": filename, "reason": err})
                            continue

                        if not ingredients or len(ingredients) == 0:
                            err = "missing or empty 'ingredients' list"
                            failed.append({"file": filename, "reason": err})
                            continue

                        sanitized_ingredients = sanitize(ingredients)
                        recipes.append({
                            "title": title,
                            "ingredients": sanitized_ingredients,
                        })

                        success.append(filename)

            except Exception as err:
                failed.append({"file": filename, "reason": err})
                continue

    try:
        with open(output, 'w', encoding='utf-8') as json_file:
            json.dump(recipes, json_file, ensure_ascii=False, indent=2)
    
    except Exception as err:
        print(f"🚨 Failed to write converted recipes to '{output}': {err}")

    if len(success) > 0:
        print("\n✅ Successfully converted md-files to json:")
        for file in success:
            print(f" - {file}")
    
    if len(failed) > 0:
        print("\n❌ Failed conversion for:")
        for key in failed:
            print(f" - {key['file']} ({key['reason']})")

convert_md_to_json()

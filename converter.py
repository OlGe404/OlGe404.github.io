#!/usr/bin/env python3

import os
import re
import json
import frontmatter

def sanitize(ingredients):
    # matches ingredient['name'] starting with "=" to remove them from ingredients list
    pattern = re.compile(r"^=+")
    return [ingredient for ingredient in ingredients if not pattern.match(ingredient['name'])]

def write_recipes_to_json_file():
    recipes = []
    success = []
    failed = []

    # Walk through all subdirectories of "recipes" to find ".md" files
    for root, _, files in os.walk("recipes"):
        for filename in files:
            if filename.endswith(".md") and filename != "_template.md":
                # Open each file, read the frontmatter in it and add it to recipes list
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, "r", encoding="utf-8") as file:
                        fm = frontmatter.load(file)
                        title = fm.get("title")
                        parent = fm.get("parent")
                        ingredients = fm.get("ingredients")

                        if not title:
                            err = "missing or empty 'title'"
                            failed.append({"file": filename, "reason": err})
                            continue

                        if not ingredients or len(ingredients) == 0:
                            err = "missing or empty 'ingredients' list"
                            failed.append({"file": filename, "reason": err})
                            continue

                        sanitized_ingredients = sanitize(ingredients)

                        recipe_data = {
                            "title": title,
                            "parent": parent,
                            "ingredients": sanitized_ingredients,
                        }

                        recipes.append(recipe_data)
                        success.append(filename)

                except Exception as err:
                    failed.append({"file": filename, "reason": err})
                    continue

    try:
        with open("recipes.json", "w", encoding="utf-8") as file:
            json.dump(recipes, file, indent=2, ensure_ascii=False)

    except Exception as err:
        print(f"🚨 Failed to write to 'recipes.json' file: {err}")

    if len(success) > 0:
        print("\n✅ Successfully processed:")
        for file in success:
            print(f" - {file}")
    
    if len(failed) > 0:
        print("\n❌ Failed processing for:")
        for key in failed:
            print(f" - {key['file']} ({key['reason']})")

write_recipes_to_json_file()

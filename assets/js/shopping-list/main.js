import { fetchJsonRecipes } from "./fetchRecipes.js";
import { getRandomRecipes } from "./getRandomRecipes.js";
import { generateShoppingList } from "./generateShoppingList.js";
import { displayRecipesTitles } from "./displayRecipesTitles.js";
import { displayShoppingList } from "./displayShoppingList.js";

async function main() {
    try {
        const filtered_recipes = await fetchJsonRecipes();
        // const filtered_recipes = all_recipes.filter(recipe => recipe.parent === "Hauptspeisen");

            const days = parseInt(document.getElementById('days').value);
        const callout = document.getElementById('info-callout');

        if (filtered_recipes.length * 2 < days) {
            callout.textContent = `Es wird die maximale Anzahl von ${filtered_recipes.length} Rezepten angezeigt, weil es nicht genug Rezepte für ${days} Tage im Rezeptbuch gibt.`;
            callout.style.display = 'block';
        } else {
            callout.style.display = 'none';
        }

        const selectedRecipes = getRandomRecipes(filtered_recipes, days);
        const shoppingList = generateShoppingList(selectedRecipes)

        console.log(shoppingList)

        displayRecipesTitles(selectedRecipes)
        displayShoppingList(shoppingList)

    } catch (error) {
        console.error('Error generating shopping list:', error);
    }
}

document.getElementById("generate-shopping-list").addEventListener("click", main);

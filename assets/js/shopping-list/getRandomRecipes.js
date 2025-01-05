export function getRandomRecipes(recipes, days) {
    const randomRecipes = [];
    const recipeCount = recipes.length;
    const recipesNeeded = Math.min(days, recipeCount);

    while (randomRecipes.length < recipesNeeded) {
        const randomIndex = Math.floor(Math.random() * recipeCount);
        const selectedRecipe = recipes[randomIndex];

        if (!randomRecipes.includes(selectedRecipe)) {
            randomRecipes.push(selectedRecipe);
        }
    }

    return randomRecipes;
}

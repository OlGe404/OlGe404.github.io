function fetchLocalJson() {
    return fetch('/assets/recipes.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch JSON from "/assets/recipes.json" file: ${response.status}`);
            }
            return response.json();
        });
}

async function generateShoppingList() {
    try {
        const recipes = await fetchLocalJson();
        const days = parseInt(document.getElementById('days').value); 
        const selectedRecipes = getRandomRecipes(recipes, days);
        const shoppingList = new Set();

        selectedRecipes.forEach((recipe) => {
            shoppingList.add(recipe);
        });

        displayShoppingList(selectedRecipes, [...shoppingList]);

    } catch (error) {
        console.error('Error generating shopping list:', error);
    }
}

function getRandomRecipes(recipes, days) {
    const randomRecipes = [];
    const recipeCount = recipes.length;
    const recipesNeeded = Math.min(days, recipeCount);

    while (randomRecipes.length < recipesNeeded) {
        const randomIndex = Math.floor(Math.random() * recipeCount);
        const selectedRecipe = recipes[randomIndex];

        // Only add a recipe if its not already part of the randomRecipes list 
        if (!randomRecipes.includes(selectedRecipe)) {
            randomRecipes.push(selectedRecipe);
        }
    }

    return randomRecipes;
}

function displayShoppingList(selectedRecipes, shoppingList) {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = '';

    // Display selected recipes and their ingredients
    const recipeContainer = document.createElement('div');
    selectedRecipes.forEach((recipe) => {
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;
        recipeContainer.appendChild(recipeTitle);

        const ingredientList = document.createElement('ul');
        recipe.ingredients.forEach((ingredient) => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientList.appendChild(listItem);
        });

        recipeContainer.appendChild(ingredientList);
    });

    listContainer.appendChild(recipeContainer);
}

function fetchJsonRecipes() {
    return fetch('/assets/recipes.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch JSON from "/assets/recipes.json" file:', response.status);
            }
            return response.json();
        });
}

async function generateShoppingList() {
    try {
        const recipes = await fetchJsonRecipes();
        const days = parseInt(document.getElementById('days').value);
        const infoContainer = document.getElementById('info-message');

        if (recipes.length * 2 < days) {
            infoContainer.textContent = `Es wird die maximale Anzahl von ${recipes.length} Rezepten angezeigt, weil es nicht genug Rezepte für ${days} Tage gibt.`;
            infoContainer.style.display = 'block';
        } else {
            infoContainer.style.display = 'none';
        }

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

        // Only add a recipe if its not already part of the list 
        if (!randomRecipes.includes(selectedRecipe)) {
            randomRecipes.push(selectedRecipe);
        }
    }

    return randomRecipes;
}

function displayShoppingList(selectedRecipes, shoppingList) {
    const listContainer = document.getElementById('shopping-list');
    listContainer.innerHTML = '';
    const recipeContainer = document.createElement('div');

    selectedRecipes.forEach((recipe) => {
        const recipeTitle = document.createElement('h5');
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

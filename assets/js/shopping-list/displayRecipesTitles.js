export function displayRecipesTitles(selectedRecipes) {
    const recipesTitlesHeading = document.getElementById('recipes-titles-heading')
    recipesTitlesHeading.style.display = 'block';

    const recipesTitlesUl = document.getElementById('recipes-titles-ul');
    recipesTitlesUl.innerHTML = '';

    selectedRecipes.forEach((recipe) => {
        const recipeTitle = document.createElement('li');
        recipeTitle.textContent = recipe.title;
        recipesTitlesUl.appendChild(recipeTitle);
    });
}

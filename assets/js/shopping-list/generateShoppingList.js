export function generateShoppingList(selectedRecipes) {
    const items = {};
    selectedRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            // Normalize ingredient key using name and unit
            const key = `${ingredient.name}_${ingredient.unit || ""}`;

            if (!items[key]) {
                items[key] = {
                    name: ingredient.name,
                    amount: ingredient.amount || 0,
                    unit: ingredient.unit
                };
            } else {
                items[key].amount += ingredient.amount || 0;
            }
        });
    });

    return items;
}
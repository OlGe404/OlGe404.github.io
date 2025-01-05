export function displayShoppingList(shoppingList) {
    const shoppingListHeading = document.getElementById('shopping-list-heading')
    shoppingListHeading.style.display = 'block';

    const shoppingListUl = document.getElementById('shopping-list-ul');
    shoppingListUl.innerHTML = '';

    const sortedShoppingList = Object.values(shoppingList).sort((a, b) => a.name.localeCompare(b.name));

    for (const key in sortedShoppingList) {
        if (sortedShoppingList.hasOwnProperty(key)) {
            const ingredient = sortedShoppingList[key];
            const li = document.createElement("li");

            if(ingredient.amount) {
                if(["Dose", "Zweig", "Zweige", "Zehe", "Zehen"].includes(ingredient.unit)) {
                    // Note the " " between ingredient.amount and ingredient.unit statements
                    li.textContent = `${ingredient.amount ? ingredient.amount : ""} ${ingredient.unit ? ingredient.unit : ""} ${ingredient.name}`;
    
                } else {
                    li.textContent = `${ingredient.amount ? ingredient.amount : ""}${ingredient.unit ? ingredient.unit : ""} ${ingredient.name}`;
                }
            }

            shoppingListUl.appendChild(li);
        }
    }
}

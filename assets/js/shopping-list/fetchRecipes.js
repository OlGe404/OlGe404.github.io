export function fetchJsonRecipes() {
    return fetch('/recipes.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch JSON from "/recipes.json" file:', response.status);
            }

            return response.json();
        });
}

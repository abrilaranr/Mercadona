const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
let recipe;



async function fetchMoviesJSON() {
    const response = await fetch('recipes.json');
    const jsonResponse = await response.json();
    return jsonResponse;
}
fetchMoviesJSON().then(json => {
    recipe = json;
    loadRecipe(json)
    // console.log(recipes)
});


function findRecipeById(recipeId) {
    for (let i = 0; i < recipe.length; i++) {
        if (recipe[i]["id_recipe"] == recipeId) {
            return recipe[i];
        }
    }
}


function loadRecipe(data){
document.getElementById('output').innerHTML = JSON.stringify(findRecipeById(recipeId))
}

const url = "recipes.json";
let filteredRecipe
let recipes;

async function fetchMoviesJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
}
fetchMoviesJSON().then(json => {
    // recipes = json;
    // localStorage.setItem('recipes', JSON.stringify(json));


    if (localStorage.getItem('recipes') == null) {
        window.localStorage.setItem("recipes", JSON.stringify(json));
        recipes = JSON.parse(localStorage.getItem('recipes'));
    } else {
        recipes = JSON.parse(localStorage.getItem('recipes'));
    }


    loadRecipes(recipes)
    // console.log(recipes)
});




// FUNCTION FOR LOAD RECIPES FOR PRICES
function loadRecipes(sorted) {
    // alert(jsondata)
    let out = document.getElementById('recipesOut');
    out.innerHTML = '';

    if (sorted.length == 0) {
        document.getElementById('totalIngedients').innerHTML = 0
        out.innerHTML = 'No se encontraron resultados';

    } else {
        document.getElementById('totalIngedients').innerHTML = sorted.length

        // out.innerHTML = `<h2>
        //   <span id="totalIngedients" class="text-success fw-bold">`+ sorted.length + `</span>
        //   Recetas disponibles
        // </h2>`

        for (const sortedElement of sorted) {
            out.innerHTML += `
                <div class="card m-3">
                <a href="/visualizarReceta/visualizarReceta.html?recipeId=`+ sortedElement.id_recipe + `">
                    <img class="card-img" />
                    <div class="card-body"> 
                        <p class="card-text text-lg mb-5">`+ sortedElement.name_recipe + `</p>
                        <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                            <p class="card-text fw-normal">`+ sortedElement.kcal_recipe + ` kcal</p>
                        </div>
                        <div class="d-flex align-items-center justify-content-center">
                            <p class="card-text fw-normal">`+ sortedElement.price_recipe + ` €</p>

                        </div>

                        
                        </div>
                    </div>
                    </a>
                </div>`;
        }
    }


}



function sortRecipes() {
    let orderValue = document.querySelector('aside select').value
    switch (orderValue) {
        case '1':
            precioDescendente()
            break;

        case '2':
            precioAscendente()
            break;

        case '3':
            kcalAscendente();
            break;

        case '4':
            kcalDescendente();
            break;


    }

}


function precioAscendente() {
    let myArray = [];
    let sorted =
        filteredRecipe.sort(function (b, a) {
            if (a.price_recipe > b.price_recipe) {
                return 1;
            }
            if (a.price_recipe < b.price_recipe) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredRecipe = sorted


}


function precioDescendente() {

    let myArray = [];
    let sorted =
        filteredRecipe.sort(function (b, a) {
            if (a.price_recipe < b.price_recipe) {
                return 1;
            }
            if (a.price_recipe > b.price_recipe) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredRecipe = sorted


}


function kcalAscendente() {

    let myArray = [];
    let sorted =
        filteredRecipe.sort(function (b, a) {
            if (a.kcal_recipe > b.kcal_recipe) {
                return 1;
            }
            if (a.kcal_recipe < b.kcal_recipe) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredRecipe = sorted


}


function kcalDescendente() {

    let myArray = [];
    let sorted =
        filteredRecipe.sort(function (a, b) {
            if (a.kcal_recipe < b.kcal_recipe) {
                return 1;
            }
            if (a.kcal_recipe > b.kcal_recipe) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }


    filteredRecipe = sorted


}


function pricesBetween() {
    let minPrice = document.getElementById('minPrice').value;
    let maxPrice = document.getElementById('maxPrice').value;
    let sorted = filteredRecipe;
    let myArray = [];

    if (minPrice >= maxPrice) {
        filteredRecipe = filteredRecipe;
    } else {
        for (const sortedElement of sorted) {
            if (sortedElement.price_recipe >= minPrice && sortedElement.price_recipe <= maxPrice) {
                myArray.push(sortedElement);
            }
        }
        filteredRecipe = myArray;
    }

}



function filterByCategory() {
    let cehcked = document.querySelectorAll('aside ul li input:checked')
    let filtered = [];
    let out = document.getElementById('recipesOut');
    out.innerHTML = '';

    if (cehcked.length == 0) {
        filteredRecipe = recipes;
    } else {
        for (let i = 0; i < cehcked.length; i++) {
            for (let j = 0; j < recipes.length; j++) {
                if (cehcked[i].value == recipes[j]['id_recipe_category']) {
                    filtered.push(recipes[j])
                }
            }
        }
        filteredRecipe = filtered;
    }

}






function actualizar() {
    filteredRecipe = recipes
    filterByCategory()
    pricesBetween()
    sortRecipes()
    loadRecipes(filteredRecipe)
}
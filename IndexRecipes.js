
const url = "recipes.json";
let recipes;

// fetch(url)
//     .then(function (u) {
//         return u.json();
//     })
//     .then(function (json) {
//         jsondata = json;
//     });





async function fetchMoviesJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
}
fetchMoviesJSON().then(json => {
    recipes = json;
    loadRecipes(json)
    // console.log(recipes)
});



function loadRecipes() {

    // alert(jsondata)

    let out = document.getElementById('recipesOut');
    out.innerHTML = '';

    for (let i = 0; i < recipes.length; i++) {
        // alert('hola')
        out.innerHTML += `

        <div class="card m-3">
            <a href="/visualizarReceta/visualizarReceta.html?recipeId=`+ recipes[i]['id_recipe'] + `">
            <img class="card-img" />
            <div class="card-body"> 
                <p class="card-text">`+ recipes[i]['name_recipe'] + `</p>
                <div class="d-flex justify-content-between">
                <p class="card-text">`+ recipes[i]['kcal_recipe'] + ` kcal</p>
                <p class="card-text">`+ recipes[i]['price_recipe'] + ` €</p>
                </div>
            </div>
            </a>
        </div>
        `;
    }

}



function sortRecipes(value) {
    // parseInt(value)
    switch (value) {
        case '1':
            // sort(recipes, 'price_recipe', false);
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
        recipes.sort(function (b, a) {
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

    // alert(JSON.stringify(sorted))
    loadRecipes(sorted)


}


function precioDescendente() {

    let myArray = [];
    let sorted =
        recipes.sort(function (b, a) {
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

    // alert(JSON.stringify(sorted))
    loadRecipes(sorted)


}



function kcalAscendente() {

    let myArray = [];
    let sorted =
        recipes.sort(function (b, a) {
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

    // alert(JSON.stringify(sorted))
    loadRecipes(sorted)


}




function kcalDescendente() {

    let myArray = [];
    let sorted =
        recipes.sort(function (a, b) {
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

    // alert(JSON.stringify(sorted))
    loadRecipes(sorted)


}


function pricesBetween(){
    let minPrice = document.getElementById('minPrice').value;
    let maxPrice = document.getElementById('maxPrice').value;
    let sorted = recipes;
    let myArray = [];
    for (const sortedElement of sorted) {
        if(sortedElement.price_recipe >= minPrice && sortedElement.price_recipe <= maxPrice){
            myArray.push(sortedElement);
            console.log(sortedElement);
        }
    }
        console.log(myArray);
        sorted = myArray;
        console.log(sorted);
        loadRecipesPrices(sorted);
    }



    // FUNCTION FOR LOAD RECIPES FOR PRICES
    function loadRecipesPrices(sorted) {
        // alert(jsondata)
        let out = document.getElementById('recipesOut');    

        out.innerHTML = '';   
        
        for (const sortedElement of sorted) {
            out.innerHTML += `
            <div class="card m-3">
                <a href="#">
                <img class="card-img" />
                <div class="card-body"> 
                    <p class="card-text">`+ sortedElement.name_recipe + `</p>
                    <div class="d-flex justify-content-between">
                    <p class="card-text">`+ sortedElement.kcal_recipe + ` kcal</p>
                    <p class="card-text">`+ sortedElement.price_recipe + ` €</p>
                    </div>
                </div>
                </a>
            </div>`;
        }
    }

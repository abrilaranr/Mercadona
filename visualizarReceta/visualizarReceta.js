const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
let recipes;
let ingredients;


fetch('/ingredients.json')
    .then(function (u) {
        return u.json();
    })
    .then(function (json) {
        ingredients = json;
    });




async function fetchMoviesJSON() {
    const response = await fetch('/recipes.json');
    const jsonResponse = await response.json();
    return jsonResponse;
    console.log(jsonResponse)
}
fetchMoviesJSON().then(json => {
    recipes = json;
    loadRecipe(json)
    // console.log(recipes)
});


function findRecipeById(recipeId) {
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i]["id_recipe"] == recipeId) {
            return recipes[i];
        }
    }
}

function findIngredientById(ingredientId) {
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i]["idIngredient"] == ingredientId) {
            return ingredients[i];
        }
    }
}


// TENGO QUE CAMBIAR ESTO A CATEGORIAS DE RECETAS

const ingredientCategories = [
    "carnes",
    "ensaladas",
    "pasta",
    "pescados",
    "reposteria",
    "salsas",
    "sopas_y_cremas"
];


function getCategoryById(ingredientCategoryId) {
    return ingredientCategories[ingredientCategoryId - 1];
}


function loadRecipe(data) {



    let recipe = findRecipeById(recipeId);
    let categoria = getCategoryById(recipe['id_recipe_category']);
    document.getElementById('nombre').innerHTML = 'Nombre de receta: ' + recipe['name_recipe']
    document.getElementById('categoria').innerHTML = 'Categoría de la receta: ' + categoria


    for (let i = 0; i < JSON.stringify(recipe['ingredients'].length); i++) {
        let ingredient = findIngredientById(recipe['ingredients'][i]['id_ingredient']);

        document.querySelector('#miTabla > tbody').innerHTML += `
     <tr data-ingredient-id="`+ ingredient['idIngredient'] + `" class="ingredientRow">

 
        <td>
        <div class="input-table">
            `+ ingredient['nameIngredient'] + `
        </div>
        </td>

        <td class="quantity">` + parseInt(recipe['ingredients'][i]['quantity']) + `</td>
        <td>`+ parseInt(recipe['ingredients'][i]['quantity'] * ingredient['kcal'] / 100) + `</td>
    </tr>


    `;

    }

    // Encontrer receta por id debe estar dentro de la funcion para utilizarla
    function findIngredientById(ingredientId) {
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i]["idIngredient"] == ingredientId) {
                return ingredients[i];
            }
        }
    }



    // alert(JSON.stringify(ingredients[0]))

    actualizar()

















}



function actualizar() {
    let price = document.getElementById("totalPrice");
    let kcal = document.getElementById("totalKcal");

    var totalPrice = 0;
    var totalKcal = 0;
    let totalGrasas = 0;
    let totalSaturadas = 0;
    let totalCarbohidratos = 0;
    let totalAzucares = 0;
    let totalProteinas = 0;
    let totalFibras = 0;
    let totalSal = 0;


    // Meto en una variable cada row de la tabla de ingredientes, y cada row tiene como atributo = 'data-ingredient-id'
    let ingredientsRows = document.querySelectorAll('tr[data-ingredient-id]');

    // Meto en una variable cada cantidad de cada ingrediente dentro de la tabla de ingredientes
    let ingredientsQuantity = document.querySelectorAll('tr[data-ingredient-id] > .quantity');


    // Recorro row por row y voy consultando los datos nutricionales y las voy sumando en un total para luego imprimirlas
    for (let i = 0; i < ingredientsRows.length; i++) {
        let ingredientQuantity = ingredientsQuantity[i].innerHTML;
        let ingredient = findIngredientById(ingredientsRows[i].dataset.ingredientId);
        totalPrice += parseFloat(ingredientQuantity * ingredient['precio'] / ingredient['peso']);
        totalKcal += parseInt(ingredientQuantity * ingredient['kcal'] / 100);
        totalGrasas += parseFloat((ingredientQuantity * ingredient['grasas'] / 100));
        totalSaturadas += parseFloat((ingredientQuantity * ingredient['grasaSaturadas'] / 100));
        totalCarbohidratos += parseFloat((ingredientQuantity * ingredient['carbohidratos'] / 100));
        totalAzucares += parseFloat((ingredientQuantity * ingredient['carbohidratosAzucares'] / 100));
        totalProteinas += parseFloat((ingredientQuantity * ingredient['proteinas'] / 100));
        totalFibras += parseFloat((ingredientQuantity * ingredient['fibra'] / 100));
        totalSal += parseFloat((ingredientQuantity * ingredient['sal'] / 100));



    }

    // Imprimo los resultados totales de la suma de valores nutricionales y precios
    document.querySelector('#nutrientes').innerHTML = `

        <li id="grasas" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            <span>Grasas: `+ totalGrasas.toFixed(1) + `</span>
        </li>
        <li id="saturadas" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            De las cuales saturadas: `+ totalSaturadas.toFixed(1) + `
        </li>
        <li id="carbohidratos" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            Carbohidratos: `+ totalCarbohidratos.toFixed(1) + `
        </li>
        <li id="azucares" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            De los cuales azúcares: `+ totalAzucares.toFixed(1) + `
        </li>
        <li id="proteinas" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            Proteínas: `+ totalProteinas.toFixed(1) + `
        </li>
        <li id="fibras" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            Fibras: `+ totalFibras.toFixed(1) + `
        </li>
        <li id="sal" class="d-flex align-items-center mb-2">
            <div class="me-2"></div>
            Sal: `+ totalSal.toFixed(1) + `
        </li>



    `;

    // Imprimo por separado las kcal y el precio
    price.innerHTML = totalPrice.toFixed(2) + ' €';
    kcal.innerHTML = totalKcal + ' kcal';

    // Aquí actualizo el gráfico con esta funciçon pasándole los parametros de todos los valores nutricionales
    actualizarGrafico(totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal);


}


// Esta funcion imprime los datos que les paso por parámetros en este orden: totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal
function actualizarGrafico(totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal) {
    var xValues = ["Grasas", "Grasas saturadas", "Carbohidratos", "Carbohidratos de los cuales azúcares", "Fibra", "Proteínas", "Sal"];
    var yValues = [totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal];
    var barColors = [
        "#D9ED92",
        "#B5E48C",
        "#99D98C",
        "#76C893",
        "#52B69A",
        "#34A0A4",
        "#168AAD",
        "#1A759F",
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Tabla nutricional"
            }
        }
    });
}




const url = "http://localhost:8080/api/allIngredients";
let ingredients;
let filteredIngredients;

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
    ingredients = json;
    printIngredients(json)
    // console.log(recipes)
});

const ingredientCategories = [
    "aceites_especias_salsas",
    "aperitivos",
    "arroz_legumbres_pasta",
    "panaderia",
    "marisco_pescado",
    "huevos_lacteos",
    "fruta_verdura",
    "carne",
    "cereales_galletas",
    "conservas_caldos_cremas",
    "charcuteria_quesos"
];


function getCategoryById(ingredientCategoryId) {
    return ingredientCategories[ingredientCategoryId - 1];
}

function printIngredients(jsondata) {
    document.querySelector('#totalIngedients').innerHTML = jsondata.length;
    for (let i = 0; i < jsondata.length; i++) {
        document.querySelector(".table-ingredients > tbody").innerHTML += `
        <tr>
            <td>`+ jsondata[i]["nameIngredient"] + `</td>
            <td>`+ jsondata[i]["peso"] + jsondata[i]["medicion"] + `</td>
            <td>`+ jsondata[i]["precio"] + `</td>
            <td>`+ (parseFloat(1000 * jsondata[i]["precio"] / jsondata[i]["peso"]).toFixed(2)) + `</td>
            <td>`+ jsondata[i]["kcal"] + `</td>
            <td>`+ getCategoryById(jsondata[i]["numberCategory"]) + `</td>
        </tr>          
        `;
    }
}











function sortIngredients() {
    let orderValue = document.querySelector('aside select').value

    switch (orderValue) {
        case '1':
            precioDescendente()
            break;

        case '2':
            precioAscendente()
            break;

        case '3':
            precioPesoAscendente();
            break;

        case '4':
            precioPesoDescendente();
            break;


    }

}

// (parseFloat(1000 * a.precio / a.peso).toFixed(2))

function precioAscendente() {
    let myArray = [];
    let sorted =
        filteredIngredients.sort(function (b, a) {
            if (a.precio < b.precio) {
                return 1;
            }
            if (a.precio > b.precio) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredIngredients = sorted



}


function precioDescendente() {

    let myArray = [];
    let sorted =
        filteredIngredients.sort(function (b, a) {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredIngredients = sorted


}


function precioPesoAscendente() {

    let myArray = [];
    let sorted =
        filteredIngredients.sort(function (b, a) {
            if ((parseFloat(1000 * a.precio / a.peso).toFixed(2)) > (parseFloat(1000 * b.precio / b.peso).toFixed(2))) {
                return 1;
            }
            if ((parseFloat(1000 * a.precio / a.peso).toFixed(2)) < (parseFloat(1000 * b.precio / b.peso).toFixed(2))) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredIngredients = sorted



}


function precioPesoDescendente() {

    let myArray = [];
    let sorted =
        filteredIngredients.sort(function (b, a) {
            if ((parseFloat(1000 * a.precio / a.peso).toFixed(2)) < (parseFloat(1000 * b.precio / b.peso).toFixed(2))) {
                return 1;
            }
            if ((parseFloat(1000 * a.precio / a.peso).toFixed(2)) > (parseFloat(1000 * b.precio / b.peso).toFixed(2))) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    filteredIngredients = sorted





}






function pricesBetween() {
    let minPrice = document.getElementById('minPrice').value;
    let maxPrice = document.getElementById('maxPrice').value;
    let sorted = filteredIngredients;
    let myArray = [];

    if (minPrice >= maxPrice) {
        filteredIngredients = filteredIngredients;
    } else {
        for (const sortedElement of sorted) {
            if (sortedElement.precio >= minPrice && sortedElement.precio <= maxPrice) {
                myArray.push(sortedElement);
            }
        }
        filteredIngredients = myArray;

    }

}



function filterByCategory() {
    let cehcked = document.querySelectorAll('aside ul li input:checked')
    let filtered = [];
    let out = document.querySelector(".table-ingredients > tbody");
    out.innerHTML = '';

    if (cehcked.length == 0) {
        filteredIngredients = ingredients;
    } else {
        for (let i = 0; i < cehcked.length; i++) {
            for (let j = 0; j < ingredients.length; j++) {
                if (cehcked[i].value == ingredients[j]['numberCategory']) {
                    filtered.push(ingredients[j])
                }
            }
        }
        filteredIngredients = filtered;
    }

}






function actualizar() {
    filteredIngredients = ingredients
    filterByCategory()
    pricesBetween()
    sortIngredients()
    printIngredients(filteredIngredients)
}
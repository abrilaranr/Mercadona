const url = "http://localhost:8080/api/allIngredients";
let ingredients;

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
    for (let i = 4; i < jsondata.length; i++) {
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

function pricesBetweenIngredients(){
    let minPrice = document.getElementById('minPrice').value;
    let maxPrice = document.getElementById('maxPrice').value;
    let sorted = ingredients;
    let myArray = [];
    for (const sortedElement of sorted) {
        if(sortedElement.precio >= minPrice && sortedElement.precio <= maxPrice){
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
    function loadIngredientsPrices(sorted) {
        // alert(jsondata)
        let out = document.querySelector('#totalIngedients').innerHTML = jsondata.length;;    

        out.innerHTML = '';   
        
        for (let i = 4; i < jsondata.length; i++) {

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
    
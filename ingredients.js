const url = "ingredients.json";
let jsondata;

fetch(url)
    .then(function (u) {
        return u.json();
    })
    .then(function (json) {
        jsondata = json;
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

function printIngredients() {
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


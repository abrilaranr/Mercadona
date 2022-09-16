const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipeId = urlParams.get('recipeId')
let recipes;



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


function loadRecipe(data){
    let recipe = findRecipeById(recipeId);

    alert(JSON.stringify(recipe['ingredients'][0]['id_ingredient']))

    document.getElementById('output').innerHTML = JSON.stringify(recipe);

    // document.querySelector('#miTabla > tbody').innerHTML = `
    //  <tr data-ingredient-id="`+ ingredients + `" class="ingredientRow">

    //     <td>`+ recipe + `</td>
    //     <td>
    //     <div class="input-table">
    //         `+ recipe + `
    //     </div>
    //     </td>

    //     <td data-ingredient-id="`+ recipe + `" class="kcal">0</td>
    // </tr>


    // `;
}




// const url = "/recipes.json";
// let jsondata;

// // fetch(url)
// //     .then(function (u) {
// //         return u.json();
// //     })
// //     .then(function (json) {
// //         jsondata = json;
// //     });

// async function fetchMoviesJSON() {
//     const response = await fetch(url);
//     const jsonResponse = await response.json();
//     return jsonResponse;
// }
// fetchMoviesJSON().then(json => {
//     jsondata = json;
//     // console.log(recipes)
// });





// // Encontrar el objeto completo del ingrediente por id

// function findIngredientById(ingredientId) {
//     for (let i = 0; i < jsondata.length; i++) {
//         if (jsondata[i]["idIngredient"] == ingredientId) {
//             return jsondata[i];
//         }
//     }
// }

























// /*An array containing all the country names in the world:*/
// var items = [];
// var itemsId = [];

// /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
// autocomplete(document.getElementById("myInput"), items);

// function generarItems() {
//     document.querySelector("#salida2").innerHTML = itemsId;
// }






// function deleteIngredient(ingredientId) {
//     // calcIngredient(ingredientId, 0);
//     let elemento = document.querySelectorAll(
//         "tr[data-ingredient-id='" + ingredientId + "']"
//     );
//     elemento[0].parentNode.removeChild(elemento[0]);
//     actualizar();
// }



// function addIngredient(ingredientId) {
//     // obtengo el ingrediente del id que el usuario pasó a traves de la función
//     let ingredient = findIngredientById(ingredientId);

//     // Crea todos los elementos html necesarios para construir la fila de la tabla
//     let tablaBody = document.querySelector("#miTabla>tbody");

//     let row = `
//      <tr data-ingredient-id="`+ ingredientId + `" class="ingredientRow">
//         <td>
//         <img
//             src="/icons/close-line.svg"
//             alt="eliminar"
//             data-ingredient-id="`+ ingredientId + `"
//             onclick="deleteIngredient(this.dataset.ingredientId)"
//         />
//         </td>

//         <td>`+ ingredient["nameIngredient"] + `</td>
//         <td>
//         <div class="input-table">
//             <input
//             type="number"
//             pattern="[0-9]{4}"
//             data-ingredient-id="`+ ingredientId + `"
//             oninput="calcIngredient(this.dataset.ingredientId, this.value)"
//             /><label>`+ ingredient['medicion'] + `</label>
//         </div>
//         </td>

//         <td data-ingredient-id="`+ ingredientId + `" class="kcal">0</td>
//     </tr>


//     `;

//     // Esto lo hago para que no me haga overwrite con el 'element += <codigo html>'
//     tablaBody.insertAdjacentHTML('beforeend', row);





//     // let rowTabla = document.createElement("tr");
//     // let ingredientName = document.createElement("td");
//     // let ingredientKcal = document.createElement("td");
//     // let imgDelete = document.createElement("img");
//     // let inputContainer = document.createElement("div");
//     // let inputquantity = document.createElement("input");
//     // let labelquantity = document.createElement("label");

//     // // le agrego a la tabla un atributo de data-ingredient-id según el ingrediente que corresponda
//     // rowTabla.setAttribute("data-ingredient-id", ingredientId);
//     // rowTabla.setAttribute("class", "ingredientRow");

//     // // eliminar el \ del principio del src d ela img después cuando lo ase a real
//     // imgDelete.setAttribute("src", "/icons/close-line.svg");
//     // imgDelete.setAttribute("alt", "eliminar");
//     // imgDelete.setAttribute("data-ingredient-id", ingredientId);
//     // imgDelete.setAttribute(
//     //     "onclick",
//     //     "deleteIngredient(this.dataset.ingredientId)"
//     // );

//     // ingredientName.innerHTML = ingredient["nameIngredient"];

//     // inputContainer.setAttribute("class", "input-table");

//     // inputquantity.setAttribute("type", "number");
//     // inputquantity.setAttribute("pattern", "[0-9]{4}");
//     // inputquantity.setAttribute("data-ingredient-id", ingredientId);
//     // inputquantity.setAttribute(
//     //     "oninput",
//     //     "calcIngredient(this.dataset.ingredientId, this.value)"
//     // );

//     // labelquantity.innerHTML = ingredient["medicion"];

//     // ingredientKcal.innerHTML = 0;
//     // ingredientKcal.setAttribute("data-ingredient-id", ingredientId);
//     // ingredientKcal.setAttribute("class", "kcal");

//     // inputContainer.appendChild(inputquantity);
//     // inputContainer.appendChild(labelquantity);

//     // rowTabla.appendChild(imgDelete);
//     // rowTabla.appendChild(ingredientName);
//     // rowTabla.appendChild(inputContainer);
//     // rowTabla.appendChild(ingredientKcal);
//     // tablaBody.appendChild(rowTabla);
// }














// function loadRecipe() {
//     let price = document.getElementById("totalPrice");
//     let kcal = document.getElementById("totalKcal");
//     let grasas = document.getElementById("grasas");
//     let saturadas = document.getElementById("saturadas");
//     let carbohidratos = document.getElementById("carbohidratos");
//     let azucares = document.getElementById("azucares");
//     let proteinas = document.getElementById("proteinas");
//     let fibras = document.getElementById("fibras");
//     let sal = document.getElementById("sal");

//     var totalPrice = 0;
//     var totalKcal = 0;
//     let totalGrasas = 0;
//     let totalSaturadas = 0;
//     let totalCarbohidratos = 0;
//     let totalAzucares = 0;
//     let totalProteinas = 0;
//     let totalFibras = 0;
//     let totalSal = 0;


//     let ingredientsRows = document.querySelectorAll('input[data-ingredient-id]');


//     for (let i = 0; i < ingredientsRows.length; i++) {
//         let ingredientQuantity = ingredientsRows[i].value;
//         let ingredient = findIngredientById(ingredientsRows[i].dataset.ingredientId);

//         totalPrice += parseFloat(ingredientQuantity * ingredient['precio'] / ingredient['peso']);
//         totalKcal += parseInt(ingredientQuantity * ingredient['kcal'] / 100);
//         totalGrasas += parseFloat((ingredientQuantity * ingredient['grasas'] / 100));
//         totalSaturadas += parseFloat((ingredientQuantity * ingredient['grasaSaturadas'] / 100));
//         totalCarbohidratos += parseFloat((ingredientQuantity * ingredient['carbohidratos'] / 100));
//         totalAzucares += parseFloat((ingredientQuantity * ingredient['carbohidratosAzucares'] / 100));
//         totalProteinas += parseFloat((ingredientQuantity * ingredient['proteinas'] / 100));
//         totalFibras += parseFloat((ingredientQuantity * ingredient['fibra'] / 100));
//         totalSal += parseFloat((ingredientQuantity * ingredient['sal'] / 100));

//         // totalGrasas += parseFloat(((value * ingredientRow["grasas"]) / 100).toFixed(2));


//     }

//     document.querySelector('#nutrientes').innerHTML = `

//         <li id="grasas" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             <span>Grasas: `+ totalGrasas.toFixed(1) + `</span>
//         </li>
//         <li id="saturadas" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             De las cuales saturadas: `+ totalSaturadas.toFixed(1) + `
//         </li>
//         <li id="carbohidratos" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             Carbohidratos: `+ totalCarbohidratos.toFixed(1) + `
//         </li>
//         <li id="azucares" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             De los cuales azúcares: `+ totalAzucares.toFixed(1) + `
//         </li>
//         <li id="proteinas" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             Proteínas: `+ totalProteinas.toFixed(1) + `
//         </li>
//         <li id="fibras" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             Fibras: `+ totalFibras.toFixed(1) + `
//         </li>
//         <li id="sal" class="d-flex align-items-center mb-2">
//             <div class="me-2"></div>
//             Sal: `+ totalSal.toFixed(1) + `
//         </li>



//     `;

//     price.innerHTML = totalPrice.toFixed(2) + ' €';
//     kcal.innerHTML = totalKcal + ' kcal';
//     // grasas.innerHTML = "Grasas: " + totalGrasas.toFixed(1);
//     // saturadas.innerHTML = "De las cuales saturadas: " + totalSaturadas.toFixed(1);
//     // carbohidratos.innerHTML = "Carbohidratos: " + totalCarbohidratos.toFixed(1);
//     // azucares.innerHTML = "De los cuales azúcares: " + totalAzucares.toFixed(1);
//     // proteinas.innerHTML = "Proteínas: " + totalProteinas.toFixed(1);
//     // fibras.innerHTML = "Fibras: " + totalFibras.toFixed(1);
//     // sal.innerHTML = "Sal: " + totalSal.toFixed(1);

//     actualizarGrafico(totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal);









// }




// function calcIngredient(ingredientId, value) {
//     let ingredient = findIngredientById(ingredientId);
//     let elemento = document.querySelectorAll(
//         "td.kcal[data-ingredient-id='" + ingredientId + "']"
//     );

//     if (value >= 0) {
//         elemento[0].innerHTML = ((value * ingredient["kcal"]) / 100).toFixed(0);
//         actualizar();
//     } else {
//         elemento[0].innerHTML = 0;
//     }

// }


// function actualizarGrafico(totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal) {
//     var xValues = ["Grasas", "Grasas saturadas", "Carbohidratos", "Carbohidratos de los cuales azúcares", "Fibra", "Proteínas", "Sal"];
//     var yValues = [totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal];
//     var barColors = [
//         "#D9ED92",
//         "#B5E48C",
//         "#99D98C",
//         "#76C893",
//         "#52B69A",
//         "#34A0A4",
//         "#168AAD",
//         "#1A759F",
//     ];

//     new Chart("myChart", {
//         type: "pie",
//         data: {
//             labels: xValues,
//             datasets: [{
//                 backgroundColor: barColors,
//                 data: yValues
//             }]
//         },
//         options: {
//             title: {
//                 display: true,
//                 text: "Tabla nutricional"
//             }
//         }
//     });
// }













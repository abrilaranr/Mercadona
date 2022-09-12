const tabla = document.querySelector("#miTabla");
const rowTabla = document.createElement("tr");
const ingredients = [
  {
    idIngredient: 1,
    nameIngredient: "Harina",
    peso: 1000,
    medicion: "gr",
    kcal: 350,
    grasas: 1.3,
    grasaSaturadas: 0.2,
    carbohidratos: 73,
    carbohidratosAzucares: 0.6,
    fibra: 3.0,
    proteinas: 10.0,
    sal: 0.02,
    precio: 0.75,
  },
  {
    idIngredient: 2,
    nameIngredient: "Azucar",
    peso: 1000,
    medicion: "gr",
    kcal: 400,
    grasas: 0,
    grasaSaturadas: 0,
    carbohidratos: 100.0,
    carbohidratosAzucares: 100.0,
    fibra: 0,
    proteinas: 0.0,
    sal: 0.0,
    precio: 0.85,
  },
];

// Busca en el Json por id, ya que la id está metida en un bloque habrá que pasar bloque por bloque hasta devolver el que coincide con la id indicada
function findIngredientById(ingredientId) {
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i]["idIngredient"] == ingredientId) {
      return ingredients[i];
    }
  }
}

function deleteIngredient(ingredientId) {
  // calcIngredient(ingredientId, 0);
  let elemento = document.querySelectorAll(
    "tr[data-ingredient-id='" + ingredientId + "']"
  );
  elemento[0].parentNode.removeChild(elemento[0]);
  actualizar();
}

function addIngredient(ingredientId) {
  // obtengo el ingrediente del id que el usuario pasó a traves de la función
  let ingredient = findIngredientById(ingredientId);

  // Crea todos los elementos html necesarios para construir la fila de la tabla
  let tablaBody = document.querySelector("#miTabla>tbody");
  let rowTabla = document.createElement("tr");
  let ingredientName = document.createElement("td");
  let ingredientKcal = document.createElement("td");
  let imgDelete = document.createElement("img");
  let inputContainer = document.createElement("div");
  let inputquantity = document.createElement("input");
  let labelquantity = document.createElement("label");

  // le agrego a la tabla un atributo de data-ingredient-id según el ingrediente que corresponda
  rowTabla.setAttribute("data-ingredient-id", ingredientId);
  rowTabla.setAttribute("class", "ingredientRow");

  // eliminar el \ del principio del src d ela img después cuando lo ase a real
  imgDelete.setAttribute("src", "/icons/close-line.svg");
  imgDelete.setAttribute("alt", "eliminar");
  imgDelete.setAttribute("data-ingredient-id", ingredientId);
  imgDelete.setAttribute(
    "onclick",
    "deleteIngredient(this.dataset.ingredientId)"
  );

  ingredientName.innerHTML = ingredient["nameIngredient"];

  inputContainer.setAttribute("class", "input-table");

  inputquantity.setAttribute("type", "number");
  inputquantity.setAttribute("pattern", "[0-9]{4}");
  inputquantity.setAttribute("data-ingredient-id", ingredientId);
  inputquantity.setAttribute(
    "oninput",
    "calcIngredient(this.dataset.ingredientId, this.value)"
  );

  labelquantity.innerHTML = ingredient["medicion"];

  ingredientKcal.innerHTML = 0;
  ingredientKcal.setAttribute("data-ingredient-id", ingredientId);
  ingredientKcal.setAttribute("class", "kcal");

  inputContainer.appendChild(inputquantity);
  inputContainer.appendChild(labelquantity);

  rowTabla.appendChild(imgDelete);
  rowTabla.appendChild(ingredientName);
  rowTabla.appendChild(inputContainer);
  rowTabla.appendChild(ingredientKcal);
  tablaBody.appendChild(rowTabla);
}

function calcIngredient(ingredientId, value) {
  let ingredient = findIngredientById(ingredientId);
  let elemento = document.querySelectorAll(
    "td.kcal[data-ingredient-id='" + ingredientId + "']"
  );

  if (value >= 0) {
    elemento[0].innerHTML = ((value * ingredient["kcal"]) / 100).toFixed(0);
    actualizar();
  } else {
    elemento[0].innerHTML = 0;
  }

}

function actualizar() {
  let price = document.getElementById("totalPrice");
  let kcal = document.getElementById("totalKcal");
  let grasas = document.getElementById("grasas");
  let saturadas = document.getElementById("saturadas");
  let carbohidratos = document.getElementById("carbohidratos");
  let azucares = document.getElementById("azucares");
  let proteinas = document.getElementById("proteinas");
  let fibras = document.getElementById("fibras");
  let sal = document.getElementById("sal");

  let totalPrice = 0;
  let totalKcal = 0;
  let totalGrasas = 0;
  let totalSaturadas = 0;
  let totalCarbohidratos = 0;
  let totalAzucares = 0;
  let totalProteinas = 0;
  let totalFibras = 0;
  let totalSal = 0;


  let ingredientsRows = document.querySelectorAll('input[data-ingredient-id]');


  for (let i = 0; i < ingredientsRows.length; i++) {
    let ingredientQuantity = ingredientsRows[i].value;
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

    // totalGrasas += parseFloat(((value * ingredientRow["grasas"]) / 100).toFixed(2));

  }
  price.innerHTML = totalPrice.toFixed(2) + ' €';
  kcal.innerHTML = totalKcal + ' kcal';
  grasas.innerHTML = "Grasas: " + totalGrasas.toFixed(1);
  saturadas.innerHTML = "De las cuales saturadas: " + totalSaturadas.toFixed(1);
  carbohidratos.innerHTML = "Carbohidratos: " + totalCarbohidratos.toFixed(1);
  azucares.innerHTML = "De los cuales azúcares: " + totalAzucares.toFixed(1);
  proteinas.innerHTML = "Proteínas: " + totalProteinas.toFixed(1);
  fibras.innerHTML = "Fibras: " + totalFibras.toFixed(1);
  sal.innerHTML = "Sal: " + totalSal.toFixed(1);

}
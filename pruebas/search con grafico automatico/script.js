const url = "ingredients.json";
let jsondata;

fetch(url)
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });

function setClass(elemento) {
  elemento.setAttribute("class", "searchOption");
}


































function autocomplete(inp, arr) {
  // crea la array de nombres de items del osrs

  fetch("ingredients.json")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  // Ejecuta esto luego de recibir una respuesta
  function setPrice(data) {
    for (let i = 0; i < data.length; i++) {
      items.push(data[i].nameIngredient);
      itemsId.push(data[i].idIngredient);
    }
  }

  const img = document.createElement("IMG");
  // document.getElementById("salida3").appendChild = elemento;

  /*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        b.setAttribute("data-ingredient-id", itemsId[i]);
        b.setAttribute("onclick", "addIngredient(" + itemsId[i] + ")");
        /*make the matching letters bold:*/
        b.innerHTML =
          "<div><strong>" +
          arr[i].substr(0, val.length) +
          "</strong>" +
          arr[i].substr(val.length) +
          "</div>";
        // b.innerHTML += arr[i].substr(val.length);
        // ESTO FUE LO QUE CAMBIÉ
        // los id y los nombres no están en el mismo orden, así que tuve que crear otra array de id en el orden alfabetico según los nomrbes
        // Le agrego la img con el src del id del según el nombre
        // le agrego la class "seachOption" simplemente para darle estlilo a cada casilla de cada resultado
        // setSrc(img, itemsId[i]);
        // b.appendChild(img);

        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = "";
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
    increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
    decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  function addIngredient(ingredientId) {
    // obtengo el ingrediente del id que el usuario pasó a traves de la función
    // let myId = jsondata[0]['idIngredient'];
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


  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var items = [];
var itemsId = [];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), items);

function generarItems() {
  document.querySelector("#salida2").innerHTML = itemsId;
}

function setSrc(img, id) {
  img.setAttribute(
    "src",
    "https://secure.runescape.com/m=itemdb_oldschool/1661510204300_obj_sprite.gif?id=" +
    id
  );
}



function findIngredientById(ingredientId) {
  for (let i = 0; i < jsondata.length; i++) {
    if (jsondata[i]["idIngredient"] == ingredientId) {
      return jsondata[i];
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
  // let myId = jsondata[0]['idIngredient'];
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

  var totalPrice = 0;
  var totalKcal = 0;
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

  actualizarGrafico(totalGrasas, totalSaturadas, totalCarbohidratos, totalAzucares, totalProteinas, totalFibras, totalSal);









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













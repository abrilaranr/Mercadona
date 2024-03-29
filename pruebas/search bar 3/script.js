// var itemsGe;
// var itemsInfo;

// fetch("https://prices.runescape.wiki/api/v1/osrs/latest")
//   .then((res) => res.json())
//   .then((data) => (itemsGe = data));

// console.log(itemsGe);

var itemsGe;

fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
  .then((res) => res.json())
  .then((data) => (itemsGe = data))
  .then(() => console.log(itemsGe[0]));

console.log(itemsGe[0]);

function setClass(elemento) {
  elemento.setAttribute("class", "searchOption");
}

function autocomplete(inp, arr) {
  // crea la array de nombres de items del osrs

  fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  // Ejecuta esto luego de recibir una respuesta
  function setPrice(data) {
    for (let i = 0; i < data.length; i++) {
      items.push(data[i].name);
      itemsId.push(data[i].id);
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
        setSrc(img, itemsId[i]);
        b.appendChild(img);
        // agrega la id como un atributo personalizqado usando data-
        b.setAttribute("data-itemId", itemsId[i]);

        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = "";
          // llama la función y le manda la id del item
          addToTable(b.getAttribute("data-itemId"));

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
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var items = [];
var itemsId = [];
var itemsInfo = [];
var itemsGeInfo = [];

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

function addToTable(itemId) {
  let tabla = document.querySelector("#miTabla");
  // let tablaImg = document.querySelector("#miTabla");
  let tablaNombre = document.querySelector(
    "#miTabla>tbody>tr>td:nth-of-type(2)"
  );
  // let tablaLow = document.querySelector("#miTabla");
  // let tablaHigh = document.querySelector("#miTabla");

  fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  // Ejecuta esto luego de recibir una respuesta
  function setPrice(data) {
    alert(data[itemId].name);
  }
}

function deleteFromTable() {}

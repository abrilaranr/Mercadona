function alerta() {
  alert("hola");
}

function algo(itemid) {
  fetch("https://prices.runescape.wiki/api/v1/osrs/latest")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  function setPrice(data) {
    document.querySelector("#salida").innerText = JSON.stringify(
      data["data"][itemid]
    );
  }

  // imprime imagen correspondiente a la id
  document.querySelector("#imgout").src =
    "https://secure.runescape.com/m=itemdb_oldschool/1661510204300_obj_big.gif?id=" +
    itemid;
}

function getName(itemid) {
  fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  // Ejecuta esto luego de recibir una respuesta
  function setPrice(data) {
    // busca los objetos que contengan la siguiente id, se pueden añadir varios con el &&
    var newArray = data.filter(function (el) {
      return el.id == itemid;
    });

    JSON.stringify(newArray);

    document.querySelector("#itemName").innerHTML = newArray[0]["name"];

    document.querySelector("#salida2").innerHTML = JSON.stringify(newArray[0]);
  }
}

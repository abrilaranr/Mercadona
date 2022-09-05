function alerta() {
  alert("hola");
}

function getName(itemid) {
  fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  // Ejecuta esto luego de recibir una respuesta
  function setPrice(data) {
    const items = [];

    for (let i = 0; i < data.length; i++) {
      items.push(data[i].name);
    }

    // document.querySelector("#salida").innerHTML = data.length;
    document.querySelector("#salida2").innerHTML = items;

    // busca los objetos que contengan la siguiente id, se pueden añadir varios con el &&
    // var newArray = data.filter(function (el) {
    //   return el.id == itemid;
    // });

    // JSON.stringify(newArray);

    // document.querySelector("#itemName").innerHTML = newArray[0]["name"];

    // document.querySelector("#salida2").innerHTML = JSON.stringify(newArray[0]);

    // imprime imagen correspondiente a la id
    // document.querySelector("#imgout").src =
    //   "https://secure.runescape.com/m=itemdb_oldschool/1661510204300_obj_big.gif?id=" +
    //   itemid;
  }
}

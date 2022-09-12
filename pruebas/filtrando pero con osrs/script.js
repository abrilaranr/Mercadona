function prueba() {
  var salida = document.getElementById("salida");

  fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
    .then((response) => response.json())
    .then((data) => setPrice(data));

  // Ejecuta esto luego de recibir una respuesta
  function setPrice(data) {
    var obj = data;

    // busca los objetos que contengan la siguiente id, se pueden añadir varios con el &&
    var newArray = obj.filter(function (el) {
      return el.id == 123;
    });

    salida.innerHTML = JSON.stringify(newArray);
  }
}

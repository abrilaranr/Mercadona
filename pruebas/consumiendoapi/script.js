// fetch("http://dummy.restapiexample.com/api/v1/employees")
// .then( (response) => response.json())
// .then((data)=> console.log(data))// output will be the required data
// .catch( (error) => console.log(error))

function alerta(){
    alert('hola');
}

// function algo(itemid){
//   fetch("https://prices.runescape.wiki/api/v1/osrs/latest")
//   .then((response) => response.json())
//   .then((data) => setPrice(data))

//   function setPrice(data) {

//   document.querySelector("#salida").innerText =
//     JSON.stringify(data['data'][itemid]);
//   }

//       document.querySelector('#imgout').src = 'https://secure.runescape.com/m=itemdb_oldschool/1661510204300_obj_big.gif?id='+itemid;
// }

function algo(itemid){
  fetch("https://prices.runescape.wiki/api/v1/osrs/latest")
  .then((response) => response.json())
  .then((data) => setPrice(data))


  function setPrice(data) {

  document.querySelector("#salida").innerText =
    JSON.stringify(data['data'][itemid]);

    

  }

      document.querySelector('#imgout').src = 'https://secure.runescape.com/m=itemdb_oldschool/1661510204300_obj_big.gif?id='+itemid;



      


}

function getFilteredByKey(array, key, value) {
  return array.filter(function(e) {
    return e[key] == value;
  });
}



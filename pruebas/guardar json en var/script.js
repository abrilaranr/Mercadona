const url = "https://prices.runescape.wiki/api/v1/osrs/mapping";
let jsondata;

fetch(url)
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    jsondata = json;
  });

  function print(){
    // document.getElementById('salida').innerHTML = JSON.stringify(jsondata);
    alert(JSON.stringify(jsondata[0]))
  }



const url = "recipes.json";
let recipes;

async function fetchMoviesJSON() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
}

fetchMoviesJSON().then(json => {
recipes = json;
loadRecipes(json)
// console.log(recipes)
});

function loadRecipes() {

    let out = document.getElementById('recipesOut');
    out.innerHTML = '';

    for (let i = 0; i < recipes.length; i++) {
        // alert('hola')
        out.innerHTML += '';
    }
    
}

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allRecipes = Array.from(document.querySelectorAll('.recipes'));
var checked = {};

let reposteria = document.getElementById(reposteria).value;
let carnes = document.getElementById(carnes).value;
let ensaladas = document.getElementById(ensaladas).value;
let pescados = document.getElementById(pescados).value;
let sopasYCremas = document.getElementById(sopas_y_cremas).value;
let salsas = document.getElementById(salsas).value;
let pasta = document.getElementById(pasta).value;


getChecked('categories');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

  

function setVisibility() {
  allCategories.map(function (el) {
    var categories = checked.categories.length ? _.intersection(Array.from(el.classList), checked.categories).length : true;
    if (categories) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}
// function setVisibility() {
//     allCategories.map(function (el) {
//       var reposteria = checked.reposteria.length ? _.intersection(Array.from(el.classList), checked.reposteria).length : true;
//       var carnes = checked.injured.length ? _.intersection(Array.from(el.classList), checked.carnes).length : true;
//       var ensaladas = checked.position.length ? _.intersection(Array.from(el.classList), checked.ensaladas).length : true;
//       var pescados = checked.nbaTeam.length ? _.intersection(Array.from(el.classList), checked.pescados).length : true;
//       var sopasYCremas = checked.conference.length ? _.intersection(Array.from(el.classList), checked.sopasYCremas).length : true;
//       var salsas = checked.conference.length ? _.intersection(Array.from(el.classList), checked.salsas).length : true;
//       var pasta = checked.conference.length ? _.intersection(Array.from(el.classList), checked.pasta).length : true;
  
  
  
//       if (startingReserves && injured && position && nbaTeam && conference) {
//         el.style.display = 'block';
//       } else {
//         el.style.display = 'none';
//       }
//     });
//   }


// function pricesBetween(){

//   let minPrice = document.getElementById('minPrice').value
//   let maxPrice = document.getElementById('maxPrice').value
//   let sorted = recipes;
//   let myArray = [];
//           for (let i = 0; i < sorted.length; i++) {
//           if (sorted[i].price_recipe >= minPrice && sorted[i].price_recipe <= maxPrice) {
//               console.log('holi');
//               const index = array.indexOf(sorted[i]);
//       if (index > -1) { // only splice array when item is found
//       sorted.splice(index, 1); // 2nd parameter means remove one item only
//       }}};




//       sorted = [];
//       sorted = myArray;
//       console.log(sorted);
//       loadRecipes(sorted)}



// function pricesBetween(){

//   let minPrice = document.getElementById('minPrice').value
//   let maxPrice = document.getElementById('maxPrice').value
//   let sorted = recipes;
//   let myArray = [];
//           for (let i = 0; i < sorted.length; i++) {
//           if (sorted[i].price_recipe >= minPrice && sorted[i].price_recipe <= maxPrice) {
//               console.log('holi');
              
//               myArray.push(sorted[i]['id_recipe'])
//           }};

//       // recipes.sort(function(a,b){
//       // if (a.price_recipe >= minPrice && b.price_recipe <= maxPrice) {
//       // }
//       // return 1;})
//       sorted = [];
//       sorted = myArray;
//       console.log(sorted);
//       loadRecipes(sorted)
//   }

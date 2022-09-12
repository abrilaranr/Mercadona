const url = "recipes.json";
let recipes;

fetch(url)
    .then(function (u) {
        return u.json();
    })
    .then(function (json) {
        recipes = json;
    });

function loadRecipes() {
    let out = document.getElementById('recipesOut');

    for (let i = 0; i < recipes.length; i++) {
        out.innerHTML += `

        <div class="card m-3">
            <a href="#">
            <img class="card-img" />
            <div class="card-body"> 
                <p class="card-text">`+ recipes[i]['name_recipe'] + `</p>
                <div class="d-flex justify-content-between">
                <p class="card-text">`+ recipes[i]['kcal_recipe'] + ` kcal</p>
                <p class="card-text">`+ recipes[i]['price_recipe'] + ` €</p>
                </div>
            </div>
            </a>
        </div>
        `;
    }
}



function sortRecipes(value) {
    // parseInt(value)
    switch (value) {
        case '1':
            sort(recipes, 'price_recipe', false);
            break;

        case '2':
            precioAscendente()
            break;

        case '3':
            kcalAscendente();
            break;

        case '4':
            kcalDescendente();

            break;


    }

}

function precioAscendente() {
    let myArray = [];
    let sorted =
        recipes.sort(function (b, a) {
            if (a.kcal_recipe > b.kcal_recipe) {
                return 1;
            }
            if (a.kcal_recipe < b.kcal_recipe) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }



    alert(myArray)

}

function mySort() {

}

function pecioDescendente() {
    alert('chao')
}

function sort(object, value, toMax) {
    let myArr = [];

    for (let i = 0; i < object.length; i++) {
        myArr.push(recipes[i][value])
    }

    myArr.sort();
    if (toMax == false) {
        myArr.reverse();
    }

    alert(myArr);


}





/* <div class="card m-3">
    <a href="#">
    <img class="card-img" />
    <div class="card-body">
        <p class="card-text">Ensalada cesar</p>
        <div class="d-flex justify-content-between">
        <p class="card-text">xxx kcal</p>
        <p class="card-text">xxx €</p>
        </div>
    </div>
    </a>
</div> */











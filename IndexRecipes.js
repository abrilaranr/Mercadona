
    const url = "recipes.json";
    let recipes;

    // fetch(url)
    //     .then(function (u) {
    //         return u.json();
    //     })
    //     .then(function (json) {
    //         jsondata = json;
    //     });

        



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

    // alert(jsondata)

    let out = document.getElementById('recipesOut');
    out.innerHTML = '';

    for (let i = 0; i < recipes.length; i++) {
        // alert('hola')
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
            // sort(recipes, 'price_recipe', false);
            pecioDescendente()
            break;

        case '2':
            precioAscendente()
            break;

        case '3':
            // kcalAscendente();
            alert('asdas')

            break;

        case '4':
            // kcalDescendente();
            alert('sssssº')


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

    // alert(JSON.stringify(sorted))
    loadRecipes(sorted)
    

}

//     alert(myArray)

// }

// function mySort() {

// }

function pecioDescendente() {

    let myArray = [];
    let sorted =
        recipes.sort(function (b, a) {
            if (a.kcal_recipe < b.kcal_recipe) {
                return 1;
            }
            if (a.kcal_recipe > b.kcal_recipe) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    for (let i = 0; i < sorted.length; i++) {
        myArray.push(sorted[i]['id_recipe'])
    }

    // alert(JSON.stringify(sorted))
    loadRecipes(sorted)


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











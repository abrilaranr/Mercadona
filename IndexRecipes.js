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
    alert(recipes[0]['kcal_recipe'])
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
                <p class="card-text">`+ recipes[i]['price _recipe'] + ` €</p>
                </div>
            </div>
            </a>
        </div>
        `;
    }
}









{/* <div class="card m-3">
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
</div> */}
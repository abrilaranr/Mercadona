let ingredientObject = {};

// {
//     "idIngredient": 1,
//     "nameIngredient": "testing ingredient",
//     "peso": 5,
//     "medicion": "g",
//     "kcal": 824,
//     "grasas": 92,
//     "grasaSaturadas": 18,
//     "carbohidratos": 0,
//     "carbohidratosAzucares": 0,
//     "fibra": 0,
//     "proteinas": 0,
//     "sal": 0,
//     "precio": 4.1,
//     "numberCategory": 1
// }

function addValues() {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let medicion = document.getElementById('medicion').value;
    let categoria = document.getElementById('categoria').value;
    let kcal = document.getElementById('kcal').value;
    let grasas = document.getElementById('grasas').value;
    let saturadas = document.getElementById('saturadas').value;
    let carbohidratos = document.getElementById('carbohidratos').value;
    let azucares = document.getElementById('azucares').value;
    let fibra = document.getElementById('fibra').value;
    let proteinas = document.getElementById('proteinas').value;
    let sal = document.getElementById('sal').value;

    ingredientObject["nameIngredient"] = nombre;
    ingredientObject["numberCategory"] = categoria;
    ingredientObject["peso"] = cantidad;
    ingredientObject["medicion"] = medicion;
    ingredientObject["precio"] = precio;
    ingredientObject["kcal"] = kcal;
    ingredientObject["grasas"] = grasas;
    ingredientObject["grasaSaturadas"] = saturadas;
    ingredientObject["carbohidratos"] = carbohidratos;
    ingredientObject["carbohidratosAzucares"] = azucares;
    ingredientObject["fibra"] = fibra;
    ingredientObject["proteinas"] = proteinas;
    ingredientObject["sal"] = sal;

    alert(JSON.stringify(ingredientObject));

    publicar()
}

function verifyItsOk() {
    let correct = true;

    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let medicion = document.getElementById('medicion').value;
    let categoria = document.getElementById('categoria').value;
    let kcal = document.getElementById('kcal').value;
    let grasas = document.getElementById('grasas').value;
    let saturadas = document.getElementById('saturadas').value;
    let carbohidratos = document.getElementById('carbohidratos').value;
    let azucares = document.getElementById('azucares').value;
    let fibra = document.getElementById('fibra').value;
    let proteinas = document.getElementById('proteinas').value;
    let sal = document.getElementById('sal').value;

    if (nombre.length < 3) {
        alert('el nombre es menor que 3 caracteres');
        correct = false;
    }

    if (categoria == 0) {
        alert('Selecciona una categoría');
        correct = false;

    }

    if (medicion == 0) {
        alert('introduce una unidad de medición');
        correct = false;

    }

    if (precio == 0 || precio > 1000) {
        alert('introduce un precio válido');
        correct = false;

    }

    if (cantidad == 0 || cantidad > 10000) {
        alert('introduce una cantidad válida');
        correct = false;

    }

    if (grasas > 100) {
        alert('introduce un valor de grasas válida');
        correct = false;

    }

    if (saturadas > 100) {
        alert('introduce un valor de grasas saturadas válida');
        correct = false;

    }

    if (carbohidratos > 100) {
        alert('introduce un valor de carbohidratos válida');
        correct = false;

    }

    if (azucares > 100) {
        alert('introduce un valor de azucares válida');
        correct = false;

    }

    if (fibra > 100) {
        alert('introduce un valor de fibra válida');
        correct = false;

    }

    if (proteinas > 100) {
        alert('introduce un valor de proteinas válida');
        correct = false;

    }

    if (sal > 100) {
        alert('introduce un valor de sal válida');
        correct = false;

    }






    // suma que todos los valores nutricionales den 100
    // Verificar de que el nombre cotenga al menos 3 letras
    // Verificar que el precio sea mayor que 0
    // en casod e que la medicion sea en und preguntar peso aprox or und
    // que la categoría esté en defaul enn select y si no hay ninguna seleccionada hacer la alerta
    // que la cantidad sea como máximo 


    // alert (error)
    return correct

}

function saveRecipe() {
    if (verifyItsOk()) {
        addValues();
    }
    verifyItsOk();
}

// function addIngredientPOST() {

//     const newIngredient = {
//         "idIngredient": 287,
//         "nameIngredient": "test ingredient aksjdfh",
//         "peso": 1000,
//         "medicion": "g",
//         "kcal": 8,
//         "grasas": 91.0,
//         "grasaSaturadas": 13.0,
//         "carbohidratos": 0.0,
//         "carbohidratosAzucares": 0.0,
//         "fibra": 0,
//         "proteinas": 0.0,
//         "sal": 0.0,
//         "precio": 4.25
//     }

//     const options = {
//         method: 'POST',
//         body: JSON.stringify(newIngredient),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     var d = "";
//     fetch('http://localhost:8080/api/add', options)
//         .then(res => res.json(d))
//         .then(res => console.log(res));
// }


function publicar() {

    alert('subiendo...');


    const options = {
        method: 'POST',
        body: JSON.stringify(ingredientObject),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    var d = "";
    fetch('http://localhost:8080/api/addIngredient', options)
        .then(res => res.json(d))
        .then(res => console.log(res));

}




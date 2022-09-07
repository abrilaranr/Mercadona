let nombre = document.getElementById('nombre');
let precio = document.getElementById('precio');
let cantidad = document.getElementById('cantidad');
let medicion = document.getElementById('medicion');
let categoria = document.getElementById('categoria');
let kcal = document.getElementById('kcal');
let grasas = document.getElementById('grasas');
let saturadas = document.getElementById('saturadas');
let carbohidratos = document.getElementById('carbohidratos');
let azucares = document.getElementById('azucares');
let fibra = document.getElementById('fibra');
let proteinas = document.getElementById('proteinas');
let sal = document.getElementById('sal');

function verifyItsOk() {
    // suma que todos los valores nutricionales den 100
    // Verificar de que el nombre cotenga al menos 3 letras
    // Verificar que el precio sea mayor que 0
    // en casod e que la medicion sea en und preguntar peso aprox or und
    // que la categoría esté en defaul enn select y si no hay ninguna seleccionada hacer la alerta
    // que la cantidad sea como máximo 
}

function addIngredientPOST() {

    const newIngredient = {
        "idIngredient": 287,
        "nameIngredient": "test ingredient aksjdfh",
        "peso": 1000,
        "medicion": "g",
        "kcal": 8,
        "grasas": 91.0,
        "grasaSaturadas": 13.0,
        "carbohidratos": 0.0,
        "carbohidratosAzucares": 0.0,
        "fibra": 0,
        "proteinas": 0.0,
        "sal": 0.0,
        "precio": 4.25
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newIngredient),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    var d = "";
    fetch('http://localhost:8080/api/add', options)
        .then(res => res.json(d))
        .then(res => console.log(res));
}







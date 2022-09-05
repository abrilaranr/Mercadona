const tabla = document.querySelector("#miTabla");
const rowTabla = document.createElement("tr");
const ingredients = [
  {
    "idIngredient": 1001,
    "nameIngredient": "Aceite de Oliva Virgen extra, Hacendado",
    "peso": 1000,
    "medicion": "ml",
    "kcal": 822,
    "grasas": 91.0,
    "grasaSaturadas": 13.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 4.25
  },
  {
    "idIngredient": 1002,
    "nameIngredient": "Aceite de Oliva Virgen extra Gran Selección, Hacendado",
    "peso": 750,
    "medicion": "ml",
    "kcal": 900,
    "grasas": 91.0,
    "grasaSaturadas": 13.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 4.5
  },
  {
    "idIngredient": 1003,
    "nameIngredient": "Aceite de Oliva 1º, Hacendado",
    "peso": 1000,
    "medicion": "ml",
    "kcal": 822,
    "grasas": 91.0,
    "grasaSaturadas": 14.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 3.9
  },
  {
    "idIngredient": 1004,
    "nameIngredient": "Aceite de Oliva Virgen, Hacendado",
    "peso": 1000,
    "medicion": "ml",
    "kcal": 819,
    "grasas": 91.0,
    "grasaSaturadas": 12.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 4.2
  },
  {
    "idIngredient": 1005,
    "nameIngredient": "Aceite de Oliva Virgen Extra, Spray, Hacendado",
    "peso": 200,
    "medicion": "ml",
    "kcal": 824,
    "grasas": 91.0,
    "grasaSaturadas": 15.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 2.15
  },
  {
    "idIngredient": 1006,
    "nameIngredient": "Aceite de oliva virgen extra Arbequina Casa Juncal",
    "peso": 500,
    "medicion": "ml",
    "kcal": 824,
    "grasas": 92.0,
    "grasaSaturadas": 18.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 4.1
  },
  {
    "idIngredient": 1007,
    "nameIngredient": "Aceite de girasol refinado 0,2º Hacendado",
    "peso": 1000,
    "medicion": "ml",
    "kcal": 828,
    "grasas": 92.0,
    "grasaSaturadas": 7.5,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 2.55
  },
  {
    "idIngredient": 1008,
    "nameIngredient": "Aceite de coco virgen Hacendado",
    "peso": 450,
    "medicion": "ml",
    "kcal": 900,
    "grasas": 100.0,
    "grasaSaturadas": 94.5,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.0,
    "precio": 4.5
  },
  {
    "idIngredient": 1009,
    "nameIngredient": "Vinagre balsámico de Módena Hacendado",
    "peso": 250,
    "medicion": "ml",
    "kcal": 123,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 25.0,
    "carbohidratosAzucares": 25.0,
    "fibra": 0,
    "proteinas": 1.0,
    "sal": 0.6,
    "precio": 1.1
  },
  {
    "idIngredient": 1010,
    "nameIngredient": "Limón exprimido Hacendado",
    "peso": 280,
    "medicion": "ml",
    "kcal": 29,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 7.1,
    "carbohidratosAzucares": 1.5,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.01,
    "precio": 0.95
  },
  {
    "idIngredient": 1011,
    "nameIngredient": "Crema de vinagre balsámico de Módena",
    "peso": 250,
    "medicion": "ml",
    "kcal": 178,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 41.0,
    "carbohidratosAzucares": 40.0,
    "fibra": 0,
    "proteinas": 1.1,
    "sal": 0.55,
    "precio": 1.6
  },
  {
    "idIngredient": 1012,
    "nameIngredient": "Vinagre de Jerez reserva Hacendado",
    "peso": 250,
    "medicion": "ml",
    "kcal": 37,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 7.1,
    "carbohidratosAzucares": 1.5,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.02,
    "precio": 1.6
  },
  {
    "idIngredient": 1013,
    "nameIngredient": "Crema de vinagre balsámico de manzana Hacendado",
    "peso": 250,
    "medicion": "ml",
    "kcal": 152,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 36.0,
    "carbohidratosAzucares": 30.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 0.04,
    "precio": 2.3
  },
  {
    "idIngredient": 1014,
    "nameIngredient": "Sal Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 0,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.0,
    "sal": 1000.0,
    "precio": 0.25
  },
  {
    "idIngredient": 1015,
    "nameIngredient": "Cebolla frita crujiente Hacendado",
    "peso": 150,
    "medicion": "g",
    "kcal": 590,
    "grasas": 44.0,
    "grasaSaturadas": 21.0,
    "carbohidratos": 40.0,
    "carbohidratosAzucares": 9.0,
    "fibra": 5,
    "proteinas": 6.0,
    "sal": 1.2,
    "precio": 0.8
  },
  {
    "idIngredient": 1016,
    "nameIngredient": "Sazonador para fajitas Hacendado sabor tex-mex",
    "peso": 17,
    "medicion": "g",
    "kcal": 155,
    "grasas": 1.0,
    "grasaSaturadas": 0.4,
    "carbohidratos": 29.8,
    "carbohidratosAzucares": 5.4,
    "fibra": 0,
    "proteinas": 3.6,
    "sal": 50.2,
    "precio": 0.79
  },
  {
    "idIngredient": 1017,
    "nameIngredient": "Sazonador al horno y microondas ajo y limón Hacendado con bolsa",
    "peso": 60,
    "medicion": "g",
    "kcal": 256,
    "grasas": 1.1,
    "grasaSaturadas": 0.6,
    "carbohidratos": 50.8,
    "carbohidratosAzucares": 5.7,
    "fibra": 8,
    "proteinas": 6.6,
    "sal": 24.8,
    "precio": 1.4
  },
  {
    "idIngredient": 1018,
    "nameIngredient": "Sazonador al horno y microondas pollo y costillas a las hierbas provenzales Hacendado con bolsa",
    "peso": 48,
    "medicion": "g",
    "kcal": 252,
    "grasas": 1.7,
    "grasaSaturadas": 0.6,
    "carbohidratos": 49.5,
    "carbohidratosAzucares": 26.5,
    "fibra": 7,
    "proteinas": 6.2,
    "sal": 18.3,
    "precio": 1.4
  },
  {
    "idIngredient": 1019,
    "nameIngredient": "Sazonador para paella con azafrán Hacendado",
    "peso": 20,
    "medicion": "g",
    "kcal": 240,
    "grasas": 4.2,
    "grasaSaturadas": 0.7,
    "carbohidratos": 32.8,
    "carbohidratosAzucares": 20.9,
    "fibra": 14,
    "proteinas": 11.0,
    "sal": 29.0,
    "precio": 1.35
  },
  {
    "idIngredient": 1020,
    "nameIngredient": "Sazonador para burritos Hacendado",
    "peso": 40,
    "medicion": "g",
    "kcal": 268,
    "grasas": 3.3,
    "grasaSaturadas": 0.5,
    "carbohidratos": 39.6,
    "carbohidratosAzucares": 13.4,
    "fibra": 12,
    "proteinas": 14.2,
    "sal": 16.1,
    "precio": 1.1
  },
  {
    "idIngredient": 1021,
    "nameIngredient": "Preparado para paella con azafrán Hacendado",
    "peso": 76,
    "medicion": "g",
    "kcal": 303,
    "grasas": 1.3,
    "grasaSaturadas": 0.0,
    "carbohidratos": 58.3,
    "carbohidratosAzucares": 5.2,
    "fibra": 7,
    "proteinas": 11.1,
    "sal": 12.0,
    "precio": 1.85
  },
  {
    "idIngredient": 1022,
    "nameIngredient": "Sazonador pollo asado Hacendado",
    "peso": 92,
    "medicion": "g",
    "kcal": 109,
    "grasas": 2.1,
    "grasaSaturadas": 0.2,
    "carbohidratos": 12.5,
    "carbohidratosAzucares": 4.2,
    "fibra": 6,
    "proteinas": 6.9,
    "sal": 63.3,
    "precio": 1.45
  },
  {
    "idIngredient": 1023,
    "nameIngredient": "Sazonador espagueti Hacendado",
    "peso": 45,
    "medicion": "g",
    "kcal": 257,
    "grasas": 4.7,
    "grasaSaturadas": 0.4,
    "carbohidratos": 31.5,
    "carbohidratosAzucares": 28.7,
    "fibra": 24,
    "proteinas": 10.2,
    "sal": 19.3,
    "precio": 1.45
  },
  {
    "idIngredient": 1024,
    "nameIngredient": "Sazonador ensalada Hacendado",
    "peso": 95,
    "medicion": "g",
    "kcal": 110,
    "grasas": 2.5,
    "grasaSaturadas": 0.1,
    "carbohidratos": 10.5,
    "carbohidratosAzucares": 5.8,
    "fibra": 14,
    "proteinas": 4.2,
    "sal": 62.5,
    "precio": 2.35
  },
  {
    "idIngredient": 1025,
    "nameIngredient": "Sazonador Ras el Hanout Hacendado",
    "peso": 62,
    "medicion": "g",
    "kcal": 289,
    "grasas": 14.4,
    "grasaSaturadas": 5.9,
    "carbohidratos": 12.9,
    "carbohidratosAzucares": 1.0,
    "fibra": 30,
    "proteinas": 11.6,
    "sal": 20.9,
    "precio": 1.5
  },
  {
    "idIngredient": 1026,
    "nameIngredient": "Mayonesa Hacendado 500ml",
    "peso": 500,
    "medicion": "ml",
    "kcal": 599,
    "grasas": 65.0,
    "grasaSaturadas": 9.7,
    "carbohidratos": 2.4,
    "carbohidratosAzucares": 1.33,
    "fibra": 0,
    "proteinas": 0.6,
    "sal": 1.1,
    "precio": 1.4
  },
  {
    "idIngredient": 1027,
    "nameIngredient": "Mayonesa Hacendado 200ml",
    "peso": 200,
    "medicion": "ml",
    "kcal": 599,
    "grasas": 65.0,
    "grasaSaturadas": 9.7,
    "carbohidratos": 2.4,
    "carbohidratosAzucares": 1.33,
    "fibra": 0,
    "proteinas": 0.6,
    "sal": 1.1,
    "precio": 1.0
  },
  {
    "idIngredient": 1028,
    "nameIngredient": "Mayonesa Hellmann's Tarro 475ml",
    "peso": 475,
    "medicion": "ml",
    "kcal": 552,
    "grasas": 61.0,
    "grasaSaturadas": 9.7,
    "carbohidratos": 2.2,
    "carbohidratosAzucares": 1.4,
    "fibra": 0,
    "proteinas": 0.8,
    "sal": 1.1,
    "precio": 2.95
  },
  {
    "idIngredient": 1029,
    "nameIngredient": "Mayonesa Hellmann's Tarro 225ml",
    "peso": 475,
    "medicion": "ml",
    "kcal": 552,
    "grasas": 61.0,
    "grasaSaturadas": 9.7,
    "carbohidratos": 2.2,
    "carbohidratosAzucares": 1.4,
    "fibra": 0,
    "proteinas": 0.8,
    "sal": 1.1,
    "precio": 1.6
  },
  {
    "idIngredient": 1030,
    "nameIngredient": "Salsa ligera Ligeresa 450ml",
    "peso": 450,
    "medicion": "ml",
    "kcal": 277,
    "grasas": 27.0,
    "grasaSaturadas": 4.4,
    "carbohidratos": 9.0,
    "carbohidratosAzucares": 2.4,
    "fibra": 0,
    "proteinas": 0.7,
    "sal": 0.99,
    "precio": 2.0
  },
  {
    "idIngredient": 1031,
    "nameIngredient": "Salsa ligera Ligeresa Bote 430ml",
    "peso": 430,
    "medicion": "ml",
    "kcal": 277,
    "grasas": 27.0,
    "grasaSaturadas": 4.4,
    "carbohidratos": 9.0,
    "carbohidratosAzucares": 2.4,
    "fibra": 0,
    "proteinas": 0.7,
    "sal": 0.99,
    "precio": 2.0
  },
  {
    "idIngredient": 1032,
    "nameIngredient": "Salsa ligera Ligeresa 225ml",
    "peso": 225,
    "medicion": "ml",
    "kcal": 277,
    "grasas": 27.0,
    "grasaSaturadas": 4.4,
    "carbohidratos": 9.0,
    "carbohidratosAzucares": 2.4,
    "fibra": 0,
    "proteinas": 0.7,
    "sal": 0.99,
    "precio": 1.0
  },
  {
    "idIngredient": 1033,
    "nameIngredient": "Salsa ligera Hacendado 60% menos de materia grasa",
    "peso": 500,
    "medicion": "ml",
    "kcal": 294,
    "grasas": 31.0,
    "grasaSaturadas": 4.8,
    "carbohidratos": 6.5,
    "carbohidratosAzucares": 3.5,
    "fibra": 0,
    "proteinas": 0.7,
    "sal": 2.1,
    "precio": 1.4
  },
  {
    "idIngredient": 1034,
    "nameIngredient": "Ketchup Hacendado",
    "peso": 600,
    "medicion": "g",
    "kcal": 115,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 27.0,
    "carbohidratosAzucares": 20.5,
    "fibra": 0,
    "proteinas": 1.3,
    "sal": 1.8,
    "precio": 0.9
  },
  {
    "idIngredient": 1035,
    "nameIngredient": "Ketchup light Hacendado",
    "peso": 600,
    "medicion": "g",
    "kcal": 71,
    "grasas": 0.2,
    "grasaSaturadas": 0.0,
    "carbohidratos": 15.9,
    "carbohidratosAzucares": 10.0,
    "fibra": 0,
    "proteinas": 1.2,
    "sal": 2.1,
    "precio": 1.1
  },
  {
    "idIngredient": 1036,
    "nameIngredient": "Mostaza a la antigua Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 135,
    "grasas": 10.7,
    "grasaSaturadas": 0.8,
    "carbohidratos": 2.3,
    "carbohidratosAzucares": 2.2,
    "fibra": 0,
    "proteinas": 7.7,
    "sal": 4.2,
    "precio": 1.5
  },
  {
    "idIngredient": 1037,
    "nameIngredient": "Allioli Chovi",
    "peso": 180,
    "medicion": "ml",
    "kcal": 749,
    "grasas": 82.0,
    "grasaSaturadas": 10.0,
    "carbohidratos": 1.5,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 1.2,
    "sal": 1.3,
    "precio": 1.6
  },
  {
    "idIngredient": 1038,
    "nameIngredient": "Allioli Hacendado",
    "peso": 200,
    "medicion": "ml",
    "kcal": 746,
    "grasas": 82.0,
    "grasaSaturadas": 10.0,
    "carbohidratos": 1.3,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 1.1,
    "sal": 1.3,
    "precio": 1.2
  },
  {
    "idIngredient": 1039,
    "nameIngredient": "Tomate frito Hacendado 3 bricks z 400g",
    "peso": 400,
    "medicion": "g",
    "kcal": 77,
    "grasas": 3.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 9.5,
    "carbohidratosAzucares": 6.9,
    "fibra": 0,
    "proteinas": 1.5,
    "sal": 1.0,
    "precio": 1.2
  },
  {
    "idIngredient": 1040,
    "nameIngredient": "Tomate frito Hacendado 3 minibricks x 210g",
    "peso": 210,
    "medicion": "g",
    "kcal": 77,
    "grasas": 3.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 9.5,
    "carbohidratosAzucares": 6.9,
    "fibra": 0,
    "proteinas": 1.5,
    "sal": 1.0,
    "precio": 0.9
  },
  {
    "idIngredient": 1041,
    "nameIngredient": "Tomate frito Hacendado Tarro 560g",
    "peso": 560,
    "medicion": "g",
    "kcal": 77,
    "grasas": 3.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 9.5,
    "carbohidratosAzucares": 6.9,
    "fibra": 0,
    "proteinas": 1.5,
    "sal": 1.0,
    "precio": 0.85
  },
  {
    "idIngredient": 1042,
    "nameIngredient": "Tomate frito receta artesana Hacendado con aceite de oliva Tarro 560g",
    "peso": 560,
    "medicion": "g",
    "kcal": 201,
    "grasas": 15.0,
    "grasaSaturadas": 2.1,
    "carbohidratos": 14.3,
    "carbohidratosAzucares": 12.5,
    "fibra": 0,
    "proteinas": 1.6,
    "sal": 0.9,
    "precio": 1.85
  },
  {
    "idIngredient": 1043,
    "nameIngredient": "Tomate frito receta artesana Hacendado con aceite de oliva Tarro 300g",
    "peso": 300,
    "medicion": "g",
    "kcal": 201,
    "grasas": 15.0,
    "grasaSaturadas": 2.1,
    "carbohidratos": 14.3,
    "carbohidratosAzucares": 12.5,
    "fibra": 0,
    "proteinas": 1.6,
    "sal": 0.9,
    "precio": 1.45
  },
  {
    "idIngredient": 1044,
    "nameIngredient": "Tomate frito estilo casero Hacendado con aceite de oliva Brick 380g",
    "peso": 380,
    "medicion": "g",
    "kcal": 104,
    "grasas": 5.0,
    "grasaSaturadas": 0.5,
    "carbohidratos": 12.4,
    "carbohidratosAzucares": 9.7,
    "fibra": 0,
    "proteinas": 2.0,
    "sal": 0.8,
    "precio": 1.05
  },
  {
    "idIngredient": 1045,
    "nameIngredient": "Tomate frito Hacendado con aceite de oliva 3 minibricks x 210g",
    "peso": 210,
    "medicion": "g",
    "kcal": 77,
    "grasas": 3.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 9.5,
    "carbohidratosAzucares": 6.9,
    "fibra": 0,
    "proteinas": 1.5,
    "sal": 1.0,
    "precio": 0.95
  },
  {
    "idIngredient": 1046,
    "nameIngredient": "Tomate frito sin azúcares añadidos Hacendado Tarro 560g",
    "peso": 560,
    "medicion": "g",
    "kcal": 65,
    "grasas": 3.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 6.5,
    "carbohidratosAzucares": 4.7,
    "fibra": 0,
    "proteinas": 1.5,
    "sal": 1.2,
    "precio": 1.05
  },
  {
    "idIngredient": 1047,
    "nameIngredient": "Tomate frito con cebolla Hacendado con aceite de oliva Brick 380g",
    "peso": 380,
    "medicion": "g",
    "kcal": 130,
    "grasas": 8.5,
    "grasaSaturadas": 1.3,
    "carbohidratos": 11.0,
    "carbohidratosAzucares": 9.7,
    "fibra": 0,
    "proteinas": 1.4,
    "sal": 1.0,
    "precio": 1.2
  },
  {
    "idIngredient": 1048,
    "nameIngredient": "Salsa barbacoa Hacendado 350g",
    "peso": 350,
    "medicion": "g",
    "kcal": 150,
    "grasas": 0.1,
    "grasaSaturadas": 0.0,
    "carbohidratos": 35.5,
    "carbohidratosAzucares": 27.8,
    "fibra": 0,
    "proteinas": 1.2,
    "sal": 1.8,
    "precio": 1.0
  },
  {
    "idIngredient": 1049,
    "nameIngredient": "Salsa pimienta verde Hacendado 50g",
    "peso": 50,
    "medicion": "g",
    "kcal": 382,
    "grasas": 11.1,
    "grasaSaturadas": 7.1,
    "carbohidratos": 55.8,
    "carbohidratosAzucares": 20.1,
    "fibra": 1,
    "proteinas": 14.0,
    "sal": 9.7,
    "precio": 0.95
  },
  {
    "idIngredient": 1050,
    "nameIngredient": "Salsa burger Hacendado",
    "peso": 250,
    "medicion": "ml",
    "kcal": 340,
    "grasas": 31.6,
    "grasaSaturadas": 2.3,
    "carbohidratos": 11.3,
    "carbohidratosAzucares": 9.8,
    "fibra": 0,
    "proteinas": 1.5,
    "sal": 1.8,
    "precio": 1.25
  },
  {
    "idIngredient": 1051,
    "nameIngredient": "Salsa barbacoa dulce y picante Hacendado",
    "peso": 250,
    "medicion": "ml",
    "kcal": 215,
    "grasas": 0.4,
    "grasaSaturadas": 0.1,
    "carbohidratos": 49.5,
    "carbohidratosAzucares": 46.3,
    "fibra": 0,
    "proteinas": 1.6,
    "sal": 2.8,
    "precio": 1.25
  },
  {
    "idIngredient": 1052,
    "nameIngredient": "Salsa boloñesa Hacendado",
    "peso": 300,
    "medicion": "g",
    "kcal": 154,
    "grasas": 10.0,
    "grasaSaturadas": 1.9,
    "carbohidratos": 11.4,
    "carbohidratosAzucares": 9.6,
    "fibra": 0,
    "proteinas": 3.8,
    "sal": 1.4,
    "precio": 1.2
  },
  {
    "idIngredient": 1053,
    "nameIngredient": "Salsa de tomate, albahaca y orégano Hacendado",
    "peso": 300,
    "medicion": "g",
    "kcal": 69,
    "grasas": 3.0,
    "grasaSaturadas": 0.4,
    "carbohidratos": 8.9,
    "carbohidratosAzucares": 8.0,
    "fibra": 0,
    "proteinas": 1.2,
    "sal": 0.6,
    "precio": 1.2
  },
  {
    "idIngredient": 1054,
    "nameIngredient": "Salsa fresca Queso Hacendado",
    "peso": 180,
    "medicion": "g",
    "kcal": 121,
    "grasas": 8.5,
    "grasaSaturadas": 6.0,
    "carbohidratos": 6.1,
    "carbohidratosAzucares": 1.9,
    "fibra": 1,
    "proteinas": 4.7,
    "sal": 1.2,
    "precio": 1.3
  },
  {
    "idIngredient": 1055,
    "nameIngredient": "Salsa fresca Pesto Hacendado",
    "peso": 150,
    "medicion": "g",
    "kcal": 529,
    "grasas": 51.0,
    "grasaSaturadas": 7.8,
    "carbohidratos": 12.0,
    "carbohidratosAzucares": 6.2,
    "fibra": 3,
    "proteinas": 4.0,
    "sal": 1.2,
    "precio": 1.35
  },
  {
    "idIngredient": 1056,
    "nameIngredient": "Salsa fresca Setas Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 117,
    "grasas": 9.8,
    "grasaSaturadas": 6.1,
    "carbohidratos": 5.0,
    "carbohidratosAzucares": 1.7,
    "fibra": 2,
    "proteinas": 1.7,
    "sal": 1.7,
    "precio": 1.3
  },
  {
    "idIngredient": 1057,
    "nameIngredient": "Salsa fresca Carbonara Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 189,
    "grasas": 17.0,
    "grasaSaturadas": 10.0,
    "carbohidratos": 4.2,
    "carbohidratosAzucares": 2.7,
    "fibra": 0,
    "proteinas": 4.9,
    "sal": 1.6,
    "precio": 1.3
  },
  {
    "idIngredient": 1058,
    "nameIngredient": "Salsa de soja Hacendado",
    "peso": 250,
    "medicion": "ml",
    "kcal": 74,
    "grasas": 0.0,
    "grasaSaturadas": 0.0,
    "carbohidratos": 8.3,
    "carbohidratosAzucares": 4.3,
    "fibra": 0,
    "proteinas": 7.5,
    "sal": 15.7,
    "precio": 1.35
  },
  {
    "idIngredient": 1059,
    "nameIngredient": "Guacamole Hacendado 95% aguacate fresco",
    "peso": 200,
    "medicion": "g",
    "kcal": 114,
    "grasas": 4.7,
    "grasaSaturadas": 1.1,
    "carbohidratos": 7.7,
    "carbohidratosAzucares": 2.8,
    "fibra": 4,
    "proteinas": 8.2,
    "sal": 1.0,
    "precio": 2.25
  },
  {
    "idIngredient": 1060,
    "nameIngredient": "Chili con carne Hacendado",
    "peso": 420,
    "medicion": "g",
    "kcal": 189,
    "grasas": 17.0,
    "grasaSaturadas": 10.0,
    "carbohidratos": 4.2,
    "carbohidratosAzucares": 2.7,
    "fibra": 0,
    "proteinas": 4.9,
    "sal": 1.6,
    "precio": 1.3
  },
  {
    "idIngredient": 1061,
    "nameIngredient": "Salsa romesco Ferrer",
    "peso": 130,
    "medicion": "g",
    "kcal": 423,
    "grasas": 39.0,
    "grasaSaturadas": 4.6,
    "carbohidratos": 14.0,
    "carbohidratosAzucares": 4.1,
    "fibra": 0,
    "proteinas": 3.4,
    "sal": 1.4,
    "precio": 1.8
  },
  {
    "idIngredient": 1062,
    "nameIngredient": "Pasta de sésamo Tahini Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 66,
    "grasas": 10.1,
    "grasaSaturadas": 30.0,
    "carbohidratos": 3.2,
    "carbohidratosAzucares": 1.4,
    "fibra": 3,
    "proteinas": 24.9,
    "sal": 0.04,
    "precio": 2.9
  },
  {
    "idIngredient": 2001,
    "nameIngredient": "Aceitunas manzanilla rellenas de anchoa Hacendado 3 botes x 50g",
    "peso": 50,
    "medicion": "g",
    "kcal": 150,
    "grasas": 15.0,
    "grasaSaturadas": 2.9,
    "carbohidratos": 0.9,
    "carbohidratosAzucares": 0.5,
    "fibra": 0,
    "proteinas": 1.6,
    "sal": 2.6,
    "precio": 1.25
  },
  {
    "idIngredient": 2002,
    "nameIngredient": "Aceitunas manzanilla rellenas de anchoa Hacendado reducidas en sal 3 x 50g",
    "peso": 50,
    "medicion": "g",
    "kcal": 163,
    "grasas": 15.6,
    "grasaSaturadas": 3.07,
    "carbohidratos": 0.7,
    "carbohidratosAzucares": 0.5,
    "fibra": 0,
    "proteinas": 1.7,
    "sal": 1.9,
    "precio": 1.6
  },
  {
    "idIngredient": 2003,
    "nameIngredient": "Aceitunas negras Hacendado sin hueso",
    "peso": 150,
    "medicion": "g",
    "kcal": 125,
    "grasas": 13.0,
    "grasaSaturadas": 2.2,
    "carbohidratos": 0.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 0,
    "proteinas": 0.5,
    "sal": 2.5,
    "precio": 0.9
  },
  {
    "idIngredient": 2004,
    "nameIngredient": "Pepinillos pequeños Hacendado",
    "peso": 250,
    "medicion": "g",
    "kcal": 79,
    "grasas": 0.5,
    "grasaSaturadas": 0.2,
    "carbohidratos": 2.3,
    "carbohidratosAzucares": 0.6,
    "fibra": 1,
    "proteinas": 1.3,
    "sal": 1.5,
    "precio": 1.5
  },
  {
    "idIngredient": 2005,
    "nameIngredient": "Altramuces Hacendado",
    "peso": 440,
    "medicion": "g",
    "kcal": 105,
    "grasas": 1.7,
    "grasaSaturadas": 0.3,
    "carbohidratos": 9.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 3.5,
    "precio": 1.3
  },
  {
    "idIngredient": 2006,
    "nameIngredient": "Nuez natural Hacendado pelada",
    "peso": 200,
    "medicion": "g",
    "kcal": 716,
    "grasas": 69.6,
    "grasaSaturadas": 6.0,
    "carbohidratos": 2.2,
    "carbohidratosAzucares": 1.7,
    "fibra": 6,
    "proteinas": 17.0,
    "sal": 0.0,
    "precio": 2.6
  },
  {
    "idIngredient": 2007,
    "nameIngredient": "Almendra natural Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 603,
    "grasas": 51.0,
    "grasaSaturadas": 3.9,
    "carbohidratos": 5.4,
    "carbohidratosAzucares": 5.4,
    "fibra": 11,
    "proteinas": 25.0,
    "sal": 0.0,
    "precio": 2.45
  },
  {
    "idIngredient": 3001,
    "nameIngredient": "Arroz redondo Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 344,
    "grasas": 1.0,
    "grasaSaturadas": 0.2,
    "carbohidratos": 75.0,
    "carbohidratosAzucares": 0.5,
    "fibra": 0,
    "proteinas": 8.2,
    "sal": 0.01,
    "precio": 0.95
  },
  {
    "idIngredient": 3002,
    "nameIngredient": "Arroz bomba Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 349,
    "grasas": 0.9,
    "grasaSaturadas": 0.3,
    "carbohidratos": 77.0,
    "carbohidratosAzucares": 0.5,
    "fibra": 0,
    "proteinas": 7.7,
    "sal": 0.01,
    "precio": 2.6
  },
  {
    "idIngredient": 3003,
    "nameIngredient": "Arroz largo Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 345,
    "grasas": 0.7,
    "grasaSaturadas": 0.2,
    "carbohidratos": 77.0,
    "carbohidratosAzucares": 0.5,
    "fibra": 0,
    "proteinas": 7.2,
    "sal": 0.01,
    "precio": 0.98
  },
  {
    "idIngredient": 3004,
    "nameIngredient": "Arroz integral redondo Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 347,
    "grasas": 2.5,
    "grasaSaturadas": 0.5,
    "carbohidratos": 71.0,
    "carbohidratosAzucares": 1.2,
    "fibra": 3,
    "proteinas": 8.4,
    "sal": 0.01,
    "precio": 1.5
  },
  {
    "idIngredient": 3005,
    "nameIngredient": "Quinoa Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 389,
    "grasas": 6.1,
    "grasaSaturadas": 0.78,
    "carbohidratos": 66.05,
    "carbohidratosAzucares": 6.32,
    "fibra": 7,
    "proteinas": 14.0,
    "sal": 0.0,
    "precio": 2.5
  },
  {
    "idIngredient": 3006,
    "nameIngredient": "Arroz vaporizado Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 345,
    "grasas": 0.7,
    "grasaSaturadas": 0.2,
    "carbohidratos": 76.0,
    "carbohidratosAzucares": 0.6,
    "fibra": 0,
    "proteinas": 7.9,
    "sal": 0.01,
    "precio": 1.25
  },
  {
    "idIngredient": 3007,
    "nameIngredient": "Garbanzo cocido Hacendado Tarro 570g",
    "peso": 400,
    "medicion": "g",
    "kcal": 90,
    "grasas": 2.2,
    "grasaSaturadas": 0.5,
    "carbohidratos": 9.5,
    "carbohidratosAzucares": 0.7,
    "fibra": 0,
    "proteinas": 5.5,
    "sal": 0.8,
    "precio": 0.75
  },
  {
    "idIngredient": 3008,
    "nameIngredient": "Garbanzo cocido pedrosillano Hacendado categoría extra",
    "peso": 400,
    "medicion": "g",
    "kcal": 90,
    "grasas": 2.2,
    "grasaSaturadas": 0.5,
    "carbohidratos": 9.5,
    "carbohidratosAzucares": 0.7,
    "fibra": 0,
    "proteinas": 5.5,
    "sal": 0.8,
    "precio": 0.95
  },
  {
    "idIngredient": 3009,
    "nameIngredient": "Garbanzo Hacendado categoría extra",
    "peso": 1000,
    "medicion": "g",
    "kcal": 348,
    "grasas": 6.1,
    "grasaSaturadas": 0.4,
    "carbohidratos": 47.5,
    "carbohidratosAzucares": 6.0,
    "fibra": 14,
    "proteinas": 18.6,
    "sal": 0.07,
    "precio": 2.0
  },
  {
    "idIngredient": 3010,
    "nameIngredient": "Alubia cocida blanca Hacendado Tarro 570g",
    "peso": 400,
    "medicion": "g",
    "kcal": 83,
    "grasas": 0.4,
    "grasaSaturadas": 0.1,
    "carbohidratos": 10.7,
    "carbohidratosAzucares": 0.8,
    "fibra": 0,
    "proteinas": 5.8,
    "sal": 0.8,
    "precio": 0.7
  },
  {
    "idIngredient": 3011,
    "nameIngredient": "Lenteja cocida Hacendado 570g",
    "peso": 400,
    "medicion": "g",
    "kcal": 89,
    "grasas": 0.4,
    "grasaSaturadas": 0.1,
    "carbohidratos": 10.7,
    "carbohidratosAzucares": 0.5,
    "fibra": 0,
    "proteinas": 8.2,
    "sal": 0.8,
    "precio": 0.77
  },
  {
    "idIngredient": 3012,
    "nameIngredient": "Lenteja pardina Hacendado categoría extra",
    "peso": 1000,
    "medicion": "g",
    "kcal": 320,
    "grasas": 1.2,
    "grasaSaturadas": 0.2,
    "carbohidratos": 48.1,
    "carbohidratosAzucares": 1.3,
    "fibra": 10,
    "proteinas": 24.5,
    "sal": 0.05,
    "precio": 1.6
  },
  {
    "idIngredient": 3013,
    "nameIngredient": "Soja texturizada grano fino Hacendado",
    "peso": 250,
    "medicion": "g",
    "kcal": 364,
    "grasas": 4.0,
    "grasaSaturadas": 0.6,
    "carbohidratos": 30.0,
    "carbohidratosAzucares": 0.0,
    "fibra": 4,
    "proteinas": 50.0,
    "sal": 0.04,
    "precio": 1.85
  },
  {
    "idIngredient": 3014,
    "nameIngredient": "Lenteja Hacendado categoría extra",
    "peso": 1000,
    "medicion": "g",
    "kcal": 320,
    "grasas": 1.2,
    "grasaSaturadas": 0.2,
    "carbohidratos": 48.1,
    "carbohidratosAzucares": 1.3,
    "fibra": 10,
    "proteinas": 24.5,
    "sal": 0.05,
    "precio": 1.75
  },
  {
    "idIngredient": 3015,
    "nameIngredient": "Fideo cabello de ángel Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.78
  },
  {
    "idIngredient": 3016,
    "nameIngredient": "Fideuá Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.78
  },
  {
    "idIngredient": 3017,
    "nameIngredient": "Fideo grueso/medio/pequeño Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.78
  },
  {
    "idIngredient": 3018,
    "nameIngredient": "Fideo integral Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 349,
    "grasas": 2.6,
    "grasaSaturadas": 0.4,
    "carbohidratos": 65.0,
    "carbohidratosAzucares": 4.0,
    "fibra": 7,
    "proteinas": 13.0,
    "sal": 0.04,
    "precio": 1.1
  },
  {
    "idIngredient": 3019,
    "nameIngredient": "Fideo sin gluten con quinoa Felicia",
    "peso": 500,
    "medicion": "g",
    "kcal": 355,
    "grasas": 2.0,
    "grasaSaturadas": 0.7,
    "carbohidratos": 76.0,
    "carbohidratosAzucares": 0.5,
    "fibra": 3,
    "proteinas": 7.3,
    "sal": 0.01,
    "precio": 1.7
  },
  {
    "idIngredient": 3020,
    "nameIngredient": "Pajaritas vegetales Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 359,
    "grasas": 1.7,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.1,
    "fibra": 5,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 1.0
  },
  {
    "idIngredient": 3021,
    "nameIngredient": "Hélices con vegetales Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 359,
    "grasas": 1.7,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.1,
    "fibra": 5,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 1.42
  },
  {
    "idIngredient": 3022,
    "nameIngredient": "Macarrón fino Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.77
  },
  {
    "idIngredient": 3023,
    "nameIngredient": "Macarrón rayado Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.77
  },
  {
    "idIngredient": 3024,
    "nameIngredient": "Macarrón Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 1.2
  },
  {
    "idIngredient": 3025,
    "nameIngredient": "Pasta galets",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 1.15
  },
  {
    "idIngredient": 3026,
    "nameIngredient": "Tallarín Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.77
  },
  {
    "idIngredient": 3027,
    "nameIngredient": "Spaghetti fino",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 0.77
  },
  {
    "idIngredient": 3028,
    "nameIngredient": "Spaghetti al huevo Hacendado",
    "peso": 500,
    "medicion": "g",
    "kcal": 359,
    "grasas": 3.3,
    "grasaSaturadas": 1.0,
    "carbohidratos": 68.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.08,
    "precio": 1.2
  },
  {
    "idIngredient": 3029,
    "nameIngredient": "Spaghetti Hacendado 1kg",
    "peso": 1000,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 1.15
  },
  {
    "idIngredient": 3030,
    "nameIngredient": "Spaghetti Hacendado 500g",
    "peso": 500,
    "medicion": "g",
    "kcal": 366,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 74.0,
    "carbohidratosAzucares": 3.5,
    "fibra": 4,
    "proteinas": 12.0,
    "sal": 0.04,
    "precio": 1.15
  },
  {
    "idIngredient": 3031,
    "nameIngredient": "Spaghetti sin gluten con quinoa Felicia",
    "peso": 500,
    "medicion": "g",
    "kcal": 355,
    "grasas": 2.0,
    "grasaSaturadas": 0.7,
    "carbohidratos": 76.0,
    "carbohidratosAzucares": 0.5,
    "fibra": 3,
    "proteinas": 7.3,
    "sal": 0.01,
    "precio": 1.7
  },
  {
    "idIngredient": 3032,
    "nameIngredient": "Gnocchi frescos Hacendado de patata",
    "peso": 500,
    "medicion": "g",
    "kcal": 174,
    "grasas": 0.4,
    "grasaSaturadas": 0.2,
    "carbohidratos": 37.6,
    "carbohidratosAzucares": 0.2,
    "fibra": 0,
    "proteinas": 4.5,
    "sal": 0.87,
    "precio": 1.1
  },
  {
    "idIngredient": 3033,
    "nameIngredient": "Placas para canelones tradicionales Hacendado",
    "peso": 160,
    "medicion": "g",
    "kcal": 362,
    "grasas": 1.1,
    "grasaSaturadas": 0.2,
    "carbohidratos": 75.0,
    "carbohidratosAzucares": 2.0,
    "fibra": 4,
    "proteinas": 11.0,
    "sal": 0.01,
    "precio": 0.7
  },
  {
    "idIngredient": 3034,
    "nameIngredient": "Cannelloni tubos precocidos Hacendado",
    "peso": 250,
    "medicion": "g",
    "kcal": 350,
    "grasas": 1.5,
    "grasaSaturadas": 0.3,
    "carbohidratos": 72.6,
    "carbohidratosAzucares": 3.5,
    "fibra": 3,
    "proteinas": 11.5,
    "sal": 0.005,
    "precio": 1.35
  },
  {
    "idIngredient": 4001,
    "nameIngredient": "Harina de trigo Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 350,
    "grasas": 1.3,
    "grasaSaturadas": 0.2,
    "carbohidratos": 73.0,
    "carbohidratosAzucares": 0.6,
    "fibra": 3,
    "proteinas": 10.0,
    "sal": 0.02,
    "precio": 0.75
  },
  {
    "idIngredient": 4002,
    "nameIngredient": "Harina de fuerza Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 340,
    "grasas": 0.9,
    "grasaSaturadas": 0.2,
    "carbohidratos": 68.8,
    "carbohidratosAzucares": 0.4,
    "fibra": 3,
    "proteinas": 13.0,
    "sal": 0.001,
    "precio": 0.95
  },
  {
    "idIngredient": 4003,
    "nameIngredient": "Preparado para bizcochos con levadura incorporada Hacendado",
    "peso": 1000,
    "medicion": "g",
    "kcal": 333,
    "grasas": 1.14,
    "grasaSaturadas": 0.139,
    "carbohidratos": 69.79,
    "carbohidratosAzucares": 0.55,
    "fibra": 0,
    "proteinas": 10.1,
    "sal": 0.65,
    "precio": 1.05
  },
  {
    "idIngredient": 4004,
    "nameIngredient": "Chocolate negro fundir Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 529,
    "grasas": 33.0,
    "grasaSaturadas": 20.0,
    "carbohidratos": 48.0,
    "carbohidratosAzucares": 45.0,
    "fibra": 9,
    "proteinas": 5.8,
    "sal": 0.1,
    "precio": 0.9
  },
  {
    "idIngredient": 4005,
    "nameIngredient": "Chocolate blanco fundir Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 549,
    "grasas": 33.0,
    "grasaSaturadas": 21.0,
    "carbohidratos": 55.0,
    "carbohidratosAzucares": 55.0,
    "fibra": 0,
    "proteinas": 7.9,
    "sal": 0.3,
    "precio": 1.3
  },
  {
    "idIngredient": 4006,
    "nameIngredient": "Chocolate negro 70% cacao fundir Hacendado 0% azúcares añadidos",
    "peso": 200,
    "medicion": "g",
    "kcal": 525,
    "grasas": 42.0,
    "grasaSaturadas": 26.0,
    "carbohidratos": 35.0,
    "carbohidratosAzucares": 0.1,
    "fibra": 10,
    "proteinas": 8.7,
    "sal": 0.0,
    "precio": 1.55
  },
  {
    "idIngredient": 4007,
    "nameIngredient": "Chocolate con leche fundir Hacendado",
    "peso": 200,
    "medicion": "g",
    "kcal": 531,
    "grasas": 31.0,
    "grasaSaturadas": 19.0,
    "carbohidratos": 54.0,
    "carbohidratosAzucares": 52.0,
    "fibra": 4,
    "proteinas": 8.3,
    "sal": 0.1,
    "precio": 1.2
  },
  {
    "idIngredient": 4008,
    "nameIngredient": "Masa de hojaldre sin gluten Hacendado",
    "peso": 280,
    "medicion": "g",
    "kcal": 346,
    "grasas": 20.0,
    "grasaSaturadas": 9.1,
    "carbohidratos": 37.0,
    "carbohidratosAzucares": 1.0,
    "fibra": 4,
    "proteinas": 2.5,
    "sal": 0.98,
    "precio": 2.6
  },
  {
    "idIngredient": 4009,
    "nameIngredient": "Masa fresca hojaldre Hacendado",
    "peso": 260,
    "medicion": "g",
    "kcal": 385,
    "grasas": 21.0,
    "grasaSaturadas": 10.6,
    "carbohidratos": 41.5,
    "carbohidratosAzucares": 2.6,
    "fibra": 0,
    "proteinas": 7.5,
    "sal": 1.1,
    "precio": 2.4
  },
  {
    "idIngredient": 4010,
    "nameIngredient": "Masa fresca Hacendado hojaldre con mantequilla",
    "peso": 260,
    "medicion": "g",
    "kcal": 409,
    "grasas": 23.6,
    "grasaSaturadas": 17.2,
    "carbohidratos": 42.2,
    "carbohidratosAzucares": 1.4,
    "fibra": 0,
    "proteinas": 7.0,
    "sal": 1.2,
    "precio": 2.8
  },
  {
    "idIngredient": 4011,
    "nameIngredient": "Masa fresca quebrada brisa Hacendado",
    "peso": 230,
    "medicion": "g",
    "kcal": 374,
    "grasas": 21.0,
    "grasaSaturadas": 8.8,
    "carbohidratos": 39.0,
    "carbohidratosAzucares": 1.5,
    "fibra": 0,
    "proteinas": 6.1,
    "sal": 1.2,
    "precio": 2.5
  },
  {
    "idIngredient": 4012,
    "nameIngredient": "Masa fresca empanada Hacendado",
    "peso": 230,
    "medicion": "g",
    "kcal": 362,
    "grasas": 18.7,
    "grasaSaturadas": 9.1,
    "carbohidratos": 43.0,
    "carbohidratosAzucares": 2.8,
    "fibra": 0,
    "proteinas": 5.4,
    "sal": 1.2,
    "precio": 2.5
  },
  {
    "idIngredient": 4013,
    "nameIngredient": "Masa filo Hacendado 8-10 hojas",
    "peso": 250,
    "medicion": "g",
    "kcal": 290,
    "grasas": 1.1,
    "grasaSaturadas": 0.2,
    "carbohidratos": 60.0,
    "carbohidratosAzucares": 4.0,
    "fibra": 2,
    "proteinas": 9.0,
    "sal": 0.75,
    "precio": 1.9
  },
  {
    "idIngredient": 4014,
    "nameIngredient": "Barra de pan 250g",
    "peso": 250,
    "medicion": "g",
    "kcal": 268,
    "grasas": 1.3,
    "grasaSaturadas": 0.2,
    "carbohidratos": 54.0,
    "carbohidratosAzucares": 2.7,
    "fibra": 3,
    "proteinas": 8.9,
    "sal": 1.6,
    "precio": 0.45
  },
  {
    "idIngredient": 4015,
    "nameIngredient": "Barra de pan rústica 500g",
    "peso": 500,
    "medicion": "g",
    "kcal": 272,
    "grasas": 0.9,
    "grasaSaturadas": 0.2,
    "carbohidratos": 56.0,
    "carbohidratosAzucares": 2.6,
    "fibra": 3,
    "proteinas": 8.4,
    "sal": 1.2,
    "precio": 0.5
  },
  {
    "idIngredient": 4016,
    "nameIngredient": "Baguette masa madre 250g",
    "peso": 250,
    "medicion": "g",
    "kcal": 267,
    "grasas": 1.1,
    "grasaSaturadas": 0.2,
    "carbohidratos": 55.0,
    "carbohidratosAzucares": 2.6,
    "fibra": 3,
    "proteinas": 8.2,
    "sal": 1.3,
    "precio": 0.5
  },
  {
    "idIngredient": 4017,
    "nameIngredient": "Baguette sin gluten 175g",
    "peso": 175,
    "medicion": "g",
    "kcal": 255,
    "grasas": 9.5,
    "grasaSaturadas": 1.0,
    "carbohidratos": 36.2,
    "carbohidratosAzucares": 2.3,
    "fibra": 8,
    "proteinas": 2.2,
    "sal": 1.11,
    "precio": 2.1
  },
  {
    "idIngredient": 4018,
    "nameIngredient": "Pan de molde blanco sin corteza Hacendado 450g",
    "peso": 450,
    "medicion": "g",
    "kcal": 225,
    "grasas": 2.1,
    "grasaSaturadas": 0.5,
    "carbohidratos": 42.0,
    "carbohidratosAzucares": 3.9,
    "fibra": 3,
    "proteinas": 8.0,
    "sal": 1.1,
    "precio": 1.25
  },
  {
    "idIngredient": 4019,
    "nameIngredient": "Pan de molde blanco Hacendado 460g",
    "peso": 460,
    "medicion": "g",
    "kcal": 249,
    "grasas": 2.1,
    "grasaSaturadas": 0.4,
    "carbohidratos": 47.0,
    "carbohidratosAzucares": 3.9,
    "fibra": 3,
    "proteinas": 9.0,
    "sal": 1.1,
    "precio": 0.85
  },
  {
    "idIngredient": 4020,
    "nameIngredient": "Pan de molde 100% integral Hacendado 460g",
    "peso": 460,
    "medicion": "g",
    "kcal": 238,
    "grasas": 3.2,
    "grasaSaturadas": 0.7,
    "carbohidratos": 37.0,
    "carbohidratosAzucares": 3.3,
    "fibra": 7,
    "proteinas": 11.0,
    "sal": 1.0,
    "precio": 0.95
  },
  {
    "idIngredient": 4021,
    "nameIngredient": "Pan de molde sin gluten blanco Hacendado 440g",
    "peso": 440,
    "medicion": "g",
    "kcal": 250,
    "grasas": 11.0,
    "grasaSaturadas": 1.0,
    "carbohidratos": 28.0,
    "carbohidratosAzucares": 4.3,
    "fibra": 10,
    "proteinas": 4.3,
    "sal": 1.3,
    "precio": 3.1
  },
  {
    "idIngredient": 4022,
    "nameIngredient": "Tortillas de trigo Hacendado 360g",
    "peso": 360,
    "medicion": "g",
    "kcal": 302,
    "grasas": 5.4,
    "grasaSaturadas": 2.6,
    "carbohidratos": 55.0,
    "carbohidratosAzucares": 2.2,
    "fibra": 2,
    "proteinas": 7.3,
    "sal": 1.7,
    "precio": 1.3
  },
  {
    "idIngredient": 4023,
    "nameIngredient": "Pan rallado Hacendado 750g",
    "peso": 750,
    "medicion": "g",
    "kcal": 368,
    "grasas": 1.26,
    "grasaSaturadas": 0.3,
    "carbohidratos": 78.12,
    "carbohidratosAzucares": 3.4,
    "fibra": 4,
    "proteinas": 9.58,
    "sal": 1.025,
    "precio": 0.75
  },
  {
    "idIngredient": 4024,
    "nameIngredient": "Pan rallado con ajo y perejil Hacendado 500g",
    "peso": 500,
    "medicion": "g",
    "kcal": 336,
    "grasas": 1.7,
    "grasaSaturadas": 0.4,
    "carbohidratos": 71.3,
    "carbohidratosAzucares": 2.6,
    "fibra": 7,
    "proteinas": 8.7,
    "sal": 1.02,
    "precio": 0.9
  }
];

var ingredientsNames = [];

// Busca en el Json por id, ya que la id está metida en un bloque habrá que pasar bloque por bloque hasta devolver el que coincide con la id indicada
function findIngredientById(ingredientId) {
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i]["idIngredient"] == ingredientId) {
      return ingredients[i];
    }
  }
}

function deleteIngredient(ingredientId) {
  // calcIngredient(ingredientId, 0);
  let elemento = document.querySelectorAll(
    "tr[data-ingredient-id='" + ingredientId + "']"
  );
  elemento[0].parentNode.removeChild(elemento[0]);
  actualizar();
}

function addIngredient(ingredientId) {
  // obtengo el ingrediente del id que el usuario pasó a traves de la función
  let ingredient = findIngredientById(ingredientId);

  // Crea todos los elementos html necesarios para construir la fila de la tabla
  let tablaBody = document.querySelector("#miTabla>tbody");
  let rowTabla = document.createElement("tr");
  let ingredientName = document.createElement("td");
  let ingredientKcal = document.createElement("td");
  let imgDelete = document.createElement("img");
  let inputContainer = document.createElement("div");
  let inputquantity = document.createElement("input");
  let labelquantity = document.createElement("label");

  // le agrego a la tabla un atributo de data-ingredient-id según el ingrediente que corresponda
  rowTabla.setAttribute("data-ingredient-id", ingredientId);
  rowTabla.setAttribute("class", "ingredientRow");

  // eliminar el \ del principio del src d ela img después cuando lo ase a real
  imgDelete.setAttribute("src", "/icons/close-line.svg");
  imgDelete.setAttribute("alt", "eliminar");
  imgDelete.setAttribute("data-ingredient-id", ingredientId);
  imgDelete.setAttribute(
    "onclick",
    "deleteIngredient(this.dataset.ingredientId)"
  );

  ingredientName.innerHTML = ingredient["nameIngredient"];

  inputContainer.setAttribute("class", "input-table");

  inputquantity.setAttribute("type", "number");
  inputquantity.setAttribute("pattern", "[0-9]{4}");
  inputquantity.setAttribute("data-ingredient-id", ingredientId);
  inputquantity.setAttribute(
    "oninput",
    "calcIngredient(this.dataset.ingredientId, this.value)"
  );

  labelquantity.innerHTML = ingredient["medicion"];

  ingredientKcal.innerHTML = 0;
  ingredientKcal.setAttribute("data-ingredient-id", ingredientId);
  ingredientKcal.setAttribute("class", "kcal");

  inputContainer.appendChild(inputquantity);
  inputContainer.appendChild(labelquantity);

  rowTabla.appendChild(imgDelete);
  rowTabla.appendChild(ingredientName);
  rowTabla.appendChild(inputContainer);
  rowTabla.appendChild(ingredientKcal);
  tablaBody.appendChild(rowTabla);
}

function calcIngredient(ingredientId, value) {
  let ingredient = findIngredientById(ingredientId);
  let elemento = document.querySelectorAll(
    "td.kcal[data-ingredient-id='" + ingredientId + "']"
  );

  if (value >= 0) {
    elemento[0].innerHTML = ((value * ingredient["kcal"]) / 100).toFixed(0);
    actualizar();
  } else {
    elemento[0].innerHTML = 0;
  }

}

function actualizar() {
  let price = document.getElementById("totalPrice");
  let kcal = document.getElementById("totalKcal");
  let grasas = document.getElementById("grasas");
  let saturadas = document.getElementById("saturadas");
  let carbohidratos = document.getElementById("carbohidratos");
  let azucares = document.getElementById("azucares");
  let proteinas = document.getElementById("proteinas");
  let fibras = document.getElementById("fibras");
  let sal = document.getElementById("sal");

  let totalPrice = 0;
  let totalKcal = 0;
  let totalGrasas = 0;
  let totalSaturadas = 0;
  let totalCarbohidratos = 0;
  let totalAzucares = 0;
  let totalProteinas = 0;
  let totalFibras = 0;
  let totalSal = 0;


  let ingredientsRows = document.querySelectorAll('input[data-ingredient-id]');


  for (let i = 0; i < ingredientsRows.length; i++) {
    let ingredientQuantity = ingredientsRows[i].value;
    let ingredient = findIngredientById(ingredientsRows[i].dataset.ingredientId);

    totalPrice += parseFloat(ingredientQuantity * ingredient['precio'] / ingredient['peso']);
    totalKcal += parseInt(ingredientQuantity * ingredient['kcal'] / 100);
    totalGrasas += parseFloat((ingredientQuantity * ingredient['grasas'] / 100));
    totalSaturadas += parseFloat((ingredientQuantity * ingredient['grasaSaturadas'] / 100));
    totalCarbohidratos += parseFloat((ingredientQuantity * ingredient['carbohidratos'] / 100));
    totalAzucares += parseFloat((ingredientQuantity * ingredient['carbohidratosAzucares'] / 100));
    totalProteinas += parseFloat((ingredientQuantity * ingredient['proteinas'] / 100));
    totalFibras += parseFloat((ingredientQuantity * ingredient['fibra'] / 100));
    totalSal += parseFloat((ingredientQuantity * ingredient['sal'] / 100));

    // totalGrasas += parseFloat(((value * ingredientRow["grasas"]) / 100).toFixed(2));

  }
  price.innerHTML = totalPrice.toFixed(2) + ' €';
  kcal.innerHTML = totalKcal + ' kcal';
  grasas.innerHTML = "Grasas: " + totalGrasas.toFixed(1);
  saturadas.innerHTML = "De las cuales saturadas: " + totalSaturadas.toFixed(1);
  carbohidratos.innerHTML = "Carbohidratos: " + totalCarbohidratos.toFixed(1);
  azucares.innerHTML = "De los cuales azúcares: " + totalAzucares.toFixed(1);
  proteinas.innerHTML = "Proteínas: " + totalProteinas.toFixed(1);
  fibras.innerHTML = "Fibras: " + totalFibras.toFixed(1);
  sal.innerHTML = "Sal: " + totalSal.toFixed(1);

}


















































function autocomplete(inp, arr) {
  // crea la array de nombres de items del osrs

  // fetch("https://prices.runescape.wiki/api/v1/osrs/mapping")
  //   .then((response) => response.json())
  //   .then((data) => setPrice(data));

  // // Ejecuta esto luego de recibir una respuesta
  // function setPrice(data) {
  for (let i = 0; i < arr.length; i++) {
    ingredientsNames.push(arr[i]['nameIngredient']);

  }
  // }

  // document.getElementById("salida3").appendChild = elemento;

  /*the autocomplete function takes two arguments,
the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML =
          "<div><strong>" +
          arr[i].substr(0, val.length) +
          "</strong>" +
          arr[i].substr(val.length) +
          "</div>";
        // b.innerHTML += arr[i].substr(val.length);
        // ESTO FUE LO QUE CAMBIÉ
        // los id y los nombres no están en el mismo orden, así que tuve que crear otra array de id en el orden alfabetico según los nomrbes
        // Le agrego la img con el src del id del según el nombre
        // le agrego la class "seachOption" simplemente para darle estlilo a cada casilla de cada resultado

        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
    increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
    decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var items = [];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), ingredients);




CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb`;
-- -----------------------------------------------------
-- Table `mydb`.`ingredients`
-- -----------------------------------------------------
DROP table ingredients;
CREATE TABLE IF NOT EXISTS `mydb`.`ingredients` (
  `id_ingredient` INT NOT NULL AUTO_INCREMENT ,
  `name_ingredient` VARCHAR(150),
  `peso` INT,
  `medicion` VARCHAR(3),
  `kcal` INT,
  `grasas` FLOAT,
  `grasas_saturadas` FLOAT,
  `carbohidratos` FLOAT,
  `carbohidratos_azucares` FLOAT,
  `fibra` INT,
  `proteinas` FLOAT,
  `sal` FLOAT,
  `precio` FLOAT,
  PRIMARY KEY (`id_ingredient`));

-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
DROP TABLE recipe_category;
CREATE TABLE IF NOT EXISTS `mydb`.`recipe_category` (
  `id_recipe_category` INT,
  `name_recipe_category` VARCHAR(45),
  PRIMARY KEY (`id_recipe_category`));
  
DROP TABLE categories;
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `id_category` INT,
  `name_category` VARCHAR(45),
  PRIMARY KEY (`id_category`));
-- -----------------------------------------------------
-- Table `mydb`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`recipes` (
  `id_recipe` INT NOT NULL,
  `name_recipe` VARCHAR(45) NULL,
  PRIMARY KEY (`id_recipe`));

INSERT INTO recipe_category(id_recipe_category,name_recipe_category) VALUES
(20, "reposteria"),
(21, "carnes"),
(22, "ensaladas"),
(23, "pescados"),
(24, "sopas_y_cremas"),
(25, "salsas"),
(26, "pasta");
SELECT * FROM recipe_category;



INSERT INTO categories (id_category, name_category) VALUES
(1,"aceites_especias_salsas"),
(2,"aperitivos"),
(3,"arroz_legumbres_pasta"),
(4,"panaderia"),
(5,"marisco_pescado"),
(6,"huevos_lacteos"),
(7,"fruta_verdura"),
(8,"carne"),
(9,"cereales_galletas"),
(10,"conservas_caldos_cremas"),
(11,"charcuteria_quesos");
SELECT * FROM categories;

INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio) VALUES 
(1001,"Aceite de Oliva Virgen extra, Hacendado", 1000, "ml", 822, 91.0, 13.0, 0, 0, 0, 0, 0, 4.25),
(null,"Aceite de Oliva Virgen extra Gran Selección, Hacendado", 750,"ml", 900, 91.0, 13.0, 0, 0, 0, 0, 0, 4.50),
(null,"Aceite de Oliva 1º, Hacendado", 1000, "ml", 822, 91.0, 14.0, 0, 0, 0, 0, 0, 3.90),
(null,"Aceite de Oliva Virgen, Hacendado", 1000, "ml", 819, 91.0, 12.0, 0, 0, 0, 0, 0, 4.20),
(null,"Aceite de Oliva Virgen Extra, Spray, Hacendado", 200,"ml", 824, 91.0, 15.0, 0, 0, 0, 0, 0, 2.15),
(null,"Aceite de oliva virgen extra Arbequina Casa Juncal", 500, "ml", 824, 92.0, 18.0, 0, 0, 0, 0, 0, 4.10),
(null,"Aceite de girasol refinado 0,2º Hacendado", 1000, "ml", 828, 92.0, 7.5, 0, 0, 0, 0, 0, 2.55),
(null,"Aceite de coco virgen Hacendado", 450, "ml", 900, 100.0, 94.5, 0, 0, 0, 0, 0, 4.50),
(null,"Vinagre balsámico de Módena Hacendado", 250, "ml", 123, 0, 0, 25, 25, 0, 1, 0.6, 1.10),
(null,"Limón exprimido Hacendado", 280, "ml", 29, 0, 0, 7.1, 1.5, 0, 0, 0.01, 0.95),
(null,"Crema de vinagre balsámico de Módena", 250, "ml", 178, 0, 0, 41, 40, 0, 1.1, 0.55, 1.60),
(null,"Vinagre de Jerez reserva Hacendado", 250, "ml", 37, 0, 0, 7.1, 1.5, 0, 0, 0.02, 1.60),
(null,"Crema de vinagre balsámico de manzana Hacendado", 250, "ml", 152, 0, 0, 36, 30, 0, 0, 0.04, 2.30),
(null,"Sal Hacendado", 1000, "g", 0, 0, 0, 0, 0, 0, 0, 1000, 0.25),
(null,"Cebolla frita crujiente Hacendado", 150, "g", 590, 44, 21, 40, 9.0, 5.0, 6.0, 1.2, 0.80),
(null,"Sazonador para fajitas Hacendado sabor tex-mex", 17, "g", 155, 1, 0.4, 29.8, 5.4, 0, 3.6, 50.2, 0.79),
(null,"Sazonador al horno y microondas ajo y limón Hacendado con bolsa", 60, "g", 256, 1.1, 0.6, 50.8, 5.7, 8.2, 6.6, 24.8, 1.40),
(null,"Sazonador al horno y microondas pollo y costillas a las hierbas provenzales Hacendado con bolsa", 48, "g", 252, 1.7, 0.6, 49.5, 26.5, 6.9, 6.2, 18.3, 1.40),
(null,"Sazonador para paella con azafrán Hacendado", 20, "g", 240, 4.2, 0.7, 32.8, 20.9, 13.6, 11, 29, 1.35),
(null,"Sazonador para burritos Hacendado", 40, "g", 268, 3.3, 0.5, 39.6, 13.4, 11.6, 14.2, 16.1, 1.10),
(null,"Preparado para paella con azafrán Hacendado", 76, "g", 303, 1.3, 0, 58.3, 5.2, 6.6, 11.1, 12, 1.85),
(null,"Sazonador pollo asado Hacendado", 92, "g", 109, 2.1, 0.2, 12.5, 4.2, 6.3, 6.9, 63.3, 1.45),
(null,"Sazonador espagueti Hacendado", 45, "g", 257, 4.7, 0.4, 31.5, 28.7, 23.7, 10.2, 19.3, 1.45),
(null,"Sazonador ensalada Hacendado", 95, "g", 110, 2.5, 0.1, 10.5, 5.8, 14.1, 4.2, 62.5, 2.35),
(null,"Sazonador Ras el Hanout Hacendado", 62, "g", 289, 14.4, 5.9, 12.9, 1.0, 30.4, 11.6, 20.9, 1.50),
(null,"Mayonesa Hacendado 500ml", 500, "ml", 599, 65, 9.7, 2.4, 1.33, 0, 0.6, 1.1, 1.40),
(null,"Mayonesa Hacendado 200ml", 200, "ml", 599, 65, 9.7, 2.4, 1.33, 0, 0.6, 1.1, 1.00),
(null,"Mayonesa Hellmann's Tarro 475ml", 475, "ml", 552, 61, 9.7, 2.2, 1.4, 0, 0.8, 1.1, 2.95),
(null,"Mayonesa Hellmann's Tarro 225ml", 475, "ml", 552, 61, 9.7, 2.2, 1.4, 0, 0.8, 1.1, 1.60),
(null,"Salsa ligera Ligeresa 450ml", 450, "ml", 277, 27, 4.4, 9.0, 2.4, 0, 0.7, 0.99, 2.00),
(null,"Salsa ligera Ligeresa Bote 430ml", 430, "ml", 277, 27, 4.4, 9.0, 2.4, 0, 0.7, 0.99, 2.00),
(null,"Salsa ligera Ligeresa 225ml", 225, "ml", 277, 27, 4.4, 9.0, 2.4, 0, 0.7, 0.99, 1.00),
(null,"Salsa ligera Hacendado 60% menos de materia grasa", 500, "ml", 294, 31, 4.8, 6.5, 3.5, 0, 0.7, 2.1, 1.40),
(null,"Ketchup Hacendado", 600, "g", 115, 0, 0, 27.0, 20.5, 0, 1.3, 1.8, 0.90),
(null,"Ketchup light Hacendado", 600, "g", 71, 0.2, 0, 15.9, 10, 0, 1.2, 2.1, 1.10),
(null,"Mostaza a la antigua Hacendado", 200, "g", 135, 10.7, 0.8, 2.3, 2.2, 0, 7.7, 4.2, 1.50),
(null,"Allioli Chovi", 180, "ml", 749, 82, 10, 1.5, 0, 0.1, 1.2, 1.3, 1.60),
(null,"Allioli Hacendado", 200, "ml", 746, 82, 10, 1.3, 0, 0.1, 1.1, 1.3, 1.20),
(null,"Tomate frito Hacendado 3 bricks z 400g", 400, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 1.20),
(null,"Tomate frito Hacendado 3 minibricks x 210g", 210, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 0.90),
(null,"Tomate frito Hacendado Tarro 560g", 560, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 0.85),
(null,"Tomate frito receta artesana Hacendado con aceite de oliva Tarro 560g", 560, "g", 201, 15.0, 2.1, 14.3, 12.5, 0, 1.6, 0.9, 1.85),
(null,"Tomate frito receta artesana Hacendado con aceite de oliva Tarro 300g", 300, "g", 201, 15.0, 2.1, 14.3, 12.5, 0, 1.6, 0.9, 1.45),
(null,"Tomate frito estilo casero Hacendado con aceite de oliva Brick 380g", 380, "g", 104, 5.0, 0.5, 12.4, 9.7, 0, 2.0, 0.8, 1.05),
(null,"Tomate frito Hacendado con aceite de oliva 3 minibricks x 210g", 210, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 0.95),
(null,"Tomate frito sin azúcares añadidos Hacendado Tarro 560g", 560, "g", 65, 3.5, 0.3, 6.5, 4.7, 0, 1.5, 1.2, 1.05),
(null,"Tomate frito con cebolla Hacendado con aceite de oliva Brick 380g", 380, "g", 130, 8.5, 1.3, 11.0, 9.7, 0, 1.4, 1.0, 1.20),
(null,"Salsa barbacoa Hacendado 350g", 350, "g", 150, 0.1, 0.0, 35.5, 27.8, 0, 1.2, 1.8, 1.00),
(null,"Salsa pimienta verde Hacendado 50g", 50, "g", 382, 11.1, 7.1, 55.8, 20.1, 1.3, 14.0, 9.7, 0.95),
(null,"Salsa burger Hacendado", 250, "ml", 340, 31.6, 2.3, 11.3, 9.8, 0, 1.5, 1.8, 1.25),
(null,"Salsa barbacoa dulce y picante Hacendado", 250, "ml", 215, 0.4, 0.1, 49.5, 46.3, 0, 1.6, 2.8, 1.25),
(null,"Salsa boloñesa Hacendado", 300, "g", 154, 10.0, 1.9, 11.4, 9.6, 0, 3.8, 1.4, 1.20),
(null,"Salsa de tomate, albahaca y orégano Hacendado", 300, "g", 69, 3.0, 0.4, 8.9, 8.0, 0, 1.2, 0.6, 1.20),
(null,"Salsa fresca Queso Hacendado", 180, "g", 121, 8.5, 6.0, 6.1, 1.9, 0.5, 4.7, 1.2, 1.30),
(null,"Salsa fresca Pesto Hacendado", 150, "g", 529, 51, 7.8, 12, 6.2, 2.8, 4.0, 1.2, 1.35),
(null,"Salsa fresca Setas Hacendado", 200, "g", 117.4, 9.8, 6.1, 5.0, 1.7, 1.7, 1.7, 1.7, 1.30),
(null,"Salsa fresca Carbonara Hacendado", 200, "g", 189.4, 17, 10.0, 4.2, 2.7, 0, 4.9, 1.6, 1.30),
(null,"Salsa de soja Hacendado", 250, "ml", 74, 0.0, 0.0, 8.3, 4.3, 0, 7.5, 15.7, 1.35),
(null,"Guacamole Hacendado 95% aguacate fresco", 200, "g", 114, 4.7, 1.1, 7.7, 2.8, 4.0, 8.2, 1.0, 2.25),
(null,"Chili con carne Hacendado", 420, "g", 189.4, 17, 10.0, 4.2, 2.7, 0, 4.9, 1.6, 1.30),
(null,"Salsa romesco Ferrer", 130, "g", 423, 39, 4.6, 14.0, 4.1, 0, 3.4, 1.4, 1.80),
(null,"Pasta de sésamo Tahini Hacendado", 200, "g", 65.6, 10.1, 30.0, 3.2, 1.4, 3.4, 24.9, 0.04, 2.90)
;
INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio) VALUES 
(2001,"Aceitunas manzanilla rellenas de anchoa Hacendado 3 botes x 50g", 50, "g", 150, 15.0, 2.9, 0.9, 0.5, 0, 1.6, 2.6, 1.25),
(null,"Aceitunas manzanilla rellenas de anchoa Hacendado reducidas en sal 3 x 50g", 50, "g", 163, 15.6, 3.07, 0.7, 0.5, 0, 1.7, 1.9, 1.60),
(null,"Aceitunas negras Hacendado sin hueso", 150, "g", 125, 13.0, 2.2, 0, 0, 0, 0.5, 2.5, 0.90),
(null,"Pepinillos pequeños Hacendado", 250, "g", 79, 0.5, 0.2, 2.3, 0.6, 0.6, 1.3, 1.5, 1.50),
(null,"Altramuces Hacendado", 440, "g", 105, 1.7, 0.3, 9.0, 0, 3.8, 12.0, 3.5, 1.30),
(null,"Nuez natural Hacendado pelada", 200, "g", 716, 69.6, 6.0, 2.2, 1.7, 6.2, 17.0, 0, 2.60),
(null,"Almendra natural Hacendado", 200, "g", 603, 51.0, 3.9, 5.4, 5.4, 11.0, 25.0, 0, 2.45)
;

INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio) VALUES 
(3001,"Arroz redondo Hacendado", 1000, "g", 344, 1.0, 0.2, 75.0, 0.5, 0, 8.2, 0.01, 0.95),
(null,"Arroz bomba Hacendado", 1000, "g", 349, 0.9, 0.3, 77.0, 0.5, 0, 7.7, 0.01, 2.60),
(null,"Arroz largo Hacendado", 1000, "g", 345, 0.7, 0.2, 77.0, 0.5, 0, 7.2, 0.01, 0.98),
(null,"Arroz integral redondo Hacendado", 1000, "g", 347, 2.5, 0.5, 71.0, 1.2, 3.4, 8.4, 0.01, 1.50),
(null,"Quinoa Hacendado", 500, "g", 389, 6.1, 0.78, 66.05, 6.32, 7.0, 14.0, 0.0, 2.50),
(null,"Arroz vaporizado Hacendado", 1000, "g", 345, 0.7, 0.2, 76.0, 0.6, 0, 7.9, 0.01, 1.25),
(null,"Garbanzo cocido Hacendado Tarro 570g", 400, "g", 90, 2.2, 0.5, 9.5, 0.7, 0.0, 5.5, 0.8, 0.75),
(null,"Garbanzo cocido pedrosillano Hacendado categoría extra", 400, "g", 90, 2.2, 0.5, 9.5, 0.7, 0.0, 5.5, 0.8, 0.95),
(null,"Garbanzo Hacendado categoría extra", 1000, "g", 348, 6.1, 0.4, 47.5, 6.0, 14.4, 18.6, 0.07, 2.00),
(null,"Alubia cocida blanca Hacendado Tarro 570g", 400, "g", 83, 0.4, 0.1, 10.7, 0.8, 0.0, 5.8, 0.8, 0.70),
(null,"Lenteja cocida Hacendado 570g", 400, "g", 89, 0.4, 0.1, 10.7, 0.5, 0.0, 8.2, 0.8, 0.77),
(null,"Lenteja pardina Hacendado categoría extra", 1000, "g", 320, 1.2, 0.2, 48.1, 1.3, 9.6, 24.5, 0.05, 1.60),
(null,"Soja texturizada grano fino Hacendado", 250, "g", 364, 4.0, 0.6, 30.0, 0.0, 4.0, 50.0, 0.04, 1.85),
(null,"Lenteja Hacendado categoría extra", 1000, "g", 320, 1.2, 0.2, 48.1, 1.3, 9.6, 24.5, 0.05, 1.75),
(null,"Fideo cabello de ángel Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.78),
(null,"Fideuá Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.78),
(null,"Fideo grueso/medio/pequeño Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.78),
(null,"Fideo integral Hacendado", 500, "g", 349, 2.6, 0.4, 65.0, 4.0, 7.0, 13.0, 0.04, 1.10),
(null,"Fideo sin gluten con quinoa Felicia", 500, "g", 355, 2.0, 0.7, 76.0, 0.5, 2.5, 7.3, 0.01, 1.70),
(null,"Pajaritas vegetales Hacendado", 500, "g", 359, 1.7, 0.3, 74.0, 3.1, 5.2, 12.0, 0.04, 1.00),
(null,"Hélices con vegetales Hacendado", 1000, "g", 359, 1.7, 0.3, 74.0, 3.1, 5.2, 12.0, 0.04, 1.42),
(null,"Macarrón fino Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77),
(null,"Macarrón rayado Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77),
(null,"Macarrón Hacendado", 1000, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.20),
(null,"Pasta galets", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.15),
(null,"Tallarín Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77),
(null,"Spaghetti fino", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77),
(null,"Spaghetti al huevo Hacendado", 500, "g", 359, 3.3, 1.0, 68.0, 3.5, 4.0, 12.0, 0.08, 1.20),
(null,"Spaghetti Hacendado 1kg", 1000, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.15),
(null,"Spaghetti Hacendado 500g", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.15),
(null,"Spaghetti sin gluten con quinoa Felicia", 500, "g", 355, 2.0, 0.7, 76.0, 0.5, 2.5, 7.3, 0.01, 1.70),
(null,"Gnocchi frescos Hacendado de patata", 500, "g", 174, 0.4, 0.2, 37.6, 0.2, 0.0, 4.5, 0.87, 1.10),
(null,"Placas para canelones tradicionales Hacendado", 160, "g", 362, 1.1, 0.2, 75.0, 2.0, 4.0, 11.0, 0.01, 0.70),
(null,"Cannelloni tubos precocidos Hacendado", 250, "g", 350, 1.5, 0.3, 72.6, 3.5, 3.0, 11.5, 0.005, 1.35)
;
INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio) VALUES 
(4001,"Harina de trigo Hacendado", 1000, "g", 350, 1.3, 0.2, 73.0, 0.6, 3.0, 10.0, 0.02, 0.75),
(null,"Harina de fuerza Hacendado", 1000, "g", 340, 0.9, 0.2, 68.8, 0.4, 2.5, 13.0, 0.001, 0.95),
(null,"Preparado para bizcochos con levadura incorporada Hacendado", 1000, "g", 332.6, 1.14, 0.139, 69.79, 0.55, 0.0, 10.10, 0.65, 1.05),
(null,"Chocolate negro fundir Hacendado", 200, "g", 529, 33.0, 20.0, 48.0, 45.0, 8.5, 5.8, 0.1, 0.90),
(null,"Chocolate blanco fundir Hacendado", 200, "g", 549, 33.0, 21.0, 55.0, 55.0, 0.0, 7.9, 0.3, 1.30),
(null,"Chocolate negro 70% cacao fundir Hacendado 0% azúcares añadidos", 200, "g", 525, 42.0, 26.0, 35.0, 0.1, 9.7, 8.7, 0.0, 1.55),
(null,"Chocolate con leche fundir Hacendado", 200, "g", 531, 31.0, 19.0, 54.0, 52.0, 3.6, 8.3, 0.1, 1.20),
(null,"Masa de hojaldre sin gluten Hacendado", 280, "g", 346, 20.0, 9.1, 37.0, 1.0, 4.0, 2.5, 0.98, 2.60),
(null,"Masa fresca hojaldre Hacendado", 260, "g", 385, 21.0, 10.6, 41.5, 2.6, 0.0, 7.5, 1.1, 2.40),
(null,"Masa fresca Hacendado hojaldre con mantequilla", 260, "g", 409, 23.6, 17.2, 42.2, 1.4, 0.0, 7.0, 1.2, 2.80),
(null,"Masa fresca quebrada brisa Hacendado", 230, "g", 374, 21.0, 8.8, 39.0, 1.5, 0.0, 6.1, 1.2, 2.50),
(null,"Masa fresca empanada Hacendado", 230, "g", 362, 18.7, 9.1, 43.0, 2.8, 0.0, 5.4, 1.2, 2.50),
(null,"Masa filo Hacendado 8-10 hojas", 250, "g", 290, 1.1, 0.2, 60.0, 4.0, 2.0, 9.0, 0.75, 1.90),
(null,"Barra de pan 250g", 250, "g", 268, 1.3, 0.2, 54.0, 2.7, 2.9, 8.9, 1.6, 0.45),
(null,"Barra de pan rústica 500g", 500, "g", 272, 0.9, 0.2, 56.0, 2.6, 3.1, 8.4, 1.2, 0.50),
(null,"Baguette masa madre 250g", 250, "g", 267, 1.1, 0.2, 55.0, 2.6, 2.8, 8.2,1.3, 0.50),
(null,"Baguette sin gluten 175g", 175, "g", 255, 9.5, 1.0, 36.2, 2.3, 8.0, 2.20, 1.11, 2.10),
(null,"Pan de molde blanco sin corteza Hacendado 450g", 450, "g", 225, 2.1, 0.5, 42.0, 3.9, 3.0, 8.0, 1.1, 1.25),
(null,"Pan de molde blanco Hacendado 460g", 460, "g", 249, 2.1, 0.4, 47.0, 3.9, 3.0, 9.0, 1.1, 0.85),
(null,"Pan de molde 100% integral Hacendado 460g", 460, "g", 238, 3.2, 0.7, 37.0, 3.3, 7.4, 11.0, 1.0, 0.95),
(null,"Pan de molde sin gluten blanco Hacendado 440g", 440, "g", 250, 11.0, 1.0, 28.0, 4.3, 9.5, 4.3, 1.3, 3.10),
(null,"Baguette sin gluten 175g", 175, "g", 255, 9.5, 1.0, 36.2, 2.3, 8.0, 2.20, 1.11, 2.10),
(null,"Tortillas de trigo Hacendado 360g", 360, "g", 302, 5.4, 2.6, 55.0, 2.2, 2.0, 7.3, 1.7, 1.30),
(null,"Pan rallado Hacendado 750g", 750, "g", 368.4, 1.26, 0.3, 78.12, 3.4, 3.8, 9.58, 1.025, 0.75),
(null,"Pan rallado con ajo y perejil Hacendado 500g", 500, "g", 336, 1.7, 0.4, 71.3, 2.6, 6.8, 8.7, 1.02, 0.90);

SELECT * FROM ingredients;



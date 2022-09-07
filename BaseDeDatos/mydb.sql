DROP SCHEMA IF EXISTS mydb; 

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb`;
-- -----------------------------------------------------
-- Table `mydb`.`ingredients`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `mydb`.`ingredient_category` (
  `id_category` INT,
  `name_category` VARCHAR(45),
  PRIMARY KEY (`id_category`));

INSERT INTO ingredient_category (id_category, name_category) VALUES
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
SELECT * FROM ingredient_category;



-- -----------------------------------------------------
-- Table `mydb`.`ingredient_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`recipe_category` (
  `id_recipe_category` INT NOT NULL auto_increment UNIQUE,
  `name_recipe_category` VARCHAR(45) UNIQUE,
  image_recipe_category VARCHAR(500),
  PRIMARY KEY (`id_recipe_category`));
  

-- -----------------------------------------------------
-- Table `mydb`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ingredients` (
  `id_ingredient` INT NOT NULL AUTO_INCREMENT,
  `name_ingredient` VARCHAR(150) UNIQUE,
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
  `number_categories` INT,
  FOREIGN KEY (number_categories) references ingredient_category (id_category),
  PRIMARY KEY (`id_ingredient`));
  
CREATE TABLE IF NOT EXISTS `mydb`.`recipes` (
  `id_recipe` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `name_recipe` VARCHAR(45) NULL UNIQUE,
  `id_recipe_category` INT,
  price_recipe INT,
  kcal_recipe INT,
  FOREIGN KEY (id_recipe_category) references recipe_category (id_recipe_category),
  PRIMARY KEY (`id_recipe`));

CREATE TABLE IF NOT EXISTS `mydb`.`new_recipes` (
   `recipes_id_recipe` INT NOT NULL AUTO_INCREMENT,
 `id_new_recipes` INT,
  `ingredients_id_ingredient` INT NOT NULL,
   `cantidad_ingredient` INT NOT NULL, 
  FOREIGN KEY (id_new_recipes) references recipes (id_recipe),

  PRIMARY KEY (`recipes_id_recipe`));

INSERT INTO recipe_category(id_recipe_category,name_recipe_category, image_recipe_category) VALUES
(null, "reposteria", "https://corbuse.edu.mx/blog/wp-content/uploads/2021/11/Haz-un-diplomado-en-reposteria.jpg"),
(null, "carnes", "https://static2.abc.es/media/bienestar/2021/09/27/tipos-de-carne-1-kWj--620x349@abc.jpg"),
(null, "ensaladas", "https://www.comedera.com/wp-content/uploads/2021/01/ensaladas-diferentes.jpg"),
(null, "pescados", "https://ichef.bbci.co.uk/news/640/cpsprodpb/3214/production/_92502821_pescadovarios.jpg"),
(null, "sopas_y_cremas", "https://static2.elcorreo.com/www/pre2017/multimedia/noticias/201701/24/media/cortadas/sopas-kClE-U211614812540xJD-575x380@El%20Correo.jpg"),
(null, "salsas", "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2022/08/04/salsas.jpeg"),
(null, "pasta", "https://www.hogarmania.com/archivos/201401/tipos-de-pasta-xl-668x400x80xX.jpg");

INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio, number_categories) VALUES 
(null,"Aceite de Oliva Virgen extra, Hacendado", 1000, "ml", 822, 91.0, 13.0, 0, 0, 0, 0, 0, 4.25, 1),
(null,"Aceite de Oliva Virgen extra Gran Selección, Hacendado", 750,"ml", 900, 91.0, 13.0, 0, 0, 0, 0, 0, 4.50, 1),
(null,"Aceite de Oliva 1º, Hacendado", 1000, "ml", 822, 91.0, 14.0, 0, 0, 0, 0, 0, 3.90, 1),
(null,"Aceite de Oliva Virgen, Hacendado", 1000, "ml", 819, 91.0, 12.0, 0, 0, 0, 0, 0, 4.20, 1),
(null,"Aceite de Oliva Virgen Extra, Spray, Hacendado", 200,"ml", 824, 91.0, 15.0, 0, 0, 0, 0, 0, 2.15, 1),
(null,"Aceite de oliva virgen extra Arbequina Casa Juncal", 500, "ml", 824, 92.0, 18.0, 0, 0, 0, 0, 0, 4.10, 1),
(null,"Aceite de girasol refinado 0,2º Hacendado", 1000, "ml", 828, 92.0, 7.5, 0, 0, 0, 0, 0, 2.55, 1),
(null,"Aceite de coco virgen Hacendado", 450, "ml", 900, 100.0, 94.5, 0, 0, 0, 0, 0, 4.50, 1),
(null,"Vinagre balsámico de Módena Hacendado", 250, "ml", 123, 0, 0, 25, 25, 0, 1, 0.6, 1.10, 1),
(null,"Limón exprimido Hacendado", 280, "ml", 29, 0, 0, 7.1, 1.5, 0, 0, 0.01, 0.95, 1),
(null,"Crema de vinagre balsámico de Módena", 250, "ml", 178, 0, 0, 41, 40, 0, 1.1, 0.55, 1.60, 1),
(null,"Vinagre de Jerez reserva Hacendado", 250, "ml", 37, 0, 0, 7.1, 1.5, 0, 0, 0.02, 1.60, 1),
(null,"Crema de vinagre balsámico de manzana Hacendado", 250, "ml", 152, 0, 0, 36, 30, 0, 0, 0.04, 2.30, 1),
(null,"Sal Hacendado", 1000, "g", 0, 0, 0, 0, 0, 0, 0, 100, 0.25, 1),
(null,"Cebolla frita crujiente Hacendado", 150, "g", 590, 44, 21, 40, 9.0, 5.0, 6.0, 1.2, 0.80, 1),
(null,"Sazonador para fajitas Hacendado sabor tex-mex", 17, "g", 155, 1, 0.4, 29.8, 5.4, 0, 3.6, 50.2, 0.79, 1),
(null,"Sazonador al horno y microondas ajo y limón Hacendado con bolsa", 60, "g", 256, 1.1, 0.6, 50.8, 5.7, 8.2, 6.6, 24.8, 1.40, 1),
(null,"Sazonador al horno y microondas pollo y costillas a las hierbas provenzales Hacendado con bolsa", 48, "g", 252, 1.7, 0.6, 49.5, 26.5, 6.9, 6.2, 18.3, 1.40, 1),
(null,"Sazonador para paella con azafrán Hacendado", 20, "g", 240, 4.2, 0.7, 32.8, 20.9, 13.6, 11, 29, 1.35, 1),
(null,"Sazonador para burritos Hacendado", 40, "g", 268, 3.3, 0.5, 39.6, 13.4, 11.6, 14.2, 16.1, 1.10, 1),
(null,"Preparado para paella con azafrán Hacendado", 76, "g", 303, 1.3, 0, 58.3, 5.2, 6.6, 11.1, 12, 1.85, 1),
(null,"Sazonador pollo asado Hacendado", 92, "g", 109, 2.1, 0.2, 12.5, 4.2, 6.3, 6.9, 63.3, 1.45, 1),
(null,"Sazonador espagueti Hacendado", 45, "g", 257, 4.7, 0.4, 31.5, 28.7, 23.7, 10.2, 19.3, 1.45, 1),
(null,"Sazonador ensalada Hacendado", 95, "g", 110, 2.5, 0.1, 10.5, 5.8, 14.1, 4.2, 62.5, 2.35, 1),
(null,"Sazonador Ras el Hanout Hacendado", 62, "g", 289, 14.4, 5.9, 12.9, 1.0, 30.4, 11.6, 20.9, 1.50, 1),
(null,"Mayonesa Hacendado 500ml", 500, "ml", 599, 65, 9.7, 2.4, 1.33, 0, 0.6, 1.1, 1.40, 1),
(null,"Mayonesa Hacendado 200ml", 200, "ml", 599, 65, 9.7, 2.4, 1.33, 0, 0.6, 1.1, 1.00, 1),
(null,"Mayonesa Hellmann's Tarro 475ml", 475, "ml", 552, 61, 9.7, 2.2, 1.4, 0, 0.8, 1.1, 2.95, 1),
(null,"Mayonesa Hellmann's Tarro 225ml", 475, "ml", 552, 61, 9.7, 2.2, 1.4, 0, 0.8, 1.1, 1.60, 1),
(null,"Salsa ligera Ligeresa 450ml", 450, "ml", 277, 27, 4.4, 9.0, 2.4, 0, 0.7, 0.99, 2.00, 1),
(null,"Salsa ligera Ligeresa Bote 430ml", 430, "ml", 277, 27, 4.4, 9.0, 2.4, 0, 0.7, 0.99, 2.00, 1),
(null,"Salsa ligera Ligeresa 225ml", 225, "ml", 277, 27, 4.4, 9.0, 2.4, 0, 0.7, 0.99, 1.00, 1),
(null,"Salsa ligera Hacendado 60% menos de materia grasa", 500, "ml", 294, 31, 4.8, 6.5, 3.5, 0, 0.7, 2.1, 1.40, 1),
(null,"Ketchup Hacendado", 600, "g", 115, 0, 0, 27.0, 20.5, 0, 1.3, 1.8, 0.90, 1),
(null,"Ketchup light Hacendado", 600, "g", 71, 0.2, 0, 15.9, 10, 0, 1.2, 2.1, 1.10, 1),
(null,"Mostaza a la antigua Hacendado", 200, "g", 135, 10.7, 0.8, 2.3, 2.2, 0, 7.7, 4.2, 1.50, 1),
(null,"Allioli Chovi", 180, "ml", 749, 82, 10, 1.5, 0, 0.1, 1.2, 1.3, 1.60, 1),
(null,"Allioli Hacendado", 200, "ml", 746, 82, 10, 1.3, 0, 0.1, 1.1, 1.3, 1.20, 1),
(null,"Tomate frito Hacendado 3 bricks z 400g", 400, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 1.20, 1),
(null,"Tomate frito Hacendado 3 minibricks x 210g", 210, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 0.90, 1),
(null,"Tomate frito Hacendado Tarro 560g", 560, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 0.85, 1),
(null,"Tomate frito receta artesana Hacendado con aceite de oliva Tarro 560g", 560, "g", 201, 15.0, 2.1, 14.3, 12.5, 0, 1.6, 0.9, 1.85, 1),
(null,"Tomate frito receta artesana Hacendado con aceite de oliva Tarro 300g", 300, "g", 201, 15.0, 2.1, 14.3, 12.5, 0, 1.6, 0.9, 1.45, 1),
(null,"Tomate frito estilo casero Hacendado con aceite de oliva Brick 380g", 380, "g", 104, 5.0, 0.5, 12.4, 9.7, 0, 2.0, 0.8, 1.05, 1),
(null,"Tomate frito Hacendado con aceite de oliva 3 minibricks x 210g", 210, "g", 77, 3.5, 0.3, 9.5, 6.9, 0, 1.5, 1.0, 0.95, 1),
(null,"Tomate frito sin azúcares añadidos Hacendado Tarro 560g", 560, "g", 65, 3.5, 0.3, 6.5, 4.7, 0, 1.5, 1.2, 1.05, 1),
(null,"Tomate frito con cebolla Hacendado con aceite de oliva Brick 380g", 380, "g", 130, 8.5, 1.3, 11.0, 9.7, 0, 1.4, 1.0, 1.20, 1),
(null,"Salsa barbacoa Hacendado 350g", 350, "g", 150, 0.1, 0.0, 35.5, 27.8, 0, 1.2, 1.8, 1.00, 1),
(null,"Salsa pimienta verde Hacendado 50g", 50, "g", 382, 11.1, 7.1, 55.8, 20.1, 1.3, 14.0, 9.7, 0.95, 1),
(null,"Salsa burger Hacendado", 250, "ml", 340, 31.6, 2.3, 11.3, 9.8, 0, 1.5, 1.8, 1.25, 1),
(null,"Salsa barbacoa dulce y picante Hacendado", 250, "ml", 215, 0.4, 0.1, 49.5, 46.3, 0, 1.6, 2.8, 1.25, 1),
(null,"Salsa boloñesa Hacendado", 300, "g", 154, 10.0, 1.9, 11.4, 9.6, 0, 3.8, 1.4, 1.20, 1),
(null,"Salsa de tomate, albahaca y orégano Hacendado", 300, "g", 69, 3.0, 0.4, 8.9, 8.0, 0, 1.2, 0.6, 1.20, 1),
(null,"Salsa fresca Queso Hacendado", 180, "g", 121, 8.5, 6.0, 6.1, 1.9, 0.5, 4.7, 1.2, 1.30, 1),
(null,"Salsa fresca Pesto Hacendado", 150, "g", 529, 51, 7.8, 12, 6.2, 2.8, 4.0, 1.2, 1.35, 1),
(null,"Salsa fresca Setas Hacendado", 200, "g", 117.4, 9.8, 6.1, 5.0, 1.7, 1.7, 1.7, 1.7, 1.30, 1),
(null,"Salsa fresca Carbonara Hacendado", 200, "g", 189.4, 17, 10.0, 4.2, 2.7, 0, 4.9, 1.6, 1.30, 1),
(null,"Salsa de soja Hacendado", 250, "ml", 74, 0.0, 0.0, 8.3, 4.3, 0, 7.5, 15.7, 1.35, 1),
(null,"Guacamole Hacendado 95% aguacate fresco", 200, "g", 114, 4.7, 1.1, 7.7, 2.8, 4.0, 8.2, 1.0, 2.25, 1),
(null,"Chili con carne Hacendado", 420, "g", 189.4, 17, 10.0, 4.2, 2.7, 0, 4.9, 1.6, 1.30, 1),
(null,"Salsa romesco Ferrer", 130, "g", 423, 39, 4.6, 14.0, 4.1, 0, 3.4, 1.4, 1.80, 1),
(null,"Pasta de sésamo Tahini Hacendado", 200, "g", 65.6, 10.1, 30.0, 3.2, 1.4, 3.4, 24.9, 0.04, 2.90, 1);

INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio, number_categories) VALUES
(null,"Aceitunas manzanilla rellenas de anchoa Hacendado 3 botes x 50g", 50, "g", 150, 15.0, 2.9, 0.9, 0.5, 0, 1.6, 2.6, 1.25, 2),
(null,"Aceitunas manzanilla rellenas de anchoa Hacendado reducidas en sal 3 x 50g", 50, "g", 163, 15.6, 3.07, 0.7, 0.5, 0, 1.7, 1.9, 1.60, 2),
(null,"Aceitunas negras Hacendado sin hueso", 150, "g", 125, 13.0, 2.2, 0, 0, 0, 0.5, 2.5, 0.90, 2),
(null,"Pepinillos pequeños Hacendado", 250, "g", 79, 0.5, 0.2, 2.3, 0.6, 0.6, 1.3, 1.5, 1.50, 2),
(null,"Altramuces Hacendado", 440, "g", 105, 1.7, 0.3, 9.0, 0, 3.8, 12.0, 3.5, 1.30, 2),
(null,"Nuez natural Hacendado pelada", 200, "g", 716, 69.6, 6.0, 2.2, 1.7, 6.2, 17.0, 0, 2.60, 2),
(null,"Almendra natural Hacendado", 200, "g", 603, 51.0, 3.9, 5.4, 5.4, 11.0, 25.0, 0, 2.45, 2),
(null,"Arroz redondo Hacendado", 1000, "g", 344, 1.0, 0.2, 75.0, 0.5, 0, 8.2, 0.01, 0.95, 3),
(null,"Arroz bomba Hacendado", 1000, "g", 349, 0.9, 0.3, 77.0, 0.5, 0, 7.7, 0.01, 2.60, 3),
(null,"Arroz largo Hacendado", 1000, "g", 345, 0.7, 0.2, 77.0, 0.5, 0, 7.2, 0.01, 0.98, 3),
(null,"Arroz integral redondo Hacendado", 1000, "g", 347, 2.5, 0.5, 71.0, 1.2, 3.4, 8.4, 0.01, 1.50, 3),
(null,"Quinoa Hacendado", 500, "g", 389, 6.1, 0.78, 66.05, 6.32, 7.0, 14.0, 0.0, 2.50, 3),
(null,"Arroz vaporizado Hacendado", 1000, "g", 345, 0.7, 0.2, 76.0, 0.6, 0, 7.9, 0.01, 1.25, 3),
(null,"Garbanzo cocido Hacendado Tarro 570g", 400, "g", 90, 2.2, 0.5, 9.5, 0.7, 0.0, 5.5, 0.8, 0.75, 3),
(null,"Garbanzo cocido pedrosillano Hacendado categoría extra", 400, "g", 90, 2.2, 0.5, 9.5, 0.7, 0.0, 5.5, 0.8, 0.95, 3),
(null,"Garbanzo Hacendado categoría extra", 1000, "g", 348, 6.1, 0.4, 47.5, 6.0, 14.4, 18.6, 0.07, 2.00, 3),
(null,"Alubia cocida blanca Hacendado Tarro 570g", 400, "g", 83, 0.4, 0.1, 10.7, 0.8, 0.0, 5.8, 0.8, 0.70, 3),
(null,"Lenteja cocida Hacendado 570g", 400, "g", 89, 0.4, 0.1, 10.7, 0.5, 0.0, 8.2, 0.8, 0.77, 3),
(null,"Lenteja pardina Hacendado categoría extra", 1000, "g", 320, 1.2, 0.2, 48.1, 1.3, 9.6, 24.5, 0.05, 1.60, 3),
(null,"Soja texturizada grano fino Hacendado", 250, "g", 364, 4.0, 0.6, 30.0, 0.0, 4.0, 50.0, 0.04, 1.85, 3),
(null,"Lenteja Hacendado categoría extra", 1000, "g", 320, 1.2, 0.2, 48.1, 1.3, 9.6, 24.5, 0.05, 1.75, 3),
(null,"Fideo cabello de ángel Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.78, 3),
(null,"Fideuá Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.78, 3),
(null,"Fideo grueso/medio/pequeño Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.78, 3),
(null,"Fideo integral Hacendado", 500, "g", 349, 2.6, 0.4, 65.0, 4.0, 7.0, 13.0, 0.04, 1.10, 3),
(null,"Fideo sin gluten con quinoa Felicia", 500, "g", 355, 2.0, 0.7, 76.0, 0.5, 2.5, 7.3, 0.01, 1.70, 3),
(null,"Pajaritas vegetales Hacendado", 500, "g", 359, 1.7, 0.3, 74.0, 3.1, 5.2, 12.0, 0.04, 1.00, 3),
(null,"Hélices con vegetales Hacendado", 1000, "g", 359, 1.7, 0.3, 74.0, 3.1, 5.2, 12.0, 0.04, 1.42, 3),
(null,"Macarrón fino Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77, 3),
(null,"Macarrón rayado Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77, 3),
(null,"Macarrón Hacendado", 1000, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.20, 3),
(null,"Pasta galets", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.15, 3),
(null,"Tallarín Hacendado", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77, 3),
(null,"Spaghetti fino", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 0.77, 3),
(null,"Spaghetti al huevo Hacendado", 500, "g", 359, 3.3, 1.0, 68.0, 3.5, 4.0, 12.0, 0.08, 1.20, 3),
(null,"Spaghetti Hacendado 1kg", 1000, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.15, 3),
(null,"Spaghetti Hacendado 500g", 500, "g", 366, 1.5, 0.3, 74.0, 3.5, 4.0, 12.0, 0.04, 1.15, 3),
(null,"Spaghetti sin gluten con quinoa Felicia", 500, "g", 355, 2.0, 0.7, 76.0, 0.5, 2.5, 7.3, 0.01, 1.70, 3),
(null,"Gnocchi frescos Hacendado de patata", 500, "g", 174, 0.4, 0.2, 37.6, 0.2, 0.0, 4.5, 0.87, 1.10, 3);

INSERT INTO ingredients (id_ingredient, name_ingredient, peso, medicion, kcal, grasas, grasas_saturadas, carbohidratos, carbohidratos_azucares, fibra, proteinas, sal, precio, number_categories) VALUES
	(null,"Placas para canelones tradicionales Hacendado", 160, "g", 362, 1.1, 0.2, 75.0, 2.0, 4.0, 11.0, 0.01, 0.70, 3),
	(null,"Cannelloni tubos precocidos Hacendado", 250, "g", 350, 1.5, 0.3, 72.6, 3.5, 3.0, 11.5, 0.005, 1.35, 3),
	(null,"Harina de trigo Hacendado", 1000, "g", 350, 1.3, 0.2, 73.0, 0.6, 3.0, 10.0, 0.02, 0.75, 4),
	(null,"Harina de fuerza Hacendado", 1000, "g", 340, 0.9, 0.2, 68.8, 0.4, 2.5, 13.0, 0.001, 0.95, 4),
	(null,"Preparado para bizcochos con levadura incorporada Hacendado", 1000, "g", 332.6, 1.14, 0.139, 69.79, 0.55, 0.0, 10.10, 0.65, 1.05, 4),
	(null,"Chocolate negro fundir Hacendado", 200, "g", 529, 33.0, 20.0, 48.0, 45.0, 8.5, 5.8, 0.1, 0.90, 4),
	(null,"Chocolate blanco fundir Hacendado", 200, "g", 549, 33.0, 21.0, 55.0, 55.0, 0.0, 7.9, 0.3, 1.30, 4),
	(null,"Chocolate negro 70% cacao fundir Hacendado 0% azúcares añadidos", 200, "g", 525, 42.0, 26.0, 35.0, 0.1, 9.7, 8.7, 0.0, 1.55, 4),
	(null,"Chocolate con leche fundir Hacendado", 200, "g", 531, 31.0, 19.0, 54.0, 52.0, 3.6, 8.3, 0.1, 1.20, 4),
	(null,"Masa de hojaldre sin gluten Hacendado", 280, "g", 346, 20.0, 9.1, 37.0, 1.0, 4.0, 2.5, 0.98, 2.60, 4),
	(null,"Masa fresca hojaldre Hacendado", 260, "g", 385, 21.0, 10.6, 41.5, 2.6, 0.0, 7.5, 1.1, 2.40, 4),
	(null,"Masa fresca Hacendado hojaldre con mantequilla", 260, "g", 409, 23.6, 17.2, 42.2, 1.4, 0.0, 7.0, 1.2, 2.80, 4),
	(null,"Masa fresca quebrada brisa Hacendado", 230, "g", 374, 21.0, 8.8, 39.0, 1.5, 0.0, 6.1, 1.2, 2.50, 4),
	(null,"Masa fresca empanada Hacendado", 230, "g", 362, 18.7, 9.1, 43.0, 2.8, 0.0, 5.4, 1.2, 2.50, 4),
	(null,"Masa filo Hacendado 8-10 hojas", 250, "g", 290, 1.1, 0.2, 60.0, 4.0, 2.0, 9.0, 0.75, 1.90, 4),
	(null,"Barra de pan 250g", 250, "g", 268, 1.3, 0.2, 54.0, 2.7, 2.9, 8.9, 1.6, 0.45, 4),
	(null,"Barra de pan rústica 500g", 500, "g", 272, 0.9, 0.2, 56.0, 2.6, 3.1, 8.4, 1.2, 0.50, 4),
	(null,"Baguette masa madre 250g", 250, "g", 267, 1.1, 0.2, 55.0, 2.6, 2.8, 8.2,1.3, 0.50, 4),
	(null,"Baguette sin gluten 175g", 175, "g", 255, 9.5, 1.0, 36.2, 2.3, 8.0, 2.20, 1.11, 2.10, 4),
	(null,"Pan de molde blanco sin corteza Hacendado 450g", 450, "g", 225, 2.1, 0.5, 42.0, 3.9, 3.0, 8.0, 1.1, 1.25, 4),
	(null,"Pan de molde blanco Hacendado 460g", 460, "g", 249, 2.1, 0.4, 47.0, 3.9, 3.0, 9.0, 1.1, 0.85, 4),
	(null,"Pan de molde 100% integral Hacendado 460g", 460, "g", 238, 3.2, 0.7, 37.0, 3.3, 7.4, 11.0, 1.0, 0.95, 4),
	(null,"Pan de molde sin gluten blanco Hacendado 440g", 440, "g", 250, 11.0, 1.0, 28.0, 4.3, 9.5, 4.3, 1.3, 3.10, 4),
	(null,"Tortillas de trigo Hacendado 360g", 360, "g", 302, 5.4, 2.6, 55.0, 2.2, 2.0, 7.3, 1.7, 1.30, 4),
	(null,"Pan rallado Hacendado 750g", 750, "g", 368.4, 1.26, 0.3, 78.12, 3.4, 3.8, 9.58, 1.025, 0.75, 4),
	(null,"Pan rallado con ajo y perejil Hacendado 500g", 500, "g", 336, 1.7, 0.4, 71.3, 2.6, 6.8, 8.7, 1.02, 0.90, 4),
	(null,"Preparado de paella y sopa Hacendado ultracongelado", 685, "g", 89, 1.9, 0.4, 2.5, 0.8, 0, 15.6, 1.01, 4.36, 5 ),
	(null,"Arreglo para paella de marisco", 800, "g", 62, 0.9 , 0.4 , 0.5, 0.5, 1, 12.9, 1.21 ,9.00, 5 ),
	(null,"Gambón grande congelado",2000,"g", 85 ,0.7 ,0.2 ,0.7 , 0, 0,19 ,0.64 ,19.30, 5 ),
	(null,"Alistado pequeño Hacendado congelado", 1000,"g", 184, 1, 0.24, 0.11, 0.11, 0, 19.9, 1.7, 15.30, 5),
	(null,"Langostino cocido", 600, "g", 93, 1, 0.8, 0.3, 0.5, 0.5, 0, 1.61, 5.95, 5),
	(null,"Gamba arrocera Hacendado congelada", 1000, "g", 209, 1.2, 0.3, 0.21, 0.21, 0.0, 22.6, 1.40, 12.50, 5),
	(null,"Gamba pelada cruda tamaño mediano Hacendado ultracongelada", 360, "g", 72, 1, 0.2, 0.9, 0.9, 0, 14.7, 1, 4.80, 5),
	(null,"Langostino cocido y pelado Hacendado ultracongelado", 220, "g", 68, 1.3, 0.2, 0, 0, 0, 1.4, 1.4, 4.25, 5),
	(null,"Cola de langosta Hacendado ultracongelada", 185, "g", 60, 0, 0, 0, 0, 0, 14, 0.56, 21.95, 5),
	(null,"Bocas de cangrejo pequeñas Hacendado congeladas", 500, "g", 174, 0.5, 0.10, 0.69, 0.69, 0, 18.8, 1.6, 8.95, 5),
	(null, "Carne de mejillón de Chile cocido Hacendado ultracongelado", 275, "g", 95, 2.7, 0.7, 3.2, 0.4, 3, 14, 0.88, 2.30, 5),
	(null, "Navajas", 500, "g", 88, 1.08, 0.25, 0.6, 0.0,0.0, 17.95, 0.17, 3.70, 5),
	(null, "Berberechos", 500, "g", 79, 0.70, 0.1, 4.7, 0.0, 0.0, 13.5, 1.40, 5.70, 5),
	(null, "Filetes de merluza Argentina sin piel Hacendado ultracongelados", 970, "g", 75, 1.3, 0.3, 0.8, 0.0, 15.1, 0.38, 6.05, 1, 5),
	(null, "Filete de salmón rosado salvaje con piel Hacendado ultracongelado", 300, "g", 116, 3.45, 0.55, 0.0, 0.0,0.0, 19.9, 0.17, 3.18, 5),
	(null, "Lomo de bacalao sin espinas Hacendado congelado en su punto de sal", 390, "g", 43, 3.0, 0.1, 2.0, 1.0,0.0, 12.5, 0.8, 5.95, 5),
	(null, "Filetes de merluza del cabo grandes sin piel Hacendado ultracongelados", 970, "g", 82, 1.2, 0.3, 0.5, 0.5, 0.0, 18, 0.24, 7.65, 5),
	(null, "Lenguado entero Hacendado ultracongelado", 600, "g",91, 1.2, 0.3, 1.0, 1.0, 0.0, 18.8, 0.2, 6.45, 5),
	(null, "Huevos medianos M 53g a 63g", 12, "und", 150, 11.1, 3.1, 0.5, 0.5, 0.0, 12.5, 0.36, 1.95, 6),
	(null, "Leche semidesnatada Hacendado Brick 1L", 1000, "ml", 46, 1.6, 1.1, 4.8,4.8, 0.0, 3.1, 0.13, 0.78, 6),
	(null, "Leche semidesnatada calcio Hacendado Brick 1L", 1000, "ml", 51, 1.6, 1.0, 5.2, 5.2, 0.0, 3.9, 0.13, 0.83, 6),
	(null, "Leche semidesnatada sin lactosa Hacendado 1,5L", 1500, "ml", 44, 1.5, 1.0, 4.6, 4.6, 0.0, 3.0, 0.13, 1.30, 6),
	(null, "Leche desnatada sin lactosa Hacendado", 1000, "ml", 34, 0.3, 0.2, 4.7, 4.7, 0.0, 3.1, 0.13, 0.85, 6),
	(null, "Leche desnatada Hacendado 1L", 1000, "ml",35, 0.3, 0.2, 4.9, 4.9, 0.0, 3.2, 0.13, 0.77, 6),
	(null, "Leche entera Hacendado", 1000, "ml", 53, 3.6, 2.4, 4.6, 4.6, 0.0, 3.1, 0.13, 0.79, 6),
	(null, "Leche entera sin lactosa Hacendado", 1000, "ml", 62,3.6, 2.4, 4.6, 4.6, 0.0, 3.1, 0.13, 0.87, 6),
	(null, "Bebida de soja sin azúcares añadidos Hacendado", 1000, "ml", 32, 1.7, 0.3, 0.9, 0.0, 0.5, 3.1, 0.1, 0.80, 6),
	(null, "Bebida de almendras zero Hacendado sin azúcares y sin edulcorantes añadidos", 1000, "ml", 16, 1.5, 0.3, 0.0, 0.0, 0.0, 0.5, 0.08, 1.40, 6),
	(null, "Bebida de arroz sin azúcares añadidos Hacendado", 1000, "ml", 38, 1.2, 0.3, 6.4, 4.6, 0.0, 0.4, 0.14, 1.00, 6),
	(null, "Bebida de Bebida de soja con chocolate Hacendado", 1000, "ml", 39, 2.0, 0.4, 1.1, 0.7, 1.0, 3.6, 0.16, 1.05, 6),
	(null, "Bebida de almendras Hacendado", 1000, "ml", 36, 2.0, 0.5, 3.7, 3.5, 0.5, 0.7, 0.08, 1.30, 6),
	(null, "Leche de coco Dee Thai", 400, "ml", 1165, 17.0, 15.0, 2.9, 2.5, 0.5, 0.5, 0.15, 1.50, 6),
	(null, "Cacaolat", 1000, "ml", 80, 1.5, 1.0, 12.9, 12.7, 0.0, 2.7, 0.12, 2.30 , 6),
	(null, "Mantequilla sin sal añadida Hacendado", 250, "g", 743, 82, 56, 0.8, 0.8, 0.0, 0.5, 0.05, 1.95, 6),
	(null, "Mantequilla con sal Hacendado", 250, "g", 734, 81, 55, 0.8, 0.8, 0.0, 0.5, 1.2, 1.95, 6),
	(null, "Margarina Hacendado", 500, "g", 743, 82, 56, 0.8, 0.8, 0.0, 0.5, 0.05, 1.95, 6),
	(null, "Plátano de Canarias", 1, "und", 93, 17.83, 0.0, 21.7, 0.0, 2.22, 1.40, 0.0, 0.52, 7),
	(null, "Uva blanca sin semillas", 500, "g", 69, 0.2, 0.0, 18.1, 0.0, 0.0, 0.7, 0.0, 2.00, 7),
	(null, "Manzana Golden", 1, "und", 104, 0.34, 0.0, 27.62, 0.0, 0.0, 0.52, 0.0, 0.38, 7),
	(null, "Pera Conferencia", 1, "und", 58, 0.0, 0.0, 15.46, 0.0, 0.0, 0.38, 0.0, 0.29, 7),
	(null, "Media sandía baja en semillas", 1, "und", 30, 0.0, 0.0, 8.0, 0.0, 0.0, 1.0, 0.0, 4.73, 7),
	(null, "Medio melón piel de sapo", 1, "und", 53, 0.3, 0.0, 13.0, 0.0, 0.0, 1.3, 0.0, 2.13, 7),
	(null, "Limón", 1, "und", 29, 0.3, 0.0, 6.9, 0.0, 0.0, 1.1, 0.0, 0.39, 7),
	(null, "Mandarina", 1, "und", 45, 0.26, 0.0, 11, 0.0, 0.0, 0.7, 0.0, 0.36, 7),
	(null, "Naranja", 1, "und", 47, 0.12, 0.0, 11.75, 0.0, 0.0, 0.94, 0.0, 0.45, 7),
	(null, "Aguacate", 1, "und", 160, 14.66, 2.13, 8.53, 0.66, 0.0, 2.0, 0.0, 0.98, 7),
	(null, "Piña", 1, "und", 50, 0.1, 0.01, 13.12, 9.85, 0.0, 0.54, 0.0, 2.98, 7),
	(null, "Mango", 1, "und", 50, 0.31, 0.08, 12.36, 11.27, 0.0, 0.68, 0.0, 1.28, 7),
	(null, "Melocotón", 1, "und", 39, 0.0, 0.0, 9.5, 8.3, 0.0, 0.6, 0.0, 0.57, 7),
	(null, "Nectarina", 1, "und", 50, 0.1, 0.01, 10.2, 10.2, 2.2, 0.9, 0.0, 0.57, 7),
	(null, "Fresas bandeja", 400, "g", 32, 0.0, 0.0, 7.68, 0.0, 2.0, 1.0, 0.0, 2.80, 7),
	(null, "Ciruela roja", 1, "und", 46, 0.28, 0.02, 11.42, 9.92, 1.4, 0.7, 0.0, 0.30, 7),
	(null, "Ciruela amarilla", 1, "und", 70, 0.8, 0.0, 0.2, 0.0, 0.0, 1.8, 0.0, 0.33, 7),
	(null, "Frambuesas", 1, "und", 52, 0.65, 0.02, 11.94, 4.42, 6.5, 1.2, 0.0, 1.99, 7),
	(null, "Moras", 1, "und", 45, 1.0, 0.01, 6.24, 7.37, 3.16, 1.19, 0.0, 2.25, 7),
	(null, "Higo", 1, "und", 33, 0.25, 0.04, 6.45, 6.45, 1.01, 0.52, 0.0, 0.29, 7),
	(null, "Lechuga iceberg", 1, "und", 15, 0.2, 0.0, 2.9, 0.8, 1.3, 1.4, 0.0, 0.79, 7),
	(null, "Endibias bandeja 450g", 450, "g", 17, 0.2, 0.0, 3.1, 0.0, 0.0, 0.8, 0.0, 1.50, 7),
	(null, "Patata", 250, "g", 62, 0.5, 0.02, 13.3, 2.1, 1.8, 1.4, 0.01 , 0.45, 7),
	(null, "Patata Malla 3 kg", 3000, "g", 62, 0.5, 0.02, 13.3, 2.1, 1.8, 1.4, 0.01 , 4.40, 7),
	(null, "Cebollas malla 1 kg", 1000, "g", 32, 0.2, 0.0, 1.0, 0.0, 0.8, 1.0, 0.0, 1.35, 7),
	(null, "Cebollas malla 2 kg", 2000, "g", 32, 0.2, 0.0, 1.0, 0.0, 0.8, 1.0, 0.0, 1.99, 7),
	(null, "Tomate", 220, "g", 18, 0.2, 0.05, 3.92, 2.63, 1.2, 0.88, 0.0, 0.44, 7),
	(null, "Pepino", 230, "g", 12, 0.16, 0.01, 2.16, 1.38, 0.7, 0.59, 0.0, 0.43, 7),
   	(null, "Pimiento rojo/verde", 180, "g", 60, 1.6, 0.5, 7.5, 3.4, 2.5, 2.2, 0.0, 0.50, 7),
	(null, "Calabacín verde", 380, "g", 23, 0.3, 0.01, 3.13, 2.7, 1.7, 1.5, 0.0, 0.60, 7),
	(null, "Coliflor", 1200, "g", 27, 0.2, 0.05, 3.1, 1.0, 2.1, 2.2, 0.0, 0.44, 7),
	(null, "Brócoli", 420, "g", 38, 0.9, 0.0, 1.8, 1.7, 2.6, 4.4, 0.0, 1.13, 7),
	(null, "Berenjena", 350, "g", 24, 0.19, 0.03, 5.7, 2.35, 3.4, 1.01, 0.0, 0.58, 7),
    (null, "Filetes pechuga de pavo", 650, "g", 112.1, 1.3, 0.5, 0.0, 0.0, 0.0, 25.1, 0.16, 5.19, 8),
	(null, "Filetes pechuga de pollo", 650, "g", 108, 1.8, 0.6, 0.5, 0.0, 0.0, 22.0, 0.19, 5.17, 8),
	(null, "Jamoncitos de pollo", 920, "g", 121, 5.4, 1.8, 0.0, 0.0, 0.0, 18, 0.29, 5.18, 8),
	(null, "Pechugas de pollo empanadas marinadas", 650, "g", 147, 1.4, 0.4, 17.3, 1.8, 0.0, 16.3, 0.9, 4.58, 8),
	(null, "Filetes lomo de cerdo", 400, "g", 152, 8.9, 3.28, 0.0, 0.0, 0.0, 18.0, 0.15, 2.39, 8),
	(null, "Secreto de cerdo", 400, "g", 146, 7.5, 2.7, 0.5, 0.5, 0.0, 19.1, 0.15, 2.40, 8),
	(null, "Muesli Crunchy Hacendado con frutos secos 10% de frutos secos", 500, "g", 463, 19, 5.6, 63, 22, 6, 8, 0.5, 1.75, 9),
	(null, "Salvado de avena Hacendado con 16% de fibra", 400, "g", 359, 8.7, 1.6, 44.1, 1.4, 16.5, 17.6, 0.01, 1.15, 9),
	(null, "Cereales y semillas granola Hacendado con frutos secos bajo en azúcar", 400, "g", 477, 22.7, 3.5, 50.2, 4.7, 8.5, 13.6, 0.02, 2.05, 9),
	(null, "Queso semicurado mezcla Hacendado", 420, "g", 421, 35, 25, 1.6, 0.5, 0.0, 25, 1.7, 3.49, 11),
	(null, "Queso tierno mezcla Hacendado", 350, "g", 372, 32, 19, 0.5, 0.5, 0.0, 21, 1.4, 2.66, 11);


INSERT INTO recipes(id_recipe,name_recipe,id_recipe_category) VALUES
(1, "Arroz a la cubana", 7),
(null, "Bacalao con verduras", 4);

INSERT INTO new_recipes(recipes_id_recipe,id_new_recipes, ingredients_id_ingredient, cantidad_ingredient) VALUES
(1, 1, 70, 500),
(null, 1, 47, 200);


SELECT * FROM ingredients;
SELECT * FROM recipe_category;
SELECT * FROM new_recipes;
SELECT * FROM recipes;

SELECT id_new_recipes, group_concat(DISTINCT ingredients_id_ingredient)
from new_recipes
group by id_new_recipes
ORDER BY group_concat(DISTINCT ingredients_id_ingredient) ASC;
 

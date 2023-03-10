enum measure{
    grams  = "gr",
    units   = "u",
    milliliters  = "ml",
    cup = "cup",
    spoon = "spoon"

}

export interface recipe{
    name: string,
    price: number,
    kcal: number,
    kj: number,
    meals: number,
    description?: string,
    ingredients: [Object: {id_ingredient: string, quantity: number}],
    nutritionalFacts: [Object: {nutrient: string, value: number}],
  
    
  }
  
  export interface ingredient{
    name: string,
    price: number,
    kcal: number,
    kj: number,
    brand?: string,
    description?: string,
    measure: measure,
    nutritionalFacts: [Object: {nuntrient: string, value: number}],
  
  }

let pizza: recipe = {
    name: 'string',
    price: 1,
    kcal: 1,
    kj: 1,
    meals: 1,
    description: 'string',
    ingredients: [{id_ingredient: 'string', quantity: 1}],
    nutritionalFacts: [{nutrient: 'string', value: 1}],
  
}


console.log(pizza)
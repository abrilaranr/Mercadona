// import getIngredientById from '...';

export class Ingredient {
    name: string
    id: number
    price: number
    kcal: number
    kj: number
    brand?: string
    description?: string

    
    constructor(id: number){
        this.id = id;
    }

    getData(){
        // getIngredientById(this.id)
    }
}
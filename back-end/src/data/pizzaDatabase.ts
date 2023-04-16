import { CustomError } from "../error/CustomError";
import { Pizza } from "../model/pizza";
import { BaseDatabase } from "./Basedatabase";

export class PizzaDatabase extends BaseDatabase{
    private static PIZZA_TABLE = "pizzas"

    public createPizza = async (pizza:Pizza) =>{
        try{
            await PizzaDatabase.connection
                .insert(pizza)
                .into(PizzaDatabase.PIZZA_TABLE)

        }catch(error:any){
            throw new CustomError(400, error.message)
        }
    }
    public getAllPizzas = async ()=>{
        try{
            const pizzas = await PizzaDatabase.connection
                .select("*")
                .from(PizzaDatabase.PIZZA_TABLE)

            return pizzas

        }catch(error:any){
            throw new CustomError(400, error.message)

        }
    }
}
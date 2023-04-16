import { PizzaDatabase } from "../data/pizzaDatabase";
import { Pizza } from "../model/pizza";
import { PizzaInputDTO } from "../model/pizzaInputDTO";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const pizzaDatabase = new PizzaDatabase()

export class PizzaBusiness{

    public createPizza = async (input: PizzaInputDTO) =>{
        try{
            const { name, price } = input

            const id:string = idGenerator.generateId()

            const pizza:Pizza={
                id:id,
                name:name,
                price:price
            }
            await pizzaDatabase.createPizza(pizza)

        }catch(error:any){

        }
    }
    public getAllPizzas = async()=>{
        try{
            const pizzas = await pizzaDatabase.getAllPizzas()
            return pizzas

        }catch(error:any){

        }
    }
}
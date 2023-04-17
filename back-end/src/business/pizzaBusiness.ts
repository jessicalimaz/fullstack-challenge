import { PizzaDatabase } from "../data/pizzaDatabase";
import { CustomError, InvalidBody } from "../error/CustomError";
import { Pizza } from "../model/pizza";
import { PizzaInputDTO } from "../model/pizzaInputDTO";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const pizzaDatabase = new PizzaDatabase()

export class PizzaBusiness {

    public createPizza = async (input: PizzaInputDTO) => {
        try {
            const { name, price } = input

            if (!name || !price) {
                throw new InvalidBody()
            }

            const id: string = idGenerator.generateId()

            const pizza: Pizza = {
                id: id,
                name: name,
                price: price
            }
            await pizzaDatabase.createPizza(pizza)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
    public getAllPizzas = async () => {
        try {
            const pizzas = await pizzaDatabase.getAllPizzas()
            return pizzas

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}
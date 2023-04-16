import { Request, Response } from "express";
import { PizzaBusiness } from "../business/pizzaBusiness";
import { PizzaInputDTO } from "../model/pizzaInputDTO";

const pizzaBusiness = new PizzaBusiness()

export class PizzaController {

    public createPizza = async (req: Request, res: Response) => {
        try {
            const input = {
                name: req.body.name,
                price: req.body.price
            }

            const pizza: PizzaInputDTO ={
                name: input.name,
                price: input.price
            }

            await pizzaBusiness.createPizza(pizza)
            res.status(201).send({ message: "Pizza cadastrada com sucesso" });

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
    public getAllPizzas = async (req: Request, res: Response) =>{
        try{
            const pizzas = await pizzaBusiness.getAllPizzas()

            res.status(201).send({ pizzas });
            
        }catch(error:any){
            res.status(400).send(error.message);

        }
    }

}
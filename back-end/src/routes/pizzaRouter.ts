import express from 'express'
import { PizzaController } from '../controller/pizzaController'

export const pizzaRouter = express.Router()
const pizzaController = new PizzaController()

pizzaRouter.post("/create", pizzaController.createPizza)
pizzaRouter.get("/all-pizzas", pizzaController.getAllPizzas)
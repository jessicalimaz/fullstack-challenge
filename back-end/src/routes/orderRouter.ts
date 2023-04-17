import express from 'express'
import { OrderController } from '../controller/orderController'

export const orderRouter = express.Router()
const orderController = new OrderController()

orderRouter.post("/create", orderController.createOrder)
orderRouter.get("/orders", orderController.getAllOrders)

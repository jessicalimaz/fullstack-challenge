import { Request, Response } from "express";
import { OrderBusiness } from "../business/orderBusiness";
import { OrderInputDTO } from "../model/orderInputDTO";

const orderBusiness = new OrderBusiness()

export class OrderController {
    public createOrder = async (req: Request, res: Response) => {
        try {
            const order = {
                name: req.body.name,
                id_pizza: req.body.id_pizza,
                qty_pizza: req.body.qty_pizza,
                obs: req.body.obs,
            }

            const input: OrderInputDTO = {
                name: order.name,
                id_pizza: order.id_pizza,
                qty_pizza: order.qty_pizza,
                obs: order.obs
            }

            await orderBusiness.createOrder(input)
            res.status(201).send({ message: "Pedido enviado com sucesso" });

        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    public getAllOrders = async (req: Request, res: Response) => {
        try {
            const orders = await orderBusiness.getAllOrders()

            res.status(201).send({ orders })

        } catch (error: any) {
            res.status(400).send(error.message);

        }
    }

    public getOrderDetails = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const orderDetails = await orderBusiness.getOrderDetails(id)

            res.status(201).send({ orderDetails })

        } catch (error: any) {
            res.status(400).send(error.message);

        }
    }
}
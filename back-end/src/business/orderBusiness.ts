import { OrderDatabase } from "../data/orderDatabase";
import { CustomError, InvalidBody } from "../error/CustomError";
import { Order } from "../model/order";
import { OrderInputDTO } from "../model/orderInputDTO";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const orderDatabase = new OrderDatabase()

export class OrderBusiness {
    public createOrder = async (input: OrderInputDTO) => {
        try {
            const { name, id_pizza, qty_pizza, obs } = input

            if (!name || !id_pizza || !qty_pizza) {
                throw new InvalidBody()
            }

            const id: string = idGenerator.generateId()

            const order: Order = {
                id: id,
                name: name,
                id_pizza: id_pizza,
                qty_pizza: qty_pizza,
                obs: obs
            }

            await orderDatabase.createOrder(order)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getAllOrders = async () => {
        try {
            const orders = await orderDatabase.getAllOrders()
            return orders

        } catch (error: any) {

        }
    }

    public getOrderDetails = async (id: string) => {
        try {
            const orderDetails = await orderDatabase.getOrderDetails(id)
            return orderDetails

        } catch (error: any) {

        }
    }
}
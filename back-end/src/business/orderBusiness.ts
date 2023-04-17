import { OrderDatabase } from "../data/orderDatabase";
import { Order } from "../model/order";
import { OrderInputDTO } from "../model/orderInputDTO";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const orderDatabase = new OrderDatabase()

export class OrderBusiness{
    public createOrder = async (input:OrderInputDTO) =>{
        try{
            const { name, id_pizza, qty_pizza, obs } = input

            const id: string = idGenerator.generateId()

            const order:Order={
                id: id,
                name: name,
                id_pizza: id_pizza,
                qty_pizza: qty_pizza,
                obs: obs
            }

            await orderDatabase.createOrder(order)

        }catch(error:any){

        }
    }

    public getAllOrders = async () =>{
        try{
            const orders = await orderDatabase.getAllOrders()
            return orders
            
        }catch(error:any){

        }
    }
}
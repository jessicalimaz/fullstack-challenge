import { CustomError } from "../error/CustomError";
import { Order } from "../model/order";
import { BaseDatabase } from "./Basedatabase";

export class OrderDatabase extends BaseDatabase{
    private static ORDER_TABLE = "orders"

    public createOrder = async (order:Order) =>{
        try{
            await OrderDatabase.connection
                .insert(order)
                .into(OrderDatabase.ORDER_TABLE)

        }catch(error:any){
            throw new CustomError(400, error.message)

        }
    }

    public getAllOrders = async () =>{
        try{
            const orders = await OrderDatabase.connection
                .select("name", "status")
                .from(OrderDatabase.ORDER_TABLE)
            return orders

        }catch(error:any){
            throw new CustomError(400, error.message)
        }
    }

    public getOrderDetails = async (id:string) =>{
        try{
            const orderDetails = await OrderDatabase.connection
                .select("*")
                .from(OrderDatabase.ORDER_TABLE)
                .where({id})

            return orderDetails

        }catch(error:any){
            throw new CustomError(400, error.message)
        }
    }
}
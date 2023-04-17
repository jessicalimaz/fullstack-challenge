import { app } from "./app"
import { orderRouter } from "./routes/orderRouter"
import { pizzaRouter } from "./routes/pizzaRouter"

app.use("/pizza", pizzaRouter)
app.use("/order", orderRouter)
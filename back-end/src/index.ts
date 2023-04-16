import { app } from "./app"
import { pizzaRouter } from "./routes/pizzaRouter"

app.use("/pizza", pizzaRouter)

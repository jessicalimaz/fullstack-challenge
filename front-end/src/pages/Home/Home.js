import { useState } from "react";
import { BASE_URL } from "../../constants/URL";
import UseRequestData from "../../hooks/useRequestData";
import { Button, DivCard, Header } from "./style";
import Pizza from "../../components/Pizza";

export default function Home() {
    const [allPizzas, setAllPizzas] = useState([]);
    const [cart, setCart] = useState([])

    const getAllPizzas = async () => {
        const [data, error] = await UseRequestData(`${BASE_URL}/pizza/all-pizzas`);

        if (data) {
            setAllPizzas(data);
        } else if (error) {
            console.error(error);
        }
    };
    getAllPizzas()

    const addToCart = (pizza) => {
        setCart([...cart, pizza]);
    }
    console.log("CARRINHO", cart)


    return (
        <>
            <Header>
                <h1>PIZZA</h1><h1 id="delivery">DELIVERY</h1>
            </Header>

            <DivCard>
                {allPizzas && allPizzas.pizzas && allPizzas.pizzas.map((pizza) => {
                    return (
                        <Pizza key={pizza.id}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    )
                })}
            </DivCard>

            <divButton>
                <Button>FINALIZAR PEDIDO</Button>
            </divButton>
        </>
    )
}


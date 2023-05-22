import { useState } from "react";
import { BASE_URL } from "../../constants/URL";
import UseRequestData from "../../hooks/useRequestData";
import { Button, DivCard } from "./style";
import Pizza from "../../components/Pizza";
import { useNavigate } from "react-router-dom";
import { goToOrder } from "../../routes/Coordinator";

export default function Home() {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0);
    const [data, error] = UseRequestData(`${BASE_URL}/pizza/all-pizzas`)
    const navigate = useNavigate()

    const addToCart = (pizza) => {
        setCart([...cart, pizza, quantity]);
        setQuantity(0)
    }

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
      };

    
    //console.log("cart", cart)
    localStorage.setItem('arrCart', JSON.stringify(cart))
    
    return (
        <>
            <DivCard>
                {data && data.pizzas && data.pizzas.map((pizza) => {
                    return (
                        <Pizza key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            addToCart={() => { addToCart(pizza.name) }}
                            handleQuantityChange={handleQuantityChange}
                            quantity={quantity}
                        />
                    )
                })}
            </DivCard>

            <divButton>
                <Button onClick={() => (goToOrder(navigate))}>FINALIZAR PEDIDO</Button>
            </divButton>
        </>
    )
}


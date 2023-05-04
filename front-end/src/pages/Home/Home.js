import { useState } from "react";
import { BASE_URL } from "../../constants/URL";
import UseRequestData from "../../hooks/useRequestData";
import { Button, Header } from "./style";
import Pizza from "../../components/Pizza";

export default function Home() {
    const [allPizzas, setAllPizzas] = useState([]);
    
        const getAllPizzas = async () => {
            const [data, error] = await UseRequestData(`${BASE_URL}/pizza/all-pizzas`);

            if (data) {
                setAllPizzas(data);
            } else if (error) {
                console.error(error);
            }
        };
        getAllPizzas()
 
    console.log(allPizzas)

    return (
        <>
            <Header>
                <h1>PIZZA</h1><h1 id="delivery">DELIVERY</h1>
            </Header>
            
            {Array.isArray(allPizzas) && allPizzas.map((pizza) =>  {
                return (
                    <Pizza key={pizza.id}
                        pizza={pizza}
                    />
                )
            })}

            <divButton>
                <Button>FINALIZAR PEDIDO</Button>
            </divButton>

        </>
    )
}

  
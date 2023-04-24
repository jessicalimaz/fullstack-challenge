import { Pizza } from "../../components/Pizza";
import { Button, Card, Header } from "./style";

export function Home() {


    return (
        <>
            <Header>
                <h1>PIZZA</h1><h1 id="delivery">DELIVERY</h1>
            </Header>

            <Pizza />
            <Card>
                <h2>Pizza de mussarela</h2>
                <p>R$ 25,00</p>
                <button>+</button>
            </Card>

            <divButton>
                <Button>FINALIZAR PEDIDO</Button>
            </divButton>

        </>
    )
}
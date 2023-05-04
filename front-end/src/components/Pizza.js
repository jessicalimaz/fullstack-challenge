import { Card } from "../pages/Home/style";

export default function Pizza(pizza) {
    
    console.log("props", pizza)
    //const { name, price } = props.pizza;
    //console.log("props", name, price)

    return (
        <>
        <h1>PIZAS</h1>
            <Card>
                <h2>{pizza.name}</h2>
                <p>{pizza.price}</p>
                <button>+</button>
            </Card>
        </>
    )
}
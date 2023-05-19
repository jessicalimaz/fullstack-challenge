import { Card } from "../pages/Home/style";

export default function Pizza(props) {
    const { name, price } = props.pizza;
    
    return (
        <>
            <Card>
                <h2>{name}</h2>
                <p>{price}</p>
                <button onClick={() => props.addToCart(props.pizza)}>+</button>
            </Card>
        </>
    )
}
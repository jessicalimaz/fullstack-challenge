import { Card } from "../pages/Home/style";

export default function Pizza(props) {
    
    return (
        <>
            <Card>
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <input type="number" value={props.quantity} onChange={props.handleQuantityChange}/>
                <button onClick={props.addToCart}>Comprar</button>
            </Card>
        </>
    )
}
import { Button, FormDiv, Input, Label, Text } from "./style"
import { useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../../constants/URL";

export default function OrderPizza() {
    const arrayCart = JSON.parse(localStorage.getItem('arrCart'))
    const [inputName, setInputName] = useState("");
    const [inputObs, setInputObs] = useState("")

    const handleInputName = (event) => {
        setInputName(event.target.value)
    }
    const handleInputObs = (event) => {
        setInputObs(event.target.value)
    }

    const getPizza = (arr) => {
        const elementosIndexPar = [];

        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                elementosIndexPar.push(arr[i]);
            }
        }
        return elementosIndexPar;
    };
    const Pizzas = getPizza(arrayCart)

    const getQty = (arr) => {
        const elementosIndexImpar = [];

        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                elementosIndexImpar.push(arr[i]);
            }
        }
        return elementosIndexImpar;
    };
    const Qty = getQty(arrayCart)

    const dadosInput = {
        "name": inputName,
        "id_pizza": Pizzas,
        "qty_pizza": Qty,
        "obs": inputObs
    }

    const cadastrarDados = async (dadosInput) => {
        try {
            const response = await axios.post(`${BASE_URL}/order/create`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <FormDiv>
                <Label>Nome</Label>
                <Input type="text" value={inputName} onChange={handleInputName} />

                <br />

                <div>{arrayCart.map((i) => {
                    return (
                        <li>{i}</li>
                    )
                })}
                </div>

                <br />
                <Label>Observação</Label>
                <Text value={inputObs} onChange={handleInputObs} />

                <br />
                <Button onClick={cadastrarDados}>Confirmar pedido</Button>
            </FormDiv>
        </>
    )
}

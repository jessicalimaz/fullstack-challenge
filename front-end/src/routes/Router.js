import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "../pages/Home/Home";
import Order from "../pages/Order/Order";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} /> 
                <Route path="/order" element={<Order/>}/>
            </Routes>
        </BrowserRouter>
    )
}
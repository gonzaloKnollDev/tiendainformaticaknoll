import { useState } from "react";

export const ItemCount=({stock, initial,onAdd})=>{
    const [contador, setContador]=useState(initial);
    
    const añadir=()=>{
        if (contador<stock)
        setContador(contador+1);
    }

    const restar=()=>{
        if (contador>initial)
        setContador(contador-1);
    }
    
    return (
        <div>
            {contador}<br></br>
            <button onClick={añadir}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}
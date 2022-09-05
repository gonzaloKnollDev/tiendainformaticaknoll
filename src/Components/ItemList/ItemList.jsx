import { ItemCount } from "../ItemCount/ItemCount";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ItemList = ({producto})=>{
    const [productos,setProductos]= useState([]);
    
    const obtenerProductos=()=>{       
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(producto)
                },2000);
            })
        } 

    useEffect(()=>{
        const FuncionAsincronica = async()=>{
            try{
                const listado = await obtenerProductos();
                setProductos(listado);
            } catch (error){
                console.log("hubo un error")
            }
        }
        FuncionAsincronica();
    },[])


    return(          
        <div className="greeting">
            <img src={productos.imagen} className={'placas'}/>
            <br></br>
            {productos.greeting}
            <ItemCount stock={producto.stock} initial={0} onAdd={productos.agregarProducto}/>
        </div>
        )
    }
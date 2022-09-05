import { ItemList } from "../ItemList/ItemList";
import aorus3050 from '../../../src/img/aorus3050.jpg'
import asus3070ti from '../../../src/img/asus3070ti.jpg';

const Arregloproductos=[
    {greeting:'RTX 3050 Aorus',
      imagen:aorus3050,
      stock:10
    },
    {greeting:'RTX 3070 ti Asus',
      imagen:asus3070ti,
      stock:5
    }
  ]

const agregarProducto=()=>{
    //funcion para cantidad en carrito
}

export const ItemlistConteiner = ({producto})=>{
    return(   
          
            Arregloproductos.map((productos)=>{
              return (<ItemList producto={productos}/>)
          })
    )
}
import { ItemList } from "../ItemList/ItemList";
import aorus3050 from '../../../src/img/aorus3050.jpg'
import asus3070ti from '../../../src/img/asus3070ti.jpg';

const Arregloproductos=[
    {greeting:'RTX 3050 Aorus',
      imagen:aorus3050,
    },
    {greeting:'RTX 3070 ti Asus',
      imagen:asus3070ti,
    }
  ]

const agregarProducto=()=>{
    //funcion para cantidad en carrito
}

export const ItemlistConteiner = ({producto})=>{
    return(  
        <>    
            <ItemList producto={Arregloproductos[0]}/>
            <ItemList producto={Arregloproductos[1]}/>
        </>
    )
}
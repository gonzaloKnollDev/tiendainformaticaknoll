import { ItemCount } from "../ItemCount/ItemCount";

const agregarProducto=()=>{
    return "hola";
}

export const Itemlist = ({greeting,imagen,style,stylePlacas})=>{
    return(
        <h1 className={style}>
            <img src={imagen} className={stylePlacas}/>
            {greeting}
            <ItemCount stock={10} initial={0} onAdd={agregarProducto}/>
        </h1>
    )
}
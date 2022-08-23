function CartWidget({imagen,style}){

    return(
        <div>
            <img src={imagen} className={style} />
        </div>
    )
}

export default CartWidget;
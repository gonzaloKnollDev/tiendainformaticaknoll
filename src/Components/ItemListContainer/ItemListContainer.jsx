
function Itemlist(props){
    const greeting=props.greeting;
    const style=props.style;
    return(
        <h1 className={style}>
            {greeting}
        </h1>
    )
}

export default Itemlist;
import React, {useState} from 'react'

    
function ItemCount({ stock, initial, item }) {
    const style = {
        width: '18rem'
    };
    const [contador, setCount] = useState(initial);
    const [botonCart, setBotonCart] = useState("");    
    const [botonResta, setBotonResta] = useState("");    
    const [botonSuma, setBotonSuma] = useState("");
    const [cantidad, setCantidad] = useState(initial);
    const [carrito, setCarrito] = useState([]);    
    
    function onSum () {
        if (contador < stock) {
            setCount(contador + 1)
            setBotonSuma ("")
            setBotonResta ("")
            setBotonCart ("")     
        }else {
            setBotonSuma (true)
        }
    }

    function onRes () {
        if (contador > 1) {
            setCount(contador - 1)
            setBotonSuma ("")
        }else {
            setBotonCart (true)
            setBotonResta (true)
            setCount(contador - 1)
        }
    }

    function onAdd(item) {
        setCarrito(item)
        console.log(item);       
    }
    
    return (
        <div className="card" style={style}>
            <p className="m-0 pt-3">Stock {stock}</p>
            <div className="card-body" style={style}>
                <div className="p-3 ">
                    <button className="btn btn-outline-secondary p-10" disabled={botonSuma} onClick={() => onSum()}>+</button>
                    <span className="p-5">{contador}</span>
                    <button className="btn btn-outline-secondary p-10" disabled={botonResta} onClick={() => onRes()}>-</button><br />
                </div>
                <button className="btn btn-primary p-10" disabled={botonCart} onClick={()=>console.log(cantidad*contador)}/* {() => onAdd({item})} */>{stock*contador<=0?"No disponible":"Agregar al carrito"}</button>
            </div>
        </div>
    )
}

export default ItemCount

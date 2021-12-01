import React, {useState} from 'react'

function ItemCount({ stock, initial }) {

    const style = {
        width: '18rem'
    };
    const [contador, setCount] = useState(initial);
    const [habilitarBoton, setHabilitarBoton] = useState("");    
    
    function onAdd () {
        if (contador < stock) {
            setCount(contador + 1)
            setHabilitarBoton ("")            
        }
    }

    function onRem () {
        if (contador > 1) {
            setCount(contador - 1)
        }else {
            setHabilitarBoton ("true")
            setCount(contador - 1)
        }
    }
    
    return (
        <div className="card" style={style}>
            <p className="m-0 pt-3">Stock {stock}</p>
            <div className="card-body">
                <div className="p-3 ">
                    <button className="btn btn-outline-secondary p-10" onClick={() => onAdd()}>+</button>
                    <span className="p-5">{contador}</span>
                    <button className="btn btn-outline-secondary p-10" onClick={() => onRem()}>-</button><br />
                </div>
                <button className="btn btn-primary p-10" disabled={habilitarBoton} >Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

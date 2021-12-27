import React, { useContext } from 'react'
import { CarritoContext }  from '../context/CarritoProvider'
import { NavLink } from 'react-router-dom';
    
function ItemCount({ stock, initial, item }) {
    const style = {
        width: '45rem'        
    };
    const carritoContext = useContext(CarritoContext)
    const { addCarrito } = carritoContext 
    const { onSum} = carritoContext
    const { onRes} = carritoContext
    const { botonResta} = carritoContext
    const { botonSuma} = carritoContext
    const { contador} = carritoContext
    const { botonCart} = carritoContext   
   
    return (
        <div className="card" style={style}>
            <p className="m-0 pt-3">Stock {stock}</p>
            <div className="card-body" style={style}>
                <div className="p-3 ">
                    <button className="btn btn-outline-secondary p-10" disabled={botonSuma} onClick={() => onSum({stock, initial})}>+</button>
                    <span className="p-5">{contador}</span>
                    <button className="btn btn-outline-secondary p-10" disabled={botonResta} onClick={() => onRes()}>-</button><br />
                </div>
                <button className="btn btn-primary p-10" disabled={botonCart} onClick={() => addCarrito({item})}>Agregar al Carrito</button>
                <NavLink to="/productos"> <button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink>
            </div>
        </div>
    )
}

export default ItemCount

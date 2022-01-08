import React, { useContext } from 'react'
import { CarritoContext }  from '../context/CarritoProvider'
import { NavLink } from 'react-router-dom';
    
function ItemCount({ stock, initial, item }) {    
    
    const style = {
        maxWidth: '40rem'        
    };
    const carritoContext = useContext(CarritoContext)
    const { addCarrito } = carritoContext 
    const { onSum} = carritoContext
    const { onRes} = carritoContext   
    const { contador} = carritoContext    
   
    return (
        <div className="container-fluid card" style={style}>
            <p className="m-0 pt-3">Stock {stock}</p>
            <div className="card-body" style={style}>
                <div className="p-3 ">
                    <button className="btn btn-outline-secondary p-10" disabled={stock<=0?true:false} onClick={() => onSum({stock, initial})}>+</button>
                    <span className="p-5">{contador}</span>
                    <button className="btn btn-outline-secondary p-10" disabled={stock<=0?true:false} onClick={() => onRes()}>-</button><br />
                </div>
                <button className="btn btn-primary p-10" disabled={stock <= 0 ? true : false } onClick={() => addCarrito({ item, initial })}>{stock <= 0 ? "No disponible" : "Agregar al carrito"}</button>                
                <NavLink to="/productos"><button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink>
            </div>
        </div>
    )
}

export default ItemCount

import React from 'react'
import { NavLink } from 'react-router-dom';

const comprado = () => {
    
    
    const style = {
        width: '40rem'        
    };
    return (
        <div className='container d-flex card' style={style}>
            <NavLink to="/Cart"><button type="button" className='btn btn-danger m-3' >Ir al Carrito</button></NavLink>
            <NavLink to="/productos"><button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink>
        </div>
    )
}

export default comprado

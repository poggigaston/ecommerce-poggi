import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {CarritoContext}  from '../context/CarritoProvider' 


export default function CartWidget() {  
    
    const carritoContext = useContext(CarritoContext)
    const { carrito } = carritoContext    
    
    return (
        <>{carrito.length !== 0 ?
            <div>
                <Link to="/Cart"><button className='btn btn-danger'><i style={{ color: 'white', with: '15px' }} className="fas fa-shopping-cart fa-1x py-1 light"><span className='p-2'> {carrito.length}</span></i></button></Link>
            </div> : <div></div>
        }</>)
            
    
}


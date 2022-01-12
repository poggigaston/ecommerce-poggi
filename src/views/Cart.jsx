import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import ElementosCarrito from '../components/ElementosCarrito';
import { NavLink } from 'react-router-dom';
import carro from '../assets/images/carro.png'
import './Styles/cart.css'

function Cart() {      
    const carritoContext = useContext(CarritoContext)
    const { carrito } = carritoContext
    
    let precio = carrito.map((e) => (e.precio * e.cantidad))
    let total = precio.reduce((a, b) => a + b, 0);    

    return (        
        <div className='fondoCart bg-white'>{carrito.length !== 0 ? <div>
            <ElementosCarrito key="" total={total }carrito= {carrito}/>           
        </div> : <div className='container-fluid fondoCarro'>
                    <img className='img-fluid carro' src={carro} alt="Carro" />
                    <h1>El carrito vacio!!</h1>
                    <section><NavLink to="/productos"><button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink></section>
                </div>}            
        </div> 
    )
}
export default Cart
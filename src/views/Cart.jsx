import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import { NavLink } from 'react-router-dom';
import ElementosCarrito from '../components/ElementosCarrito';

function Cart() {
    
    const style = {
        width: '50rem'
    }
    
    const carritoContext = useContext(CarritoContext)
    const { carrito, vaciarCarrito } = carritoContext      
     
    let precio = carrito.map((e) => (e.precio * e.cantidad))
    let total2 = precio.reduce((a, b) => a + b, 0);
    console.log(total2 )    

    return (        
        <div className="container-fluid" style={style}>            
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <ElementosCarrito carrito= {carrito}/>                   
                </table>                
            <h2> Total: $ {total2}</h2>
            </div>
            <div className='p-3'>
                <button type="button" className="btn btn-secondary m-3" /* onclick={() => finalizarCompra()} */>Terminar compra</button>
                <NavLink to="/productos"><button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink>
                <button type="button" className="btn btn-danger m-3" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            </div>
        </div>        
    )
}
export default Cart
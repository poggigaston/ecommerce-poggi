import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import { NavLink } from 'react-router-dom';

export default function Cart() {
    
    const style = {
        width: '50rem'
    }
    
    const carritoContext = useContext(CarritoContext)
    const { carrito } = carritoContext 
    console.log(carrito);

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
                    <tbody>
                        <tr>                        
                            <th scope="row">{carrito[0].id }</th>                            
                            <td>{carrito[0].nombre}</td>
                            <td>{carrito[0].cantidad }</td>
                            <td>$ {carrito[0].precio}</td>                                  
                        </tr>
                    </tbody>
                </table>
                <div> Total: $<span>{/* {() => precioTotal()} */}</span></div>
            </div>
            <div className='p-3'>
                <button type="button" className="btn btn-secondary m-3" /* onclick={() => finalizarCompra()} */>Terminar compra</button>
                <NavLink to="/productos"> <button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink>
            <button type="button" className="btn btn-danger m-3" id="vaciar" /* onclick={() => vaciarCarrito()} */>Vaciar Carrito</button>
            </div>
        </div>
    )
}

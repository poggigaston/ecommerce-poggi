import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import { NavLink } from 'react-router-dom';
import ElementosCarrito from '../components/ElementosCarrito';

function Cart() {
    
    const style = {
        width: '50rem'
    }
    
    const carritoContext = useContext(CarritoContext)
    const { carrito } = carritoContext 
    // const { contador } = carritoContext 
    const { cantidad } = carritoContext 
    const { vaciarCarrito } = carritoContext

    console.log(carrito);   
    
    const total = carrito.map(item => item.precio*cantidad).reduce((prev, curr) => prev + curr, 0);
    console.log(total);
    const total2 = total
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
                    <ElementosCarrito carrito={carrito} cantidad={cantidad} total={total}/>                   
                </table>
                <h2> Total: $<span>{total2}</span></h2>
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
import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import ElementosCarrito from '../components/ElementosCarrito';
import Formulario from '../components/Formulario';
import './cart.css'

function Cart() {
    
    const carritoContext = useContext(CarritoContext)
    const { carrito } = carritoContext      
     
    let precio = carrito.map((e) => (e.precio * e.cantidad))
    let total2 = precio.reduce((a, b) => a + b, 0);
    console.log(total2 )    

    return (        
        <div className="container-fluid carrito">            
            <div className='tabla'>
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
            <div className='p-4'>
                <Formulario total={total2} compra={carrito}/>
            </div>
        </div>        
    )
}
export default Cart
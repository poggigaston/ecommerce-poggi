import React, { useContext } from 'react'
import { CarritoContext }  from '../context/CarritoProvider'

const ElementosCarrito = ({ total}) => {    
    
    const carritoContext = useContext(CarritoContext)    
    const { eliminarItem } = carritoContext
    // const { contador } = carritoContext
    const { cantidad } = carritoContext
    const { carrito } = carritoContext
        
    return (
        <>{carrito.length == 0 ?
            <tbody><td colspan="4"><h3>No hay elementos en el carrito</h3></td></tbody> : carrito.map((el) => (
            <tbody>
                <tr>
                    <th scope="row">{el.id }</th>                            
                    <td>{el.nombre}</td>
                    <td>{el.cantidad + cantidad}</td>
                    <td>$ {total}<button onClick={() => eliminarItem(el)}><i class="fas fa-trash"></i></button></td>                               
                </tr>                
            </tbody>
        ))}
        </>
    )
}

export default ElementosCarrito

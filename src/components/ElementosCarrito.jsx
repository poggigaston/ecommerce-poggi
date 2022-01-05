import React, {useContext} from 'react'
import { CarritoContext }  from '../context/CarritoProvider'

const ElementosCarrito = ({ carrito}) => {    
    
    const carritoContext = useContext(CarritoContext)    
    const { eliminarItem} = carritoContext   
        
    return (
        <>{carrito.length === 0 ?
            <tbody><td colspan="4"><h3>No hay elementos en el carrito</h3></td></tbody> : carrito.map((el) => (
            <tbody>
                <tr>
                    <th scope="row">{el.img }</th>                            
                    <td>{el.nombre}</td>
                    <td>{el.cantidad}</td>
                    <td>$ {el.precio * el.cantidad}<button onClick={() => eliminarItem(el)}><i class="fas fa-trash"></i></button></td>                               
                </tr>                
            </tbody>
        ))}
        </>
    )
}

export default ElementosCarrito

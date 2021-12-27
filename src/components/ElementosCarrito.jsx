import React, { useContext } from 'react'
import { CarritoContext }  from '../context/CarritoProvider'

const ElementosCarrito = ({ carrito, cantidad, total}) => {    
    
    console.log(cantidad)
    const carritoContext = useContext(CarritoContext)    
    const {eliminarItem} = carritoContext

    return (
        <>{carrito ? carrito.map((el) => (
            <tbody>
                <tr>
                    <th scope="row">{el.id }</th>                            
                    <td>{el.nombre}</td>
                    <td>{cantidad}</td>
                    <td>$ {total}<button onClick={() => eliminarItem(el)}><i class="fas fa-trash"></i></button></td>                               
                </tr>                
            </tbody>
        )) : <h1> Cargando... </h1>}
        </>
    )
}

export default ElementosCarrito

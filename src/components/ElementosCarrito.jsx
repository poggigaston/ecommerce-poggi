import React, {useContext} from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import Formulario from '../components/Formulario';

const ElementosCarrito = ({ carrito, total}) => {    
    
    const carritoContext = useContext(CarritoContext)    
    const { eliminarItem } = carritoContext    
        
    return (
        <><div className="container-fluid carrito">            
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
                        <tbody>
                            {carrito.map((el) => (<tr>
                                <th scope="row">{el.img }</th>                            
                                <td>{el.nombre}</td>
                                <td>{el.cantidad}</td>
                                <td>$ {el.precio * el.cantidad}<button onClick={() => eliminarItem(el)}><i class="fas fa-trash"></i></button></td>                               
                            </tr>))}              
                        </tbody>
                    </table>                
                    <h2> Total: $ {total}</h2>
                </div>
                <div className='container-fluid'>
                <Formulario total={total} compra={carrito}/>
                </div>
            </div>        
        </>
    )
}

export default ElementosCarrito

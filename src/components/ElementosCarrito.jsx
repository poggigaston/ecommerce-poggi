import React, {useContext} from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import Formulario from '../components/Formulario';
import src from "../assets/img";

const ElementosCarrito = ({ carrito, total}) => {    
    
    const carritoContext = useContext(CarritoContext)    
    const { eliminarItem } = carritoContext    
        
    return (
        <div className='p-3 carrito'>            
            <div className='tabla border bg-light'>
                <table className="table border bg-white">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((el) => (
                            <tr>
                                <td>{el.img }</td>                            
                                <th>{el.nombre}<img src={src[el.img]} width={90} alt={el.nombre}/></th>
                                <td>{el.cantidad}</td>
                                <td>$ {el.precio * el.cantidad}</td>                               
                                <td><i className="fas fa-trash" onClick={() => eliminarItem(el)}></i></td>
                            </tr>))}              
                        </tbody>
                </table>                
                <h2 className='border bg-white d-inline p-1'> Importe Total: $ {total}</h2>
            </div>
            <div className='container-fluid'>
            <Formulario total={total} compra={carrito}/>
            </div>
        </div>        
        
    )
}

export default ElementosCarrito

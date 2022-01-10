import React, { useContext } from 'react'
import { CarritoContext }  from '../context/CarritoProvider'
import ItemCount from './ItemCount';
import src from "../assets/img";
import Comprado from './Comprado';

export default function ItemDetail({ item }) {
    const style = {
       maxWidth: '40rem',
       minWith: '20rem'
    };
    const carritoContext = useContext(CarritoContext)
    const { isInCart } = carritoContext 
     
    return (
        <div className="container-fluid">
            <div className="card container-fluid" style={style}>
                <img src={src[item.img]} className="img-fluid m-2" alt={item.nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.descripcion}<br></br><br></br>
                        <div className="h2">$ {item.precio}</div>
                    </p>                                        
                </div>
            </div>
            <>{ isInCart(item.id) == false ? 
            <ItemCount stock={item.stock} initial={1} item={item} /> :
            <Comprado />
            }
            </>
        </div>
    );
}


import React, { useContext } from 'react'
import { CarritoContext }  from '../context/CarritoProvider'
import ItemCount from './ItemCount';
import src from "../assets/img";
import Comprado from './Comprado';


export default function ItemDetail({ item }) {
    const style = {
        width: '40rem'        
    };
    const carritoContext = useContext(CarritoContext)
    const { isInCart } = carritoContext 
     
    return (
        <div className="col col-md-6 col-lg-4 col- m-0">
            <div className="card" style={style}>
                <img src={src[item.img]} className="card-img-top" alt={item.nombre}></img>
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


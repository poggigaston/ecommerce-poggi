import React from 'react'
import ItemCount from './ItemCount';
import src from "../assets/img";


export default function ItemDetail({ item, id }) {
    const style = {
        width: '45rem'        
    };
       
    return (
        <div className="col col-md-6 col-lg-4 col- my-4">
            <div className="card" style={style}>
                <img src={src[item.id]} className="card-img-top" alt={item.nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.desc}<br></br><br></br>
                        <div className="h2">$ {item.precio}</div>
                    </p>                                        
                </div>
            </div>    
            <ItemCount stock={item.stock} initial={1} item={item} id={id }/>
        </div>               
        
    );
}


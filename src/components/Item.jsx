import React from 'react';
import { NavLink } from 'react-router-dom';
import src from "../assets/img";

export default function Item({ item }) {
    const style = {
        width: '18rem'
    };   
    

    return (
        <div className="col col-md-6 col-lg-4 col- my-4">           
            <div className="card" style={style}>
                <img src={src[item.img]} className="card-img-top" alt={item.nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    {/* <p className="card-text">{item.desc}<br></br><br></br></p> */}
                        <div className="h3">$ {item.precio}</div>
                    <p>Stock {item.stock}</p>
                    <NavLink to={`/detalle/${item.id}`}><button className="btn btn-success" >Ver Detalle</button></NavLink>
                </div>
            </div>
        </div>
    );
}



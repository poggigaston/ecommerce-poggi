import React from 'react'
import ItemCount from './ItemCount';


export default function ItemDetail({ item }) {
    const style = {
        width: '18rem'
    };

    console.log(item)
    return (
        <div className="col col-md-6 col-lg-4 col- my-4">
            <div className="card" style={style}>
                <img src={item.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.desc}<br></br><br></br>
                        <div className="h2">{item.precio}</div></p>                    
                    <a className="btn btn-success" id="boton" onClick={item.id}>Agregar al Carrito</a>
                </div>
            </div>    
            <ItemCount stock={item.stock} initial={1}></ItemCount>
        </div>
                
        
    );
}

// export default ItemDetail;
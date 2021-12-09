import React from 'react';

export default function Item({ item }) {
    const style = {
        width: '18rem'
    };

    return (
        <div className="col col-md-6 col-lg-4 col- my-4">
            {/* <h1>Aca van las cards</h1> */}
            <div className="card" style={style}>
                <img src={item.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    {/* <p className="card-text">{item.desc}<br></br><br></br>
                        <div className="h2">{item.precio}</div></p> */}
                    <p>Stock {item.stock}</p>
                    <a className="btn btn-success" id="boton" onClick={item.id}>Ver Detalle</a>
                </div>
            </div>
        </div>
    );
}



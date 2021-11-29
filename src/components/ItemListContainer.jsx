import React from 'react';

const ItemListContainer = ({ greeting, nombre, descripcion, precio }) => {
    const style = {
        width: '18rem'
    };
    
    return (
        <div className="container-fluid">            
            <h1>{greeting}</h1>
            <div class="card" style={style}>
                <img src="./" class="card-img-top" alt="Imagen"></img>
                <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p class="card-text">{descripcion}</p>
                <p class="card-text">$ {precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            
        </div>
    );
}

export default ItemListContainer

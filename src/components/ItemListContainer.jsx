import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ children, greeting, nombre, descripcion, precio}) => {
    const style = {
        width: '18rem'
    };

    const [data, setData] = useState(null);

    let array = []

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(array)
        },3000)
    })

    const resolverArray = async () => {
        try {
            const data = await promise;
            setData(data)
        } catch (error) {
            throw error;
        } finally {
            console.log("la peticion se termino")
        }
    }

    useEffect(() => {
        resolverArray()        
    }, [])
    
    return (
        <div className="container-fluid">            
            <h1>{greeting}</h1>
            <ItemCount stock={8} initial={1}></ItemCount>        
            {children}
            {/* <div class="card" style={style}>
                <img src="./" class="card-img-top" alt="Imagen"></img>
                <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <p class="card-text">{descripcion}</p>
                <p class="card-text">$ {precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div> */}
            
        </div>
    );
}

export default ItemListContainer

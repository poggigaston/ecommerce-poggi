import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ children, greeting}) => {
    
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
        </div>
    );
}

export default ItemListContainer

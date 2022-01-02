import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import productos  from './../assets/Productos';


const ItemListContainer = ({ children, greeting }) => {
        
    const [data, setData] = useState(null);

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        },500)
    })

    const resolverArray = async () => {
        try {
            const data = await promise;            
            setData(data)
        } catch (err) {
            console.log(err)
        } finally {
            console.log("la peticion se termino")           
        }
    }

    useEffect(() => {
        resolverArray()        
    }, [])
   
    return (
        <div className="container-fluid" style={{paddingTop:"15px", paddingBottom:"50px"}}>            
            <h1>{greeting}</h1>
            <ItemList items={data} />           
            {children}        
        </div>
    );
}

export default ItemListContainer

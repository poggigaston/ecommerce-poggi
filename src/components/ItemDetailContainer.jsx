import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import productos from './../assets/Productos';

function ItemDetailContainer( {id}) {

    const [state, setState]= useState(null)    
    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[id]);
        }, 500);
    });
    
    const getItem = async () => {
        try {
            const data = await promise;
            setState(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("Termine");
        }
    };

    useEffect(()=>{
        getItem();        
    },[])

    return (
        <div className="container-fluid" style={{paddingTop:"15px", paddingBottom:"50px"}}>            
            {state ? (
                <ItemDetail item={state} id={ id}/> )
            : (<p><span className="spinner-border"></span>CARGANDO...</p>)}    
        </div>      
    )
}
export default ItemDetailContainer

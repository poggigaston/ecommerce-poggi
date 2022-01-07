import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { getDoc, doc} from "firebase/firestore"
import db from "../service"

function ItemDetailContainer( {id}) {

    const [state, setState]= useState(null)      
    
    useEffect(() => {        
        const itemRef = doc(db, "items", `${id}` );
        getDoc(itemRef).then((doc) => {
            if (doc.exists()) {
                setState({ id: doc.id, ...doc.data()});
            }            
        })               
    }, []) 

    return (
        <div className="container-fluid" style={{paddingTop:"15px", paddingBottom:"50px"}}>            
            {state ? (
                <ItemDetail item={state}/> )
            : (<p><span className="spinner-border"></span>CARGANDO...</p>)}    
        </div>      
    )
}
export default ItemDetailContainer

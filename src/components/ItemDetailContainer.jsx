import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { getDoc, doc} from "firebase/firestore"
import db from "../service"
// import productos from './../assets/Productos';

function ItemDetailContainer( {id}) {

    const [state, setState]= useState([])      
    
    useEffect(() => {        
        const itemRef = doc(db, "items", `${id}` );
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setState({ id: doc.id, ...snapshot.data()});
            }            
        })               
    }, []) 

    return (
        <div className="container-fluid" style={{paddingTop:"15px", paddingBottom:"50px"}}>            
            {state ? (
                <ItemDetail item={state} id={id}/> )
            : (<p><span className="spinner-border"></span>CARGANDO...</p>)}    
        </div>      
    )
}
export default ItemDetailContainer

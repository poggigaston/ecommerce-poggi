import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { collection, getDocs } from "firebase/firestore"
import db from "../service"
// import productos  from './../assets/Productos';

const ItemListContainer = ({ children, greeting }) => {
        
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })));            
        })               
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

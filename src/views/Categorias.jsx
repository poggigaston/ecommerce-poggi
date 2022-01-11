import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../components/ItemList';
import { getDocs, collection, query, where} from "firebase/firestore"
import db from "../service"
import './Styles/categorias.css'

export default function Categorias() {
  
  const { categoria } = useParams();

  const [filtrado, setFiltrado]= useState(null)    
    
    useEffect(() => {        
      const q = query(collection(db, "items"), where("categoria", "==", `${categoria}`));
      getDocs(q).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No results");
        }
      setFiltrado(snapshot.docs.map((snapshot) => ({id: snapshot.id, ...snapshot.data() })));  
      })
      // eslint-disable-next-line          
    }, [])   
                                                                       
    return (
      <div className='container-fluid contenedorCat'>                 
        <ItemList items={filtrado} />         
      </div>
    )
}

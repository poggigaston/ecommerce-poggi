import React from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../components/ItemList';
import productos from './../assets/Productos'

export default function Categorias() {
  
  const { category } = useParams();

  const filtrado = productos.filter((e) => e.categoria === category)
  console.log(productos)
  
    return (
      <div className='container-fluid'>                 
        <ItemList items={filtrado} />         
      </div>
    )
}

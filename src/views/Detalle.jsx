import React from 'react';
import './detalle.css'
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer';

export default function Detalle() {    
    
    const { id } = useParams();    

    return (
        <div className="container-fluid contenedorDet">
            <ItemDetailContainer id={id}/>
        </div>
    )
}

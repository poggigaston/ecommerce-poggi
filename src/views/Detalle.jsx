import React from 'react';
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer';

export default function Detalle() {    
    
    const { id } = useParams();

    return (
        <div className="container-fluid" style={{paddingLeft:"25%"}}>
            <ItemDetailContainer id={id}/>
        </div>
    )
}

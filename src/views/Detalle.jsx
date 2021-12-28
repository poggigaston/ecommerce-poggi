import React from 'react';
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../components/ItemDetailContainer';

export default function Detalle() {    
    
    const { id } = useParams();

    return (
        <div>
            <h1>ProfilPage:{ id}</h1>
            <ItemDetailContainer id={id}/>
        </div>
    )
}

import React from 'react'
import Item from "./Item";
import 'animate.css';
import Cargando from './Cargando';

export default function Itemlist ({items}) {
    return (
        <div className="row" style={{paddingLeft:"6em"}}>
            {items ? items.map((item) => (
                <Item item={item}/>
            )): <Cargando />}
        </div>
    )
}

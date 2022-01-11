import React from 'react'
import Item from "./Item";
import 'animate.css';
import Cargando from './Cargando';

export default function Itemlist ({items}) {
    return (
        <div className="row" style={{margin:"auto auto"}}>
            {items ? items.map((item) => (
                <Item key={item.id} item={item}/>
            )): <Cargando />}
        </div>
    )
}

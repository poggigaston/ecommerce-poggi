import React from 'react'
import Item from "./Item";
import 'animate.css';

export default function Itemlist ({items}) {
    return (
        <div className="row">
            {items ? items.map((item) => (
                <Item key={item.id} item={item}/>
            )): <p><span className="spinner-border"></span>CARGANDO...</p>}
        </div>
    )
}

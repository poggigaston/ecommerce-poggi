import React from 'react'
import Item from "./Item";
import 'animate.css';

export default function Itemlist ({items}) {
    return (
        <div className="row" style={{paddingLeft:"6em"}}>
            {items ? items.map((item) => (
                <Item item={item}/>
            )): <p><span className="spinner-border"></span>CARGANDO...</p>}
        </div>
    )
}

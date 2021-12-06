import React from 'react'
import Item from "./Item";


export default function Itemlist ({items}) {
    return (
        <div className="row">
            {items ? items.map((item) => (
                <Item key={item.id} item={item}/>
            )): <h1>Cargando...</h1>}
        </div>
    )
}

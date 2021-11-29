import React from 'react';

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container-fluid">            
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer

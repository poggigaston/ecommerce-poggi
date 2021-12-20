import React from 'react'

export default function Cart(carrito) {
    const style = {
        width: '50rem'
    }
    
    return (
        <div className="container-fluid" style={style}>            
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>
                        </div>                       
                    </tbody>
                </table>
                <div> Total: $<span>{/* {() => precioTotal()} */}</span></div>
            </div>
            <div className='p-3'>
                <button type="button" className="btn btn-secondary m-3" /* onclick={() => finalizarCompra()} */>Terminar compra</button>
                <button type="button" className="btn btn-secondary m-3">Seguir Comprando</button>
            <button type="button" className="btn btn-danger m-3" id="vaciar" /* onclick={() => vaciarCarrito()} */>Vaciar Carrito</button>
            </div>
        </div>
    )
}

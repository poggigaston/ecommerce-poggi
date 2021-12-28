import { useState, createContext } from 'react';


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    
    const [contador, setCount] = useState(1);
    const [botonCart, setBotonCart] = useState("");
    const [botonResta, setBotonResta] = useState("");
    const [botonSuma, setBotonSuma] = useState("");
    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(1);

    function onSum({ stock }) {
        if (contador < stock) {
            setCount(contador + 1);
            setBotonSuma("");
            setBotonResta("");
            setBotonCart("");
        } else {
            setBotonSuma(true);
        }
    }

    function onRes() {
        if (contador > 1) {
            setCount(contador - 1);
            setBotonSuma("");
        } else {
            setBotonCart(true);
            setBotonResta(true);
            setCount(contador - 1);
        }
    }
    function vaciarCarrito() {
        setCarrito([]);
        setCount(1);        
    }

    function addCarrito({ item }) {
        let isInCart = false;
        if (isInCart) {
            setCantidad(cantidad + contador);
            setCount(1);
        } else {
            setCarrito([...carrito, item]);
            setCantidad(item.cantidad + contador);
            setCount(1);            
        }
    }

    function eliminarItem(num) {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        } else {
            let indice = carrito.indexOf(num);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                setCarrito([]);
                console.log(carrito);    
            }            
        }
    }
    
    
    
        return (

            <CarritoContext.Provider value={{ carrito, addCarrito, onRes, onSum, botonResta, botonCart, botonSuma, contador, vaciarCarrito, cantidad, eliminarItem }}>
                {children}
            </CarritoContext.Provider>
        );
    
}
export default CarritoProvider

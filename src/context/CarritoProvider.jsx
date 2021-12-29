import { useState, createContext } from 'react';


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    
    const [contador, setCount] = useState(1);
    const [botonCart, setBotonCart] = useState("");
    const [botonResta, setBotonResta] = useState("");
    const [botonSuma, setBotonSuma] = useState("");
    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const isInCart = (itemID) => carrito.some((product) => product.id === itemID);
    
    const handleCart = (contador, item) => {
        item.cantidad = contador;
        setCarrito([...carrito, item]);
        setCantidadCarrito(cantidadCarrito + contador);
    };

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
        if (isInCart (item.id)) {
            setCantidad(cantidad + contador);                      
            setCarrito([...carrito]);
            setCount(1);
        } else {
            item.cantidad = contador;
            item.precio = item.precio * item.cantidad;
            setCarrito([...carrito, item]);
            setCount(1);            
        }
    }

    function eliminarItem(el) {    
        if (el.cantidad > 1) {
            console.log(el);            
            el.cantidad = el.cantidad - 1
            el.precio = el.precio - (el.precio/ el.cantidad) 
            setCarrito([...carrito]);          
        } else {
            let indice = carrito.indexOf(el);
            if (indice !== -1) {
                const itemToDelete = carrito.find((e) => e.id === el.id);
                const newArray = carrito.filter((item) => item.id !== el.id);
                setCarrito(newArray);
                setCantidad(cantidad - itemToDelete.cantidad)
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

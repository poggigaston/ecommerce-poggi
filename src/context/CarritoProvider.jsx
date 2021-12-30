import { useState, createContext } from 'react';


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    
    const [contador, setCount] = useState(1);
    const [botonCart, setBotonCart] = useState("");
    const [botonResta, setBotonResta] = useState("");
    const [botonSuma, setBotonSuma] = useState("");
    const [carrito, setCarrito] = useState([]);
    const [isInCart, setIsInCart] = useState(false);
    
  
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
    
// SEGUIR CON ESTO!!! NO TOMA EL ISINCART
    
    function addCarrito({ item }) {
       function a (item) {
        if (carrito.some((product) => product.id === item)) {
            setIsInCart(true)
        }
        };
        a()
        console.log(isInCart);
        if (isInCart == true) { 
            item.cantidad = item.cantidad + 1
            item.precio = item.cantidad * item.precio
            // setCarrito([...carrito]);
            setCount(1);
        } else {
            item.cantidad = contador;           
            setCarrito([...carrito, item]);
            setCount(1);            
        }
    }

    function eliminarItem(el) {    
        if (el.cantidad > 1) {
            console.log(el);    
            el.cantidad = el.cantidad - 1
            setCarrito([...carrito]);          
        } else {
            let indice = carrito.indexOf(el);            
            if (indice !== -1) {                
                const newArray = carrito.filter((item) => item.id !== el.id);
                setCarrito(newArray);                
                console.log(carrito);    
            }            
        }
    }
        
        return (

            <CarritoContext.Provider value={{ carrito, addCarrito, onRes, onSum, botonResta, botonCart, botonSuma, contador, vaciarCarrito, eliminarItem }}>
                {children}
            </CarritoContext.Provider>
        );
    
}
export default CarritoProvider

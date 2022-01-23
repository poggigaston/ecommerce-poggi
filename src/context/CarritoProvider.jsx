import { useState, createContext } from 'react';
import Swal from 'sweetalert2';
import src from "../assets/img";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    
    const [contador, setCount] = useState(1);    
    const [carrito, setCarrito] = useState([]);    
    
    const isInCart = (itemID) => carrito.some((product) => product.id === itemID);
  
    function onSum({ stock }) {
        if (contador < stock) {
            setCount(contador + 1);            
        }        
    }

    function onRes() {
        if (contador > 1) {
            setCount(contador - 1);            
        }        
    }
    
    function vaciarCarrito() {
        setCarrito([]);
        setCount(1);        
    }    
    
    function addCarrito({ item }) {    
        if (isInCart(item.id)) {
            let arr = carrito.find((i) => i.id === item.id);
            arr.cantidad = arr.cantidad + contador;
            arr.stock = arr.stock - arr.cantidad;
            setCarrito([...carrito]);             
            setCount(1);
            Swal.fire({
            position: 'top-end',
            imageUrl:  src[item.img],
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            title: "El producto "+ arr.nombre + " se agrego nuevamente al carrito",
            showConfirmButton: false,
            timer: 3500
            })
        } else {
            item.cantidad = contador;           
            setCarrito([...carrito, item]);
            setCount(1);
            Swal.fire({
            title: 'Genial!',
            text: "El producto "+ item.nombre + " se agrego correctamente al carrito",
            imageUrl: src[item.img],
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        }
    }

    function eliminarItem(el) {    
        if (el.cantidad > 1) {            
            el.cantidad = el.cantidad - 1
            setCarrito([...carrito]);          
        } else {
            let indice = carrito.indexOf(el);            
            if (indice !== -1) {                
                const newArray = carrito.filter((item) => item.id !== el.id);
                setCarrito(newArray);       
            }            
        }
    }
        
    return (
        <CarritoContext.Provider value={{ carrito, addCarrito, onRes, onSum, contador, vaciarCarrito, eliminarItem, isInCart }}>
            {children}
        </CarritoContext.Provider>
    );
    
}
export default CarritoProvider

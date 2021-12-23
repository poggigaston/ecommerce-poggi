import { useState, createContext } from 'react';


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState([])

    function addCarrito({item}) {
        setCarrito([...carrito, item])        
    }    

    return (    

        <CarritoContext.Provider value={{carrito, addCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider

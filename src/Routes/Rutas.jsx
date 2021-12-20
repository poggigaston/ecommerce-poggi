import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../views/Cart';
import Categorias from '../views/Categorias';
import Contacto from '../views/Contacto';
import Error from '../views/Error';
import Home from '../views/Home';
import Nosotros from '../views/Nosotros';
import Productos from '../views/Productos';
import Detalle from '../views/Detalle';
import Layout from '../views/Layout';

export default function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>               
                    <Route index element={<Home/>} />                
                    <Route path="/cart" element={<Cart/>} />                
                    <Route path="/contacto" element={<Contacto/>} />                
                    <Route path="/categorias/:categoria" element={<Categorias/>} />                
                    <Route path="/nosotros" element={<Nosotros/>} />                
                    <Route path="/productos" element={<Productos/>} />                
                    <Route path="/detalle/:id" element={<Detalle />} />
                </Route>    
                <Route path="*" element={ <Error/> } />                
            </Routes>
        </BrowserRouter>
        
    )
}

import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';

function ItemDetailContainer( {id}) {

    const [state, setState]= useState(null)
    
    const productos = [
    {   id: 1,
        nombre: "PC-732G-LED",
        tipo: "CENTRAL",
        stock: 200,
        precio: 12000,
        cantidad: 0,
        img: "../images/Paneles y teclados/PC-732G-LED-3G-COM.jpg",
        desc: "Combo de alarma PC-732G con teclado LED y comunicador 3G-COM."
    },
    {
        id: 2,
        nombre: "PC-900G-LED",
        tipo: "CENTRAL",
        stock: 112,
        precio: 18000,
        cantidad: 0,
        img: "./images/Paneles y teclados/pc-900g-led.jpg",
        desc: "Panel de alarma Garnet con WiFi embebido, 32 Zonas, 4 Particiones, incluye teclado LED."
    },
    {
        id: 3,
        nombre: "A2K4-NGRF/PC800",
        tipo: "CENTRAL",
        stock: 15,
        precio: 15000,
        cantidad: 0,
        img: "/images/Paneles y teclados/A2K4-NG-LCD.jpg",
        desc: "Central Cableada / Inalámbrica, 6 zonas + 1 en teclado, expandible a 8, 2 particiones."
    },
    {
        id: 4,
        nombre: "A2K8-NGRF/PC860",
        tipo: "CENTRAL",
        stock: 65,
        precio: 17000,
        cantidad: 0,
        img: "/images/Paneles y teclados/A2K8-pc-860.jpg",
        desc: "Central Cableada con teclado, de 8 zonas expandibles a 32 y 4 particiones."
    },
    {
        id: 5,
        nombre: "G-LED732",
        tipo: "TECLADO",
        stock: 65,
        precio: 7000,
        cantidad: 0,
        img: "/images/Paneles y teclados/G-LED732.jpg",
        desc: "Teclado Led 8 zonas compatible con paneles de alarma Garnet."
    },
    {
        id: 6,
        nombre: "G-LCD732",
        tipo: "TECLADO",
        stock: 65,
        precio: 7500,
        cantidad: 0,
        img: "/images/Paneles y teclados/G-LCD732.jpg",
        desc: "Teclado con display LCD compatible con paneles de alarma Garnet."
    },
    {
        id: 7,
        nombre: "G-LCD732RF",
        tipo: "TECLADO",
        stock: 63,
        precio: 8000,
        cantidad: 0,
        img: "/images/Paneles y teclados/G-LED732.jpg",
        desc: "Teclado con display LCD y receptor RF, compatible con paneles de alarma Garnet."
    },
    {
        id: 8,
        nombre: "3G-COM-G",
        tipo: "COMUNICADOR",
        stock: 65,
        precio: 4000,
        cantidad: 0,
        img: "/images/comunicadores/3G-COM-G.jpg",
        desc: "Comunicador para paneles línea Garnet WiFi/3G."
    },
    {
        id: 9,
        nombre: "IP-500G",
        tipo: "COMUNICADOR",
        stock: 45,
        precio: 6000,
        cantidad: 0,
        img: "/images/comunicadores/IP-500G.jpg",
        desc: "Comunicador IP WiFi para paneles línea Garnet."
    },
    {
        id: 10,
        nombre: "COM-900",
        tipo: "COMUNICADOR",
        stock: 55,
        precio: 5500,
        cantidad: 0,
        img: "/images/comunicadores/com-900.jpg",
        desc: "Modulo Comunicador 3G para PC-900."
    },
    {
        id: 11,
        nombre: "IR-1000D",
        tipo: "SENSOR CABLEADO",
        stock: 100,
        precio: 3000,
        cantidad: 0,
        img: "/images/Sensores/IR-1000.jpg",
        desc: "Detector doble infrarrojo para exteriores, cableado."
    },
    {
        id: 12,
        nombre: "IR-800",
        tipo: "SENSOR CABLEADO",
        stock: 100,
        precio: 3500,
        cantidad: 0,
        img: "/images/Sensores/IR-808.jpg",
        desc: "Detector infrarrojo de interior. Inmunidad a mascotas 18Kg."
    },
    {
        id: 13,
        nombre: "DGW-500",
        tipo: "SENSOR INALAMBRICO",
        stock: 100,
        precio: 4500,
        cantidad: 0,
        img: "/images/Sensores/DGW-500.jpg",
        desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico."
    },
    {
        id: 14,
        nombre: "DGW-500-PET",
        tipo: "SENSOR INALAMBRICO",
        stock: 100,
        precio: 5000,
        cantidad: 0,
        img: "/images/Sensores/DGB-2-PET.jpg",
        desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico. Inmunidad a mascotas 18kg."
    },
    {
        id: 15,
        nombre: "MP-300",
        tipo: "SIRENA EXTERIOR",
        stock: 100,
        "precio": 5000,
        cantidad: 0,
        img: "/images/Sirenas/MP-300.jpg",
        desc: "Sirena Exterior magnetodinámica con Flash."
    },
    {
        id: 16,
        nombre: "MP-150",
        tipo: "SIRENA INTERIOR",
        stock: 100,
        "precio": 4000,
        cantidad: 0,
        img: "/images/Sirenas/MP-150.jpg",
        desc: "Sirena Exterior magnetodinámica."
    },
    {
        id: 17,
        nombre: "MP-200",
        tipo: "SIRENA EXTERIOR",
        stock: 100,
        precio: 4200,
        cantidad: 0,
        img: "/images/Sirenas/MP-200.jpg",
        desc: "Sirena Exterior doble Piezoeléctrica."        
    }]     
  
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos[id]);
        }, 2000);
    });
    
    const getItem = async () => {
        try {
            const data = await promise;
            setState(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("Termine");
        }
    };

    useEffect(()=>{
        getItem();        
    },[])

    return (
        <div className="container">            
            {state ? (
                <ItemDetail item={state} id={ id}/> )
            : (<p><span className="spinner-border"></span>CARGANDO...</p>)}    
        </div>      
    )
}
export default ItemDetailContainer

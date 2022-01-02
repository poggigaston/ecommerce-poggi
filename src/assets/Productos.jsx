const productos = [
    {   id: 0,
        nombre: "PC-732G-LED",
        categoria: "Paneles y Teclados",
        stock: 200,
        precio: 12000,
        img: "./images/Paneles y teclados/PC-732G-LED-3G-COM.jpg",
        desc: "Combo de alarma PC-732G con teclado LED y comunicador 3G-COM."
    },
    {
        id: 1,
        nombre: "PC-900G-LED",
        categoria: "Paneles y Teclados",
        stock: 112,
        precio: 18000,
        img: "./images/Paneles y teclados/pc-900g-led.jpg",
        desc: "Panel de alarma Garnet con WiFi embebido, 32 Zonas, 4 Particiones, incluye teclado LED."
    },
    {
        id: 2,
        nombre: "A2K4-NGRF/PC800",
        categoria: "Paneles y Teclados",
        stock: 15,
        precio: 15000,
        img: "./images/Paneles y teclados/A2K4-NG-LCD.jpg",
        desc: "Central Cableada / Inalámbrica, 6 zonas + 1 en teclado, expandible a 8, 2 particiones."
    },
    {
        id: 3,
        nombre: "A2K8-NGRF/PC860",
        categoria: "Paneles y Teclados",
        stock: 65,
        precio: 17000,
        img: "./images/Paneles y teclados/A2K8-pc-860.jpg",
        desc: "Central Cableada con teclado, de 8 zonas expandibles a 32 y 4 particiones."
    },
    {
        id: 4,
        nombre: "G-LED732",
        categoria: "Paneles y Teclados",
        stock: 65,
        precio: 7000,
        img: "./images/Paneles y teclados/G-LED732.jpg",
        desc: "Teclado Led 8 zonas compatible con paneles de alarma Garnet."
    },
    {
        id: 5,
        nombre: "G-LCD732",
        categoria: "Paneles y Teclados",
        stock: 65,
        precio: 7500,
        img: "./images/Paneles y teclados/G-LCD732.jpg",
        desc: "Teclado con display LCD compatible con paneles de alarma Garnet."
    },
    {
        id: 6,
        nombre: "G-LCD732RF",
        categoria: "Paneles y Teclados",
        stock: 63,
        precio: 8000,
        img: "./images/Paneles y teclados/G-LED732.jpg",
        desc: "Teclado con display LCD y receptor RF, compatible con paneles de alarma Garnet."
    },
    {
        id: 7,
        nombre: "3G-COM-G",
        categoria: "Comunicadores",
        stock: 65,
        precio: 4000,
        img: "./images/comunicadores/3G-COM-G.jpg",
        desc: "Comunicador para paneles línea Garnet WiFi/3G."
    },
    {
        id: 8,
        nombre: "IP-500G",
        categoria: "Comunicadores",
        stock: 45,
        precio: 6000,
        img: "./images/comunicadores/IP-500G.jpg",
        desc: "Comunicador IP WiFi para paneles línea Garnet."
    },
    {
        id: 9,
        nombre: "COM-900",
        categoria: "Comunicadores",
        stock: 55,
        precio: 5500,
        img: "./images/comunicadores/com-900.jpg",
        desc: "Modulo Comunicador 3G para PC-900."
    },
    {
        id: 10,
        nombre: "IR-1000D",
        categoria: "Sensores",
        stock: 100,
        precio: 3000,
        img: "./images/Sensores/IR-1000.jpg",
        desc: "Detector doble infrarrojo para exteriores, cableado."
    },
    {
        id: 11,
        nombre: "IR-800",
        categoria: "Sensores",
        stock: 100,
        precio: 3500,
        img: "./images/Sensores/IR-808.jpg",
        desc: "Detector infrarrojo de interior. Inmunidad a mascotas 18Kg."
    },
    {
        id: 12,
        nombre: "DGW-500",
        categoria: "Sensores",
        stock: 100,
        precio: 4500,
        img: "./images/Sensores/DGW-500.jpg",
        desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico."
    },
    {
        id: 13,
        nombre: "DGW-500-PET",
        categoria: "Sensores",
        stock: 100,
        precio: 5000,
        img: "./images/Sensores/DGB-2-PET.jpg",
        desc: "Digi Wireless. Detector infrarrojo pasivo digital inalámbrico. Inmunidad a mascotas 18kg."
    },
    {
        id: 14,
        nombre: "MP-300",
        categoria: "Sirenas",
        stock: 100,
        "precio": 5000,
        img: "./images/Sirenas/MP-300.jpg",
        desc: "Sirena Exterior magnetodinámica con Flash."
    },
    {
        id: 15,
        nombre: "MP-150",
        categoria: "Sirenas",
        stock: 100,
        "precio": 4000,
        img: "./images/Sirenas/MP-150.jpg",
        desc: "Sirena Exterior magnetodinámica."
    },
    {
        id: 16,
        nombre: "MP-200",
        categoria: "Sirenas",
        stock: 100,
        precio: 4200,
        img: "./images/Sirenas/MP-200.jpg",
        desc: "Sirena Exterior doble Piezoeléctrica."        
    }
];

export default productos
import React from 'react'
import { NavLink } from "react-router-dom";
import panytec from "../assets/images/Paneles-y-Teclados.png";
import comu from "../assets/images/Comunicadores.png";
import senso from "../assets/images/Sensores-Cableados.png";
import sire from "../assets/images/Sirenas.png";
import "../views/Styles/home.css";


export default function SelectorInicio () {
    
    const categorias = [
    {   id: "panytec",
        link: "/categorias/Paneles y Teclados",
        titulo: "Paneles y Teclados",
        idImagen: "idpaneles",
        linkImagen: panytec,
    },
    {   id: "comu",
        link: "/categorias/Comunicadores",
        titulo: "Comunicadores",
        idImagen: "idcomunicadores",
        linkImagen: comu,
    },
    {   id: "senso",
        link: "/categorias/Sensores",
        titulo: "Sensores",
        idImagen: "idsensores",
        linkImagen: senso,
    },
    {   id: "sire",
        link: "/categorias/Sirenas",
        titulo: "Sirenas",
        idImagen: "idsirenas",
        linkImagen: sire,
    }
] 

    return (
        <div>            
            {categorias.map((e) => (
                <div key={e.id} id={e.id} className="container-fluid p-3 text-center col-lg-6 col-sm-12 ">
                    <NavLink to={e.link}>
                        <button className="btn-lg btn btn-outline-primary btn-primary-outline-success" type="button">{e.titulo}</button>
                    </NavLink>
                    <img className='img-fluid' id={e.idImagen} src={e.linkImagen} alt={e.titulo}></img>
                </div>
            ))}            
        </div>
    )
}


import React from 'react'
import { NavLink } from "react-router-dom";
import panytec from "../assets/images/Paneles-y-Teclados.png";
import comu from "../assets/images/Comunicadores.png";
import senso from "../assets/images/Sensores-Cableados.png";
import sire from "../assets/images/Sirenas.png";


export default function SelectorInicio () {
    
    const categorias = [
    {   id: "panytec",
        link: "/categorias/:paneles",
        titulo: "Paneles y Teclados",
        idImagen: "idpaneles",
        linkImagen: panytec,
    },
    {   id: "comu",
        link: "/categorias/:comunicadores",
        titulo: "Comunicadores",
        idImagen: "idcomunicadores",
        linkImagen: comu,
    },
    {   id: "senso",
        link: "/categorias/:sensores",
        titulo: "Sensores",
        idImagen: "idsensores",
        linkImagen: senso,
    },
    {   id: "sire",
        link: "/categorias/:sirenas",
        titulo: "Sirenas",
        idImagen: "idsirenas",
        linkImagen: sire,
    }
] 

    return (
        <div>            
            {categorias.map((inicio) => (
                <div id={inicio.id} className="container-fluid p-3 text-center col-lg-6 col-sm-12 ">
                    <NavLink to={inicio.link}>
                        <button className="btn-lg btn btn-outline-primary btn-primary-outline-success" type="button">{inicio.titulo}</button>
                    </NavLink>
                    <img id={inicio.idImagen} src={inicio.linkImagen} alt=""></img>
                </div>
            ))}            
        </div>
    )
}


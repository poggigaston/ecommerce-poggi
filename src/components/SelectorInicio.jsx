import React from 'react'
import { NavLink } from "react-router-dom";

export const SelectorInicio = () => {
    
    const inicio = [
    {   id: "panytec",
        link: "html/panelesyteclado.html",
        titulo: "Paneles y Teclados",
        idImagen: "idpaneles",
        linkImagen: "images/Paneles-y-Teclados.png",
    },
    {   id: "comu",
        link: "html/comunicadores.html",
        titulo: "Comunicadores",
        idImagen: "idcomunicadores",
        linkImagen: "images/Comunicadores.png",
    },
    {   id: "senso",
        link: "html/sensores.html",
        titulo: "Sensores",
        idImagen: "idsensores",
        linkImagen: "images/Sensores-Cableados.png",
    },
    {   id: "sire",
        link: "html/sirenas.html",
        titulo: "Sirenas",
        idImagen: "idsirenas",
        linkImagen: "images/Sirenas.png",
    }
] 


    return (
        <div>
            <div id={inicio.id} className="container-fluid p-3 text-center col-lg-6 col-sm-12 ">
                <NavLink href={inicio.link}>
                <button className="btn-lg btn btn-outline-primary btn-primary-outline-success" type="button">{inicio.titulo}</button>
                </NavLink>
                <img id={inicio.idImagen} src={LinkImagen[0]} alt=""></img>
            </div>
        </div>
    )
}


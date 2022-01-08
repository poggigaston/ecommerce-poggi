import React from 'react';
import Carrousel  from '../components/Carrousel';
import  SelectorInicio from '../components/SelectorInicio';
import './Styles/home.css';


export default function Home() {
    return (
        <div>        
            <div id="letras" className="container-fluid" ><h3>Dale a tu casa <br></br> la seguridad que <br></br>tu familia necesita </h3></div>
            <Carrousel />
            <SelectorInicio  />            
        </div>
    )}


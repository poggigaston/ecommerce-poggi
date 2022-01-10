import React from 'react';
import './Styles/contacto.css';

const Contacto = () => {
    return (
        <div className='container-fluid card1'>
            <div className='container-fluid card contenedorCon'>             
            <div className="mb-2 p-4 "><h2>Contacto</h2>
                <label for="emailAddress" className="form-label m-2">Correo Electronico</label>
                <input type="email" className="form-control" id="miForm" placeholder="ejemplo@ejemplo.com" required></input>
                <span id="emailOK"></span>
            </div>
            
            <div className="mb-2 p-4">
                <label for="FormControl" className="form-label">Deje su comentario</label>
                <textarea className="form-control" id="miForm2" rows="8"></textarea>
            </div>
            <div className="container-fluid text-center">
                <button className="btn-lg btn btn-outline-primary btn-primary-outline-success" type="reset" onclick="location.reload()">Enviar</button>
            </div>
        </div>
        </div>
           
    )
}

export default Contacto

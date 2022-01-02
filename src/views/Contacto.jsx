import React from 'react';
import './contacto.css';

const Contacto = () => {
    return (
        <div class='contenedorCon'>
            <div className='container'>             
            <div className="mb-2 p-4 emailBox">
                <label for="emailAddress" className="form-label">Correo Electronico (Se pondra de color verde si es valido)</label>
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

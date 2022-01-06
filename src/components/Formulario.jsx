import React from 'react'
import './formulario.css'

const Formulario = () => {
    return (
        <div className='formulario'><h3>Datos del Comprador</h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="nombre" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingrese su nombre"></input>
                    <label for="exampleInputEmail1">Apellido</label>
                    <input type="apellido" className="form-control" id="apellido" aria-describedby="emailHelp" placeholder="Ingrese su apellido"></input>
                    <label for="exampleInputEmail1">Telefono</label>
                    <input type="telefono" className="form-control" id="telefono" aria-describedby="emailHelp" placeholder="Ingrese su telefono"></input>
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese su email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                                
                <button type="submit" className="btn btn-primary">Terminar</button>
            </form>            
        </div>
    )
}

export default Formulario

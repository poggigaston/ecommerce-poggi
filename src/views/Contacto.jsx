import React, {useState} from 'react';
import './Styles/contacto.css';
import Swal from 'sweetalert2';
import db from "../service"
import { collection, addDoc } from "firebase/firestore";

const Contacto = () => {
    const [error, setError] = useState({});        
    const [formulario, setFormulario] = useState({        
        email: "",
        descripcion: ""        
    })
    
    const { email, descripcion  } = formulario

    const validar = (campos) => {
        let invalido = false;
        campos.map((campo) => campo === "" ? invalido = true : invalido = false);
        return invalido;
    };

    const onSubmit = (e) => {    
        if (validar([email, descripcion])) {
            Swal.fire({
                title: "Oops!",
                text: "Faltan campos por completar",
                icon: "error"
            });
        } else {            
            Swal.fire({
            title: "Espera!",
            text: "Tu solucitud esta en proceso",
            icon: "info"
            });
            generarTicket(formulario, "contactos");
        }
    }

    const generarTicket = async (e, nombre) => {
        try {
            const orden = await addDoc(collection(db, nombre), e);           
            Swal.fire({
                title: "Muy bien!",
                text: "Su consulta se genero con exito con el codigo: " + (orden.id),
                icon: "success"
            });           
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario, [name]: value           
        });
    };

    const handleBlur = (e) => {
        const { value, name } = e.target;
        if (value === "") {
            setError({ ...error, [name]: "Este campo es obligatorio" });
            return;
        }
        setError({});
    };

    return (
        <div className='container-fluid card1'>
            <div className='container-fluid card contenedorCon'>             
            <div className="mb-2 p-2 "><h2 className='text-center'>Contacto</h2>
                <label for="emailAddress" className="form-label m-0">Email</label>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e)}
                        className="form-control"
                        placeholder="ejemplo@ejemplo.com"
                        required                   
                    />                
            </div>
            
            <div className="mb-2 p-4">
                <label for="FormControl" className="form-label m-0">Deje su comentario</label>
                    <textarea
                        type="text"
                        name='descripcion'
                        value={descripcion}
                        onChange={handleChange}
                        onBlur={(e) => handleBlur(e)}
                        className="form-control"                      
                        rows="8"
                    />
            </div>
            <div className="container-fluid text-center">
                <button className="btn-lg btn btn-outline-primary btn-primary-outline-success" type="reset" onClick={() => onSubmit() }>Enviar</button>
            </div>
        </div>
        </div>
           
    )
}

export default Contacto

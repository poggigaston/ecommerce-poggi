import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import './Styles/formulario.css'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import db from "../service"
import { collection, addDoc, updateDoc, doc, docRef, documentId } from "firebase/firestore";



const Formulario = ({total, compra}) => {

    const carritoContext = useContext(CarritoContext)
    const { vaciarCarrito } = carritoContext
    const [orderId, setOrderId] = ("")
    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
        },
        total: total,
        items: compra
    })

    const [error, setError] = useState({})
    
    const { buyer: { nombre, apellido, telefono, email } } = formulario;
    
    const validar = (campos) => {
        let invalido = false;
        campos.map((campo) => campo === "" ? invalido = true : invalido = false)
        return invalido
    }
    
    const onSubmit = (e) => {
        e.preventDefault()        
        if (validar([nombre, apellido, telefono, email])) {
            Swal.fire({
                title: "Oops!",
                text: "Faltan campos por completar",
                icon:"error"
            })    
        }
        Swal.fire({
            title: "Genial",
            text: "Su orden de compra se genero con exito",
            icon: "success"
        });
        vaciarCarrito()    
        generarTicket(formulario)
        console.log(formulario);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {...formulario.buyer,
                [name]:value}
        })
    }

    const handleBlur = (e) => {
        const { value, name } = e.target;
        if (value === "") {
            setError({ ...error, [name]: "Este campo es obligatorio" })
            return;
        }
        setError({})
    }  
    
    const generarTicket = async ( formulario) => {
        try {    
            const col = collection(db, "ordenes")
            await addDoc(col, formulario);    
        } catch (error) {
            console.log(error);
        }
    }
    
    const actualizarItem = async (id) => {
        const ordenDoc = doc(db, "items", id);
        try {
            await updateDoc(ordenDoc, { stock: 16 });
            console.log("se actualiza correctamente");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='formulario justify-content-center align-self-center'><h3>Datos del Comprador</h3>
            <form onSubmit={onSubmit} >
                <div className="form-group" id="form">
                    <div>
                        <label for="exampleInputEmail1">Nombre</label>
                        <input
                            type="text"
                            className={`form-control ${error.nombre && "is-invalid"}`}
                            name='nombre'
                            value={nombre}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur(e)}
                            placeholder="Ingrese su nombre"
                        />
                        {error.nombre && <h6 className='text-danger'>{error.nombre}</h6>}                    
                        <label for="exampleInputEmail1">Apellido</label>
                        <input
                            type="text"
                            className={`form-control ${error.apellido && "is-invalid"}`}
                            name="apellido"
                            value={apellido}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur(e)}
                            placeholder="Ingrese su apellido"
                        />
                        {error.apellido && <h6 className='text-danger'>{error.apellido}</h6>}                    
                        <label for="exampleInputEmail1">Telefono</label>
                        <input
                            type="numero"
                            className={`form-control ${error.telefono && "is-invalid"}`}
                            name="telefono"
                            value={telefono}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur(e)}
                            placeholder="Ej. 1157668899"
                        />
                        {error.telefono && <h6 className='text-danger'>{error.telefono}</h6>}                    
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className={`form-control ${error.email && "is-invalid"}`}
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur={(e) => handleBlur(e)}
                            placeholder="Ejemplo@mail.com"
                        />
                        {error.email && <h6 className='text-danger'>{error.email}</h6>}
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>                            
                <button type="submit" className="btn btn-primary">Terminar Compra</button>
                <NavLink to="/productos"><button type="button" className="btn btn-secondary m-3">Seguir Comprando</button></NavLink>
                <button type="button" className="btn btn-danger m-3" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
            </form>            
        </div>
    )
}

export default Formulario
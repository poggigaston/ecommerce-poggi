import React, { useContext, useState} from 'react'
import { CarritoContext } from '../context/CarritoProvider'
import './Styles/formulario.css'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import db from "../service"
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";


function Formulario({ total, compra }) {

    const carrito2 = compra.map((prod) => {
            return {
                nombre: prod.nombre,
                descripcion: prod.descripcion,
                id: prod.id,
                cantidad: prod.cantidad,
                precio: prod.precio
            };
        });

    const carritoContext = useContext(CarritoContext);
    const { vaciarCarrito } = carritoContext;
    const [error, setError] = useState({});
    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
        },
        total: total,
        items: carrito2
    });

    const { buyer: { nombre, apellido, telefono, email } } = formulario;

    const validar = (campos) => {
        let invalido = false;
        campos.map((campo) => campo === "" ? invalido = true : invalido = false);
        return invalido;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (validar([email, nombre, apellido, telefono])) {
            Swal.fire({
                title: "Oops!",
                text: "Faltan campos por completar",
                icon: "error"
            });
        } else {
            Swal.fire({
                title: "Espera!",
                text: "Tu solucitud esta en proceso",
                timer: 2000,
                icon: "info",
                timerProgressBar: true,
            });
            actualizarItem()
            generarTicket(formulario, "ordenes");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            }
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

    // FINALIZO LA COMPRA ENVIANDO A LA API DE MP A PAGAR 
    
    const finalizarCompra = async () => {
        const productoMp = compra.map((prod) => {
            return {
                title: prod.nombre,
                description: prod.descripcion,
                picture_url: "",
                category_id: prod.id,
                quantity: prod.cantidad,
                currency_id: "ARS",
                unit_price: prod.precio
            };
        });
        const resp = await fetch(`https://api.mercadopago.com/checkout/preferences`, {
            method: `POST`,
            headers: {
                Authorization: `Bearer TEST-1798136906201393-092723-253789fa0237b6302f09005006f4296a-86270132`,
            },
            body: JSON.stringify({
                items: productoMp
            })
        });
        const data = await resp.json();
        window.open(data.init_point);
    };

    // GENERO ORDEN Y MUESTRO NUMERO DE ORDEN 

    const generarTicket = async (e, nombre) => {
        try {
            const orden = await addDoc(collection(db, nombre), e);
            Swal.fire({
                title: "Genial",
                text: "Su orden de compra se genero con exito con el codigo: " + (orden.id),
                icon: "success",
                allowEscapeKey: false,
                allowOutsideClick: false,
                confirmButtonText: 'Pagar con Mercado Pago'
            }).then((result) => {
                if (result.isConfirmed) {
                    finalizarCompra();
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    alert("a pagar con ticket");
                }
            });
            vaciarCarrito();
        } catch (error) {
            console.log(error);
        }
    };

//    ACTUALIZO EL STOCK DE LOS ITEMS
    
    const actualizarItem = function () { 
        compra.map(async (prod) => {
            const ordenDoc = doc(db, "items", prod.id);
            try {
                await updateDoc(ordenDoc, { stock: prod.stock - prod.cantidad });
                console.log("se actualiza correctamente");
            } catch (error) {
                console.log(error);
            }    
        });
    };

    return (    
        <div className='formulario justify-content-center align-self-center border bg-light'><h3>Datos del Comprador</h3>
             <form onSubmit={onSubmit} >
                    <div className="form-group" id="form">
                        <div>
                            <label>Nombre</label>
                            <input
                                type="nombre"
                                className={`form-control ${error.nombre && "is-invalid"}`}
                                name='nombre'
                                value={nombre}
                                onChange={handleChange}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Ingrese su nombre"
                            />
                            {error.nombre && <h6 className='text-danger'>{error.nombre}</h6>}
                            <label>Apellido</label>
                            <input
                                type="apellido"
                                className={`form-control ${error.apellido && "is-invalid"}`}
                                name="apellido"
                                value={apellido}
                                onChange={handleChange}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Ingrese su apellido"
                            />
                            {error.apellido && <h6 className='text-danger'>{error.apellido}</h6>}
                            <label>Telefono</label>
                            <input
                                type="telefono"
                                className={`form-control ${error.telefono && "is-invalid"}`}
                                name="telefono"
                                value={telefono}
                                onChange={handleChange}
                                onBlur={(e) => handleBlur(e)}
                                placeholder="Ej. 1157668899"
                            />
                            {error.telefono && <h6 className='text-danger'>{error.telefono}</h6>}
                            <label>Email</label>
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
                            <small id="emailHelp" className="form-text text-muted mb-2">Nunca seran compartido estos datos.</small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary ">Terminar Compra</button>
                    <NavLink to="/productos"><button type="button" className="btn btn-secondary m-3 ">Seguir Comprando</button></NavLink>
                    <button type="button" className="btn btn-danger m-1" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>                
            </form>
        </div>
    )
}

export default Formulario
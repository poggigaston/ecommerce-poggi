import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
            <div className="container-fluid d-flex justify-content-between">
                <NavLink className="navbar-brand mb-0 h3" to="/" >ALARMHOME</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/productos" className="nav-link" aria-current="page">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/categorias" className="nav-link" >Categorias</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nosotros" className="nav-link" >La Empresa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link" >Contacto</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default NavBar 
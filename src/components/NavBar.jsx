import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand mb-0 h3" to="/" >ALARMHOME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/productos" className="nav-link up" aria-current="page">Productos</Link></li>
                            <li className="nav-item dropdown">
                                <Link to="/categorias" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Categorias</Link>                            
                                <ul className="dropdown-menu">
                                    <li><Link to={`/categorias/${"Paneles y Teclados"}`} className="dropdown-item">Paneles y Teclados</Link></li>
                                    <li><Link to={`/categorias/${"Comunicadores"}`} className="dropdown-item">Comunicadores</Link></li>
                                    <li><Link to={`/categorias/${"Sensores"}`} className="dropdown-item">Sensores</Link></li>
                                    <li><Link to={`/categorias/${"Sirenas"}`} className="dropdown-item">Sirenas</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link to="/nosotros" className="nav-link" >La Empresa</Link></li>
                            <li className="nav-item"><Link to="/contacto" className="nav-link" >Contacto</Link></li>
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>    
    );
}

export default NavBar 
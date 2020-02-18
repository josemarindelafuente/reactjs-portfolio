import React from 'react';
import { Link } from 'react-router-dom';
import logoHome from '../../../assets/logo-white.png';
import './MenuTop.scss';

const MenuTop = () => {
    return ( 
        <div>
            
            
<nav className="navbar navbar-expand-lg navbar-dark navbar_degrade">

    <div className="container">

    <Link to={"/"} className="navbar-brand">
    <img src={logoHome} width="250" heigth="44" alt="Jose Marin de la Fuente" />
    </Link>   

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

        <li className="nav-item active">
            <Link to={"/"} className="nav-link">Inicio</Link>
        </li>

        <li className="nav-item">
            <Link to={"/blog"} className="nav-link">Blog</Link>
        </li>

        <li className="nav-item">
            <Link to={"/tickets"} className="nav-link">Tickets</Link>
        </li>

        <li className="nav-item">
            <Link to={"/admin"} className="nav-link">Admin</Link>
        </li>

        <li className="nav-item">
            <Link to={"/contact"} className="nav-link">Contacto</Link>
        </li>

        </ul>
    </div>
    </div>

</nav>


        </div>
     );
}
 
export default MenuTop;
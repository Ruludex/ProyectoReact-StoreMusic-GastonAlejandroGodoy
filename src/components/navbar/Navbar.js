import React from 'react';
import { Link } from 'react-router-dom';
import CardWidget from '../cardwdget/CardWidget';
import logo from "../../asset/favicon.png"
import './Style.css';

const Navbar = () => {
  return (
    <header className="navbar-header-fixed">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <img src={logo} alt="logo"/>
          <Link className="Logo p-2 bd-highlight" to={"/inicio"}>Music Store</ Link>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul  className="navbar-nav">
              <li className='nav-item'>
                <Link className="nav-link" aria-current="page" to="/inicio">Inicio</Link>
              </li> 
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Genero</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/genero/rock">Rock</Link></li>
                  <li><Link className="dropdown-item" to="/genero/pop">Pop</Link></li>
                  <li><Link className="dropdown-item" to="/genero/hip-hop">Hip-Hop</Link></li>
                  <li><Link className="dropdown-item" to="/genero/regueton">Regueton</Link></li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className="nav-link" aria-current="page" to="/Contact">Contacto</Link>
              </li> 
            </ul>
          </div>
          <CardWidget/>
        </div>
      </nav>
    </header>
    ) 
}

export default Navbar

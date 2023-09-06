import React from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          D-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link to="/categoria/accesorios" className="nav-link text-white">Accesorios</Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/coleccionables" className="nav-link text-white">Coleccionables</Link>             
            </li>
            <li className="nav-item">
            <Link to="/categoria/vestimentas" className="nav-link text-white">Vestimentas</Link>
                Vestimentas  
            </li>
            <li className="nav-item">
            <Link to="/categoria/nosotros" className="nav-link text-white">Nosotros</Link>
            </li>
          </ul>
          <span className="navbar-text ">
            <a className="nav-link text-white" href="/">
              <CartWidget />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

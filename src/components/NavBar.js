import React from "react"
import CarritoWidget from "./CarritoWidget"
const Navbar = () => { 
    return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">D-Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
         <a className="nav-link" href="./paginas/accesorios.js">Accesorios</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="./paginas/coleccionables.js">Coleccionables</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./paginas/vestimentas.js">Vestimentas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./paginas/nosotros.js">Nosotros</a>
      </li>
      </ul>
      <span className="navbar-text">
      <a className="nav-link" href="/"><CarritoWidget/> </a>
      </span>
    </div>
  </div>
</nav>
    </>
    
    )
}
export default Navbar
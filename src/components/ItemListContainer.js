import React from "react"
const productos = [
    {
      "nombre": "Remera Strand",
      "precio": 24.99,
      "imagen": "img/atadura_tshirt.jpg"
    },
    {
      "nombre": "Muñeco Vagabundo",
      "precio": 15.99,
      "imagen": "img/vagabundo.jpg"
    },
    {
      "nombre": "Peluche Perro Exo",
      "precio": 21.99,
      "imagen": "img/pelucheexo.jpg"
    },
    {
      "nombre": "Muñeco De Cayde",
      "precio": 18.99,
      "imagen": "img/muñecoCayde.jpg"
    },
    {
      "nombre": "Peluche De Sirviente",
      "precio": 19.99,
      "imagen": "img/peluchedesirviente.jpg"
    },
    {
      "nombre": "Muñeco De Shaxx",
      "precio": 19.99,
      "imagen": "img/shaxx.jpg"
    },
    {
      "nombre": "Casco De Halcon",
      "precio": 55,
      "imagen": "img/cascohalcon.jpg"
    },
    {
      "nombre": "Collar De Cazador",
      "precio": 9.99,
      "imagen": "img/collarcazador.jpg"
    },
    {
      "nombre": "Collar Gjarllarhorn",
      "precio": 35,
      "imagen": "img/collargjallarhorn.jpg"
    },
    {
      "nombre": "Remera Eclipse",
      "precio": 30,
      "imagen": "img/remeralightfall.jpg"
    },
    {
      "nombre": "Campera Cazador",
      "precio": 55,
      "imagen": "img/camperacazador.jpg"
    },
    {
      "nombre": "Estatua Hechicero",
      "precio": 49.99,
      "imagen": "img/estatua.jpg"
    }
  ]
const ItemListContainer = () => {
  return (
    <div>
      <h2>¡Destacado Del Dia!</h2>
      <div className="productos-container">
        {props.productos.map((producto) => (
          <div key={producto.id} className="producto">
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <button>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

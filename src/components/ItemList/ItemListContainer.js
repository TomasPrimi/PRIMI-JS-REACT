import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { Link } from 'react-router-dom';
import CartContext, { CartProvider, useCart } from '../cart/CartContext';


export const products= [
    {
      "nombre": "Remera Strand",
      "precio": 24.99,
      "imagen": "img/atadura_tshirt.jpg",
      "categoria":"vestimentas",
      "id":1
    },
    {
      "nombre": "Muñeco Vagabundo",
      "precio": 15.99,
      "imagen": "img/vagabundo.jpg",
      "categoria":"coleccionables",
      "id":2
    },
    {
      "nombre": "Peluche Perro Exo",
      "precio": 21.99,
      "imagen": "img/pelucheexo.jpg",
      "categoria":"coleccionables",
      "id":3
    },
    {
      "nombre": "Muñeco De Cayde",
      "precio": 18.99,
      "imagen": "img/muñecoCayde.jpg",
      "categoria":"coleccionables",
      "id":4
    },
    {
      "nombre": "Peluche De Sirviente",
      "precio": 19.99,
      "imagen": "img/peluchedesirviente.jpg",
      "categoria":"coleccionables",
      "id":5
    },
    {
      "nombre": "Muñeco De Shaxx",
      "precio": 19.99,
      "imagen": "img/shaxx.jpg",
      "categoria":"coleccionables",
      "id":6
    },
    {
      "nombre": "Casco De Halcon",
      "precio": 55,
      "imagen": "img/cascohalcon.jpg",
      "categoria":"coleccionables",
      "id":7
    },
    {
      "nombre": "Collar De Cazador",
      "precio": 9.99,
      "imagen": "img/collarcazador.jpg",
      "categoria":"accesorios",
      "id":8
    },
    {
      "nombre": "Collar Gjarllarhorn",
      "precio": 35,
      "imagen": "img/collargjallarhorn.jpg",
      "categoria":"accesorios",
      "id":9
    },
    {
      "nombre": "Remera Eclipse",
      "precio": 30,
      "imagen": "img/remeralightfall.jpg",
      "categoria":"vestimentas",
      "id":10
    },
    {
      "nombre": "Campera Cazador",
      "precio": 55,
      "imagen": "img/camperacazador.jpg",
      "categoria":"vestimentas",
      "id":11
    },
    {
      "nombre": "Estatua Hechicero",
      "precio": 49.99,
      "imagen": "img/estatua.jpg",
      "categoria":"coleccionables",
      "id":12
    }
  ]

  const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const getProducts = async () => {
        const filteredProducts = id
          ? products.filter((product) => product.categoria === id)
          : products;
  
        setItems(filteredProducts);
      };
  
      getProducts();
    }, [id]);
    const { addToCart } = useCart();

    const handleClick = () => {
      addToCart(products);
    };
  

    return (
      <div>
        <h2>¡Destacado Del Dia!</h2>
        <div className="products-container">
          {items.map((products) => (
            <div key={products.id} className="product">
              <h3>{products.nombre}</h3>
              <img src={products.imagen} alt={products.nombre} />
              <p>Precio: ${products.precio}</p>
              <Link to={`/detail/${products.id}`}>Ver detalle del Producto</Link>
              <button onClick={handleClick}> Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default ItemListContainer;


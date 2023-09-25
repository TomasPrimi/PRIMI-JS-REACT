import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


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
    const { addItem } = useCart(); 
  
    useEffect(() => {
      const getProducts = async () => {
        const filteredProducts = id
          ? products.filter((product) => product.categoria === id)
          : products;
  
        setItems(filteredProducts);
      };
  
      getProducts();
    }, [id]);
  
    const handleAddToCart = (product) => {
      addItem({ ...product, id: product.id }, 1);
    };
  
    return (
      <div>
        <h2>¡Destacado Del Dia!</h2>
        <div className="products-container">
          {items.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.nombre}</h3>
              <img src={product.imagen} alt={product.nombre} />
              <p>Precio: ${product.precio}</p>
              <Link to={`/detail/${product.id}`}>Ver detalle del Producto</Link>
              <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ItemListContainer;
  
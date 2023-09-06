import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.nombre}</h1>
        <h2 className="priceTag">$ {product.precio}</h2>
        <small>{product.editorial}</small>
      </div>
      <Link to="/">Volver a la lista de productos</Link>
    </div>
  );
};

export default ItemDetail;

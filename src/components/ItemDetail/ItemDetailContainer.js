import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../ItemList/ItemListContainer";
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id === parseInt(id, 10));

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={`${process.env.PUBLIC_URL}/${selectedProduct.imagen}`} alt={selectedProduct.nombre} />
      </div>
      <div className="card-detail_detail">
        <h1>{selectedProduct.nombre}</h1>
        <h2 className="priceTag">$ {selectedProduct.precio}</h2>
        <small>{selectedProduct.editorial}</small>
      </div>
      <Link to="/">Volver a la lista de productos</Link>
    </div>
  );
}

export default ItemDetailContainer;

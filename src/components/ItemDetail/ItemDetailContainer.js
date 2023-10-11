import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { products } from "../ItemList/ItemListContainer";
import "./ItemDetailContainer.css"
import { useCart, removeItem } from '../context/CartContext';


function ItemDetailContainer() {
  const { id } = useParams();
  const { addItem, removeItem, getCountInCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id, 10));
    if (product) {
      setSelectedProduct(product);
      setQuantity(getCountInCart());
    }
  }, [id, getCountInCart]);

  const handleAdd = () => {
    if (selectedProduct) {
      addItem({ ...selectedProduct, id: selectedProduct.id }, 1);
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleRemove = () => {
    if (selectedProduct && quantity > 0) {
      removeItem(selectedProduct.id, 1);
      setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    }
  };

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
      <div className="quantity-container">
        <button onClick={handleRemove} disabled={quantity === 0}>-</button>
        <div className="quantity">{quantity}</div>
        <button onClick={handleAdd}>+</button>
      </div>
      <Link to="/">Volver a la lista de productos</Link>
    </div>
  );
}

export default ItemDetailContainer;

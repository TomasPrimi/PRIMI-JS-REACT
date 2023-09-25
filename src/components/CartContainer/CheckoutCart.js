import React, { useState, useEffect } from "react";
import { products } from "../ItemList/ItemListContainer";

function CheckoutCart({ cartIds, total }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartIds) {
      const cartItemsData = products.filter((product) => cartIds.includes(product.id));
      setCartItems(cartItemsData);
    }
  }, [cartIds]);
  

  return (
    <div>
      <h2>Resumen del Pedido</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <div className="item-details">
              <img
                src={item.imagen} 
                alt={item.nombre}
                className="item-image"
              />
              <div>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: 1</p> 
              </div>
            </div>
            <p>Subtotal: ${item.precio}</p> 
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

export default CheckoutCart;

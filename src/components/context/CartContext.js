import React, { createContext, useState, useContext } from "react";

const CartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product, count) {
    const newCart = [...cart];

    if (isInCart(product.id)) {
      let index = cart.findIndex((productInCart) => productInCart.id === product.id);
      newCart[index].count = newCart[index].count + count;
    } else {
      newCart.push({ ...product, count });
    }
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  const removeItem = (productId, count) => {
    const newCart = cart.map((product) => {
      if (product.id === productId) {
        const newCount = Math.max(product.count - count, 0); 
        return { ...product, count: newCount };
      }
      return product;
    });

    setCart(newCart);
  };

  function getCountInCart() {
    return cart.reduce((accum, item) => accum + item.count, 0);
  }

  function getPriceInCart() {
    const total = cart.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.precio * currentProduct.count;
    }, 0);
    return total.toFixed(2);
  }

  function isInCart(id) {
    return cart.some((product) => product.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        removeItem,
        getCountInCart,
        getPriceInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartContextProvider");
  }
  return context;
}

export default CartContext;

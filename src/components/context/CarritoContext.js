import { createContext, useState, useContext } from "react";

const CarritoContext = createContext();

export function CarritoContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function addItem(product, count) {
    const newCarrito = [...carrito];

    if (isInCarrito(product.id)) {
      let index = carrito.findIndex((productInCarrito) => productInCarrito.id === product.id);
      newCarrito[index].count = newCarrito[index].count + count;
    } else {
      newCarrito.push({ ...product, count });
    }
    setCarrito(newCarrito);
  }

  function clearCarrito() {
    setCarrito([]);
  }

  const removeItemFromCarrito = (productId) => {
    const newCarrito = carrito.filter((product) => product.id !== productId);
    setCarrito(newCarrito);
  };

  function getCountInCarrito() {
    return carrito.reduce((accum, item) => accum + item.count, 0);
  }

  function getPriceInCarrito() {
    const total = carrito.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.precio * currentProduct.count;
    }, 0);
    return total.toFixed(2);
  }

  function isInCarrito(id) {
    return carrito.some((product) => product.id === id);
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addItem,
        clearCarrito,
        removeItemFromCarrito,
        getCountInCarrito,
        getPriceInCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe ser usado dentro de un CarritoContextProvider");
  }
  return context;
}

export default CarritoContext;

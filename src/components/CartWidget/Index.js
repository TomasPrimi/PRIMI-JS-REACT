import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./styles.css";
import { useCarrito } from "../context/CarritoContext";

function CarritoWidget() {
  const { getCountInCarrito } = useCarrito();

  const carritoCount = getCountInCarrito();

  return (
    <span className="cart-widget nav">
      <BsFillCartFill className="icon" />
      <span className="badge nav">{carritoCount}</span>
    </span>
  );
}

export default CarritoWidget;

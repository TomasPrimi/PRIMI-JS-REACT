import { BsFillCartFill } from "react-icons/bs";
import "./styles.css";
import { useContext } from "react";
import carritoContext from "../context/CarritoContext";
import getCountInCarrito from "../context/CarritoContext"

function CarritoWidget() {
  const { carrito, getCountInCarrito } = useContext(carritoContext);

  const carritoCount = getCountInCarrito();
  return (
    <span className="cart-widget nav">
      <BsFillCartFill className="icon" />
      <span className="badge nav">{carritoCount}</span>
    </span>
  );
}

export default CarritoWidget;
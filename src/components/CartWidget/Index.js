import { BsFillCartFill } from "react-icons/bs";
import "./styles.css";
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { getCountInCart } = useCart(); 

  const cartCount = getCountInCart();

  return (
    <span className="cart-widget nav">
      <BsFillCartFill className="icon" />
      <span className="badge nav">{cartCount}</span>
    </span>
  );
}

export default CartWidget;

import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cartItems } = useCart();

  return (
    <>
      <span>{cartItems.length}</span>
      <BsFillCartFill className="icon" />
    </>
  );
};

export default CartWidget;
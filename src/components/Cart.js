import React from "react";

const Cart = ({ numberOfItems }) => {
  return (
    <div className="cart-preview-corner">
      <span>Cart</span>
      <span className="cart-preview-number">{numberOfItems}</span>
    </div>
  );
};

export default Cart;

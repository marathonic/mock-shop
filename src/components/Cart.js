import React from "react";

const Cart = ({ numberOfItems, itemsInCart }) => {
  const countAllItems = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  return (
    <div className="cart-preview-corner">
      <span>Cart</span>
      {/* <span className="cart-preview-number">{numberOfItems}</span> */}
      {/* Where are we actually placing Cart.js in the DOM??? */}
      {/* Find out, and from there, pass itemsInCart as a prop, or maybe pass the whole function from there, let's see */}
      <span className="cart-preview-number">{countAllItems(itemsInCart)}</span>
    </div>
  );
};

export default Cart;

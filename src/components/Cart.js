import React from "react";
import countAllItems from "./helper-functions/countAllItems";

const Cart = ({ numberOfItems, itemsInCart }) => {
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

import React from "react";
import { nanoid } from "nanoid";

const CartSection = ({ inCart }) => {
  const styles = {
    display: "flex",
    color: "red",
    fontWeight: "bold",
  };
  const allItems = inCart.map((itemObj) => {
    return (
      <article className="cart-section-item" key={nanoid()}>
        <img src={itemObj.image} alt={itemObj.name} />
        <span className="cart-section-item-name">{itemObj.name}</span>
      </article>
    );
  });

  return (
    <div className="cart-section">
      <div>Cart Section</div>
      <div>{allItems}</div>
    </div>
  );
};

export default CartSection;

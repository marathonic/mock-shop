import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import countAllItems from "./helper-functions/countAllItems";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ numberOfItems, itemsInCart }) => {
  const itemCount = countAllItems(itemsInCart);
  const styles = {
    position: "fixed",
    right: 42,
    bottom: 42,
    color: itemCount < 1 ? "silver" : "lightseagreen",
  };
  return (
    <MediaQuery query={"(min-width: 600px)"}>
      <Link to="/cart">
        <div className="cart-preview-corner">
          <span className="cart-preview-number" style={styles}>
            <FaShoppingCart />
            <h5
              style={{
                position: "absolute",
                right: 0,
                bottom: 45,
                color: itemCount < 1 ? "silver" : "lightseagreen",
              }}
            >
              {itemCount}
            </h5>
          </span>
        </div>
      </Link>
    </MediaQuery>
  );
};

export default Cart;

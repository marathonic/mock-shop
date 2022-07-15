import React from "react";
import { nanoid } from "nanoid";
import { IoCartOutline } from "react-icons/io5";

const CartSection = ({
  inCart,
  itemsInCart,
  removeFromCartTotally,
  resetItemCount,
}) => {
  // Pass a new function from App.js (emptyItemFromCart)
  // This function will set the state of inCart to a filtered array that doesn't include any objects which contain the property id
  //READ NOW!!! 11 JUL.
  // Let's look at itemsInCart here to display the number of each item in cart.

  //
  //Option 2: make a new Set with no repeated elements (in this case, our item objects)
  const noEmptyQty = inCart.filter((item) => itemsInCart[item.name] >= 1);
  const noRepeats = [...new Set(noEmptyQty)];

  const allItems = noRepeats.map((itemObj) => {
    return (
      <article className="cart-section-item" key={nanoid()}>
        <img src={itemObj.image} alt={itemObj.name} />
        {/* Replace below with anchor tag that links to that product's own page */}
        <div className="cart-section-details">
          <span className="cart-section-item-name">{itemObj.name}</span>
          <div>
            <span>${itemObj.price}</span>
          </div>
          <div className="cart-section-quantity">
            <span>Quantity: &nbsp;</span>
            <h5> {itemsInCart[itemObj.name]}</h5>
            {/* ^^^ holds a numeric value (how many of this item in cart) */}
          </div>
          <button
            className="remove-item-btn"
            onClick={() => {
              removeFromCartTotally(itemObj.id);
              resetItemCount(itemObj.name);
            }}
          >
            remove
          </button>
        </div>
      </article>
    );
  });

  return (
    <div className="cart-section">
      {itemsInCart > 0 && <div>Your Cart</div>}
      {inCart.length === 0 && (
        <span>
          <h5>There are no items in your cart</h5>
          <IoCartOutline
            size={120}
            style={{ color: "rgba(217, 217, 214, 0.6)" }}
          />
        </span>
      )}
      <div>{allItems}</div>
    </div>
  );
};

export default CartSection;

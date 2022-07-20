import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { IoCartOutline } from "react-icons/io5";
import countAllItems from "../components/helper-functions/countAllItems";

const CartSection = ({
  inCart,
  itemsInCart,
  removeFromCartTotally,
  resetItemCount,
  ItemCounter,
  user,
}) => {
  // Pass a new function from App.js (emptyItemFromCart)
  // This function will set the state of inCart to a filtered array that doesn't include any objects which contain the property id
  //READ NOW!!! 11 JUL.
  // Let's look at itemsInCart here to display the number of each item in cart.

  //
  //Option 2: make a new Set with no repeated elements (in this case, our item objects)
  const [orderTally, setOrderTally] = React.useState(0);

  const noEmptyQty = inCart.filter((item) => itemsInCart[item.name] >= 1);
  const noRepeats = [...new Set(noEmptyQty)];
  const totalItemCount = countAllItems(itemsInCart);

  // Maybe try a useEffect?

  const getOrderTotal = () => {
    setOrderTally((prevTally) => {
      // let orderTotal = prevTally;
      const orderTotal = noEmptyQty.reduce(
        (total, obj) => obj.price + total,
        0
      );
      // const orderTotal = Object.keys(noEmptyQty).reduce(function(previous, key) {
      //   return previous + noEmptyQty[key].value
      // })
      //let orderTotal = reduce all the values in noEmpty
      // for (let i = 0; i < noEmptyQty.length; i++) {
      //   let current = noEmptyQty[i];
      //   orderTotal += current.price;
      // }
      return orderTotal;
    });
  };

  useEffect(() => {
    getOrderTotal();
  });

  const LoginBtn = ({ user }) => {
    if (!user && totalItemCount > 0) {
      return (
        <Link to="/login">
          <button className="btn">Log in to continue</button>
        </Link>
      );
    } else if (user && totalItemCount > 0) {
      return (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn"
            style={{ width: "max-content", textAlign: "center" }}
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "_blank"
              )
            }
          >
            Proceed to checkout
          </button>
        </div>
      );
    } else {
      return null;
    }
  };
  const allItems = noRepeats.map((itemObj) => {
    return (
      <article className="cart-section-item" key={nanoid()}>
        <img
          src={itemObj.image}
          alt={itemObj.name}
          className="item-thumbnail"
        />
        {/* Replace below with anchor tag that links to that product's own page */}
        <div className="cart-section-details">
          <span className="cart-section-item-name">{itemObj.name}</span>
          <div className="cart-price-div">
            <span className="cart-price-span">
              ${itemObj.price.toLocaleString("en-US")}
            </span>
          </div>
          <div className="cart-section-quantity">
            <span className="qty">QTY:</span>
            <span>{ItemCounter(itemObj.name, itemObj)}</span>
            {/* <h5> {itemsInCart[itemObj.name]}</h5> */}
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
            <div className="triangle"></div>
          </button>
        </div>
      </article>
    );
  });

  return (
    <div className="cart-section">
      {totalItemCount > 0 && <h5 style={{ textAlign: "center" }}>Your Cart</h5>}
      {totalItemCount === 0 && (
        <span>
          <IoCartOutline
            size={120}
            style={{ color: "rgba(217, 217, 214, 0.6)" }}
          />
          <h5 style={{ color: "silver" }}>0 items in cart</h5>
        </span>
      )}
      <div className="cart-list-overview">{allItems}</div>
      {/* if !user, show the following button. */}
      {/* {!user && <Link to="/login">please log in </Link>} */}
      <LoginBtn user={user} />
      {/* <span>Your total: {getOrderTotal().toLocaleString("en-US")}</span> */}
      <span>Your total: {orderTally}</span>
    </div>
  );
};

export default CartSection;

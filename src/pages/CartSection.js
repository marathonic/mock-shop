import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { IoCartOutline } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import countAllItems from "../components/helper-functions/countAllItems";
import products from "../data";

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

  const noEmptyQty = inCart.filter((item) => itemsInCart[item.name] >= 1);
  // not using noRepeats anymore
  const noRepeats = [...new Set(noEmptyQty)];
  const totalItemCount = countAllItems(itemsInCart);

  const [cost, setCost] = useState(0);
  const [conversionDisplay, setConversionDisplay] = useState(false);

  useEffect(() => {
    const updateCost = () => {
      setCost(() => {
        const arrayedAmounts = [...Object.values(itemsInCart)];
        const prices = [];
        for (let i = 0; i < products.length; i++) {
          const current = products[i];
          prices.push(current.price);
        }
        const multiplied = [];
        for (let i = 0; i < arrayedAmounts.length; i++) {
          multiplied.push(prices[i] * arrayedAmounts[i]);
        }
        console.log(arrayedAmounts);
        console.log(prices);
        console.log(multiplied);
        return multiplied.reduce((a, b) => a + b, 0);
      });
    };

    updateCost();
  }, [itemsInCart]);

  // Maybe try a useEffect?

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
        <Link to={`/products/${itemObj.id}`}>
          <img
            src={itemObj.image}
            alt={itemObj.name}
            className="item-thumbnail"
          />
        </Link>
        {/* Replace below with anchor tag that links to that product's own page */}
        <div className="cart-section-details">
          <Link to={`/products/${itemObj.id}`}>
            <span className="cart-section-item-name">{itemObj.name}</span>
          </Link>
          <div className="cart-price-div">
            <span className="cart-price-span">
              {itemObj.price.toLocaleString("en-US")} ʛ
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
      {totalItemCount > 0 && (
        <span style={{ fontSize: "1.32rem" }}>
          Your total: {cost.toLocaleString("en-US")} ʛ.
          <button
            onClick={() => setConversionDisplay(!conversionDisplay)}
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <FaInfoCircle
              style={{ pointerEvents: "none", color: "skyblue" }}
              size={17}
            />
          </button>
          {conversionDisplay && (
            <span style={{ fontSize: "0.9rem", color: "darkgray" }}>
              <div>
                <span>In Muggle currency:</span>
              </div>
              <div>£{(cost * 4.93).toLocaleString("en-US")}</div>
              <div>${(cost * 6.64).toLocaleString("en-US")}</div>
            </span>
          )}
        </span>
      )}
      <LoginBtn user={user} />
    </div>
  );
};

export default CartSection;

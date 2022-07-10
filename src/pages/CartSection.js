import React from "react";
import { nanoid } from "nanoid";

const CartSection = ({ inCart }) => {
  // const filteredItems = inCart.filter((item) => inCart.indexOf(item) !== -1);
  //
  //Option 2: make a new Set with no repeated elements (in this case, our item objects)
  const filteredSet = [...new Set(inCart)];

  const allItems = filteredSet.map((itemObj) => {
    //Option 1:
    // if(inCart doesn't include the current itemObj, return (the below code))
    // and then after (see CONTINUATION)

    return (
      <article className="cart-section-item" key={nanoid()}>
        <img src={itemObj.image} alt={itemObj.name} />
        {/* Replace below with anchor tag that links to that product's own page */}
        <span className="cart-section-item-name">{itemObj.name}</span>
        {/* CONTINUATION: And here, just get the number of times the itemObj is found inside of allItems */}
        {/* Once we have stored that number, we can display it in a <span> or whatever, it'll say, for example: 1, or maybe: 4, etc. */}
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

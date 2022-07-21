import React from "react";
import { Link } from "react-router-dom";
import getSeason from "../components/helper-functions/getSeason";
import products from "../data";
import { nanoid } from "nanoid";

function Home({ user, banner }) {
  const getRandomProducts = () => {
    const randomProductsList = [];

    for (let i = 0; randomProductsList.length < 3; i++) {
      const randomNumber = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomNumber];
      if (!randomProductsList.includes(randomProduct)) {
        randomProductsList.push(randomProduct);
      }
    }
    return randomProductsList;
  };

  const randomProducts = getRandomProducts();

  const reccies = randomProducts.map((product) => {
    return (
      <li key={nanoid()}>
        <Link to={`/products/${product.id}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginInline: "0.3rem",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="item-thumbnail"
            />
            {product.name}
          </div>
        </Link>
      </li>
    );
  });

  return (
    <>
      <section className="section home">
        {user && <h4>Welcome, {user.name}!</h4>}
        {banner}
        <div className="welcome-banner"></div>
        <hr className="horizontal-line" />
        <div className="best-sellers">
          <span className="subsection">Best sellers</span>
          {/* <------------------ CONTINUE HERE!!!--------------------------->
            Now all we need to do is 3 things:
            X) Link to some random items in our Home screen
            Y) Make each item in CartSection --Link-- to its own SingleProductPage
            Z) Save the cart in localStorage */}
          <ul className="best-sellers-list">{reccies}</ul>
        </div>
      </section>
    </>
  );
}

export default Home;

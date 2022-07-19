import React from "react";
import getSeason from "../components/helper-functions/getSeason";

function Home({ user, banner }) {
  return (
    <>
      <section className="section home">
        <h1>Home</h1>
        {user && <h4>Welcome back, {user.name}!</h4>}
        {banner}
        <div className="welcome-banner">sale live now!</div>
        <div className="welcome-banner"></div>
        <hr className="horizontal-line" />
        <div className="best-sellers">
          <span className="subsection">Best sellers</span>
          <ul className="best-sellers-list">
            {/* <------------------ CONTINUE HERE!!!--------------------------->
            Now all we need to do is 3 things:
            X) Link to some random items in our Home screen
            Y) Make each item in CartSection --Link-- to its own SingleProductPage
            Z) Save the cart in localStorage */}

            <li>Potion</li>
            <li>Book</li>
            <li>Wand</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;

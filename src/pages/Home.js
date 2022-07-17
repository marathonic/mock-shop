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

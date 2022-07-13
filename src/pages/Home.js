import React from "react";
import getSeason from "../components/helper-functions/getSeason";

function Home() {
  let season = getSeason();

  return (
    <>
      <section className="section">
        <h1>Home</h1>
        <div className="welcome-banner">{season} sale live now!</div>
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

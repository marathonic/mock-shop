import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <h2>About</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        <p>
          Are you tired of having to go all the way to Diagonal Alleyway just to
          check out what's new?
        </p>
        <p>
          Well, rejoice! for your favourite store (Ollywander's) is finally on
          the interwebs!{" "}
        </p>
        <p>
          You can browse our inventory here, but you'll still have to come pick
          up your items in store. We just miss you that much!
        </p>
      </div>
    </section>
  );
};
export default About;

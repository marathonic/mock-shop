import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>Err 404</h2>
      <p>Page not found</p>
      <Link to="/">back home</Link>
    </section>
  );
};
export default Error;

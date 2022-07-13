import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headr">
      <div className="logo-container">
        <Link to="/">
          <h3 className="logo">Hollywander's</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;

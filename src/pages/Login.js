import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  //the following useEffect may be unnecessary now that we've fixed the styling from
  //within StyledNavbar (sharedLayout --> StyledNavbar, passing the user, line 53 in StyledNavbar)

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  // ^read above. Do not remove the next code.

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>log in</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Hogworse's student ID
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Secret phrase
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Enter
        </button>
      </form>
    </section>
  );
};
export default Login;

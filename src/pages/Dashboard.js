import { FaRegUserCircle } from "react-icons/fa";

const Dashboard = ({ user }) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    alignItems: "center",
  };
  return (
    <section className="section" style={styles}>
      <FaRegUserCircle
        size={42}
        color={"gray"}
        style={{ marginBottom: "1rem" }}
      />
      <h5 style={{ color: "darkgray" }}>You're logged in as {user?.name}</h5>
      <p>Thank you for shopping with us.</p>
      <p>
        Due to the irreplaceable nature of our items, all orders must be picked
        up in-person at Hollywander's. You will be asked to sign for the items,
        provide some ID, and your login details to verify your identity.{" "}
      </p>
      <p>Thank you for your understanding.</p>
      <span style={{ textDecoration: "underline" }}>Hogworse students:</span>
      <span>
        You may be asked to provide proof of ID for joint record-keeping with
        the school.
      </span>
      <hr />
      <h4>Yer a wizard, {user?.name}</h4>
      <button style={{ marginBlock: "2rem" }} className="btn">
        Log out
      </button>
    </section>
  );
};
export default Dashboard;

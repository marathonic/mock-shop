import { FaRegUserCircle } from "react-icons/fa";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <FaRegUserCircle size={42} color={"gray"} />
      <h5 style={{ color: "darkgray" }}>You're logged in as {user?.name}</h5>
      <p>Thank you for shopping with us.</p>
      <p>
        Due to the irreplaceable nature of our items, all orders must be picked
        up in-person at Hollywander's. You will be asked to sign for the items,
        provide some ID, and your login details to verify your identity.{" "}
      </p>
      <p>Thank you for your understanding.</p>
      <p style={{ textDecoration: "underline" }}>Hogworse students:</p> You may
      be asked to provide proof of ID for joint record-keeping with the school.
      <hr />
      <h4>Yer a wizard, {user?.name}</h4>
      <button style={{ marginBlock: "2rem" }} className="btn">
        Log out
      </button>
    </section>
  );
};
export default Dashboard;

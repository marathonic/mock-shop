import { Link, Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

// numberOfItemsInCart testing:
// --- currently deletes all items in cart when removing 1 item,
// and it STILL Keeps 1 item in cart.
const SharedLayout = ({
  numberOfItems,
  itemsInCart,
  user,
  numberOfItemsInCart,
}) => {
  return (
    <>
      <Header />
      <StyledNavbar
        itemsInCart={itemsInCart}
        user={user}
        numberOfItemsInCart={numberOfItemsInCart}
      />
      <Outlet />
    </>
  );
};
export default SharedLayout;

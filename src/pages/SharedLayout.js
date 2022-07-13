import { Link, Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = ({ numberOfItems, itemsInCart }) => {
  return (
    <>
      <Header />
      <StyledNavbar itemsInCart={itemsInCart} />
      <Outlet />
    </>
  );
};
export default SharedLayout;

import { Link, Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const SharedLayout = ({ numberOfItems }) => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;

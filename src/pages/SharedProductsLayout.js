import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";

const SharedProductsLayout = ({ numberOfItems }) => {
  return (
    <>
      <h2>Products</h2>
      <Cart numberOfItems={numberOfItems} />

      <Outlet />
    </>
  );
};
export default SharedProductsLayout;

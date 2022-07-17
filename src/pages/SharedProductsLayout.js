import { Outlet, useLocation } from "react-router-dom";
import Cart from "../components/Cart";

const SharedProductsLayout = ({ numberOfItems, itemsInCart }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/products" && (
        <h4 style={{ marginBlock: "2%" }}>Shop All</h4>
      )}
      <Cart numberOfItems={numberOfItems} itemsInCart={itemsInCart} />

      <Outlet />
    </>
  );
};
export default SharedProductsLayout;

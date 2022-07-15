import { Outlet, useLocation } from "react-router-dom";
import Cart from "../components/Cart";

const SharedProductsLayout = ({ numberOfItems, itemsInCart }) => {
  const location = useLocation();
  return (
    <>
      {/* how can we check the current location? We only want to match to when we're getting All products, not when we're looking at a single item */}
      {location.pathname === "/products" && <h4>Shop All</h4>}
      <Cart numberOfItems={numberOfItems} itemsInCart={itemsInCart} />

      <Outlet />
    </>
  );
};
export default SharedProductsLayout;

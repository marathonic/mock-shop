import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";

const SharedProductsLayout = ({ numberOfItems, itemsInCart }) => {
  return (
    <>
      <h2>Products</h2>
      <Cart numberOfItems={numberOfItems} itemsInCart={itemsInCart} />

      <Outlet />
    </>
  );
};
export default SharedProductsLayout;

import { Outlet } from "react-router-dom";

const SharedProductsLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};
export default SharedProductsLayout;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductsLayout from "./pages/SharedProductsLayout";
import Cart from "./components/Cart";
import CartSection from "./pages/CartSection";
import data from "./data";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(false);
  const [inCart, setInCart] = useState([]); //may be redundant, because:
  //we could just look at our object below, make a Set from it,
  // then use the built-in .add() function to add all the VALUES
  // (we've seen .add() used to count the number of elements in a Set before.)
  //  we'd just need to figure out how to add the values instead.
  const [itemsInCart, setItemsInCart] = useState({});
  const addToCart = (item) => {
    setInCart((prevInCart) => [...prevInCart, item]);
    console.log(inCart);
  };

  // To make a list of the items in our inventory file (data.js):

  // make an object that contains all the data.js itemNames as keys,
  // and sets them to 0 by default, like {itemOne: 0, itemTwo: 0, itemThree: 0, etc...}
  const getListOfItems = () => {
    let allItemNames = {};
    for (let i = 0; i < data.length; i++) {
      let currentObj = data[i];
      allItemNames[currentObj.name] = 0;
    }
    console.log(allItemNames);
    return allItemNames;
  };

  //set the default setInCart state to the result of getListOfItems:

  useEffect(() => {
    setItemsInCart(getListOfItems());
  }, []);

  //
  const addItemToCart = (itemName) => {
    setItemsInCart((prevItemsInCart) => {
      const newCart = {
        ...prevItemsInCart,
        [itemName]: prevItemsInCart[itemName] + 1,
      };
      console.log(newCart);
      return newCart;
    });
  };

  //this may work better: Edit: it doesn't, we wrote exactly what we want!
  // const allTheItemNames = data.map(({name}) => ({name}));
  // console.log(allTheItemNames)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route
            path="products"
            element={
              <SharedProductsLayout
                numberOfItems={inCart.length}
                inCart={inCart}
              />
            }
          >
            <Route index element={<Products />} />

            <Route
              path=":productId"
              element={
                <SingleProduct
                  addToCart={addToCart}
                  addItemToCart={addItemToCart}
                />
              }
            />
          </Route>

          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={<CartSection inCart={inCart} itemsInCart={itemsInCart} />}
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

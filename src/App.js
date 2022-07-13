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
  //We have identified a potential problem:
  // We're getting our information from 2 places:
  // inCart: is an array of objects, each object has multiple properties.
  // itemsInCart: is an object, which holds the item names as keys, and their quantity in cart as the values.
  // going by React's 'single source of truth' paradigm, shouldn't we get the information from just 1 place?..

  //OK I SEE THE PROBLEM:
  // What criteria does CartSection take in order to render an item in the DOM?
  // Answer: That the item appears inside of --inCart--, and that's all
  // HOWEVER,
  // itemsInCart, our object that keeps track of quantity, doesn't currently change when we click the remove button
  // therefore, our -quantity- text span is still showing the previous number
  // so, we need to also set the item count to 0 when we click the --remove-- button

  const addToCart = (item) => {
    setInCart((prevInCart) => [...prevInCart, item]);
    console.log(inCart);
  };

  const removeFromCartTotally = (itemId) => {
    setInCart((prevInCart) => {
      const filtered = prevInCart.filter((itemObj) => itemObj.id !== itemId);
      return filtered;
    });
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

  //Let's try this:
  // Any time itemCount changes, we'll check if there's any item objects --inCart-- with names that have 0 items in --itemsInCart--
  // If so, we'll filter those objects from the inCart array.

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

  // we have to remove the item from both the inCart and itemsInCart vars.
  // A better solution would be to commit all changes to inCart,
  // and the way to get the values in itemsInCart, we'd just map over inCart,
  // and each time, get a new object with all the 'itemName' keys paired with the respective value.
  // This also simplifies our 'cart preview (not real name)' functionality,
  // since we can just display the total from adding all those values together.
  const removeOneItemFromCart = (itemName) => {
    //this function updates the itemsInCart, where the Quantity spans get their values from.
    setItemsInCart((prevItemsInCart) => {
      // We should have a condition for when there is only 1 of that item in the cart.

      // if (prevItemsInCart[itemName] === 1) {
      //   //prompt ('are you sure you wish to remove this item from your cart?')
      //   //if so, remove from CartSection DOM
      //   alert("remove this item from cart..."); // <--- hmmm, we may wish to somehow use removeFromCartTotally?
      //   return prevItemsInCart;
      // }
      const newCart = {
        ...prevItemsInCart,
        [itemName]: prevItemsInCart[itemName] - 1,
      };

      console.log(newCart);

      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setInCart((prevInCart) => {
      const toModify = [...prevInCart];
      toModify.splice(
        //<-- this returns the 1 element that matches the condition. The opposite of what we're looking for.
        toModify.indexOf(toModify.findIndex((obj) => obj.id === itemId))
      );
      return toModify;
    });
    // We need to come up with a way to return everything EXCEPT for the 1 that matches the condition.
  };

  const resetItemCount = (itemName) => {
    setItemsInCart((prevItemsInCart) => {
      const newCart = {
        ...prevItemsInCart,
        [itemName]: 0,
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
      <div className="container">
        <Routes>
          <Route path="/" element={<SharedLayout itemsInCart={itemsInCart} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route
              path="products"
              element={
                <SharedProductsLayout
                  numberOfItems={inCart.length}
                  inCart={inCart}
                  itemsInCart={itemsInCart}
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
                    inCart={inCart}
                    itemsInCart={itemsInCart}
                    removeOneItemFromCart={removeOneItemFromCart}
                    removeFromCartTotally={removeFromCartTotally}
                    removeFromCart={removeFromCart}
                    resetItemCount={resetItemCount}
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
              element={
                <CartSection
                  inCart={inCart}
                  itemsInCart={itemsInCart}
                  removeFromCartTotally={removeFromCartTotally}
                  resetItemCount={resetItemCount}
                  removeOneItemFromCart={removeOneItemFromCart}
                />
              }
            />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

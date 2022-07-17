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
import { FaPlus, FaMinus } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import getSeason from "./components/helper-functions/getSeason";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [cart, setCart] = useState(false);
  const [inCart, setInCart] = useState([]); //may be redundant, because:
  const [banner, setBanner] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
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
  useEffect(() => {
    setBanner(() => {
      let season = getSeason();
      let bannerName = `/${season}-banner.jpg`;
      return (
        <img
          src={process.env.PUBLIC_URL + bannerName}
          alt={`${season} sale banner`}
          className="welcome-banner"
        />
      );
    });
  }, []);

  const logOut = () => setUser(null);

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

  const getListOfItems = () => {
    let allItemNames = {};
    for (let i = 0; i < data.length; i++) {
      let currentObj = data[i];
      allItemNames[currentObj.name] = 0; //<-- initialise all itemsInCart at 0
    }
    console.log(allItemNames);
    return allItemNames;
  };

  //set the default setInCart state to the result of getListOfItems:

  useEffect(() => {
    setItemsInCart(getListOfItems());
  }, []);

  //set the default user state to the logged in user

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // retrive objects from localStorage

  //user object

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  //

  // Any time itemCount changes, we'll check if there's any item objects --inCart-- with names that have 0 items in --itemsInCart--
  // If so, we'll filter those objects from the inCart array.

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
        toModify.indexOf(toModify.findIndex((obj) => obj.id === itemId))
      );
      return toModify;
    });
  };

  function ItemCounter(itemName, itemObj) {
    const btnStyle = {
      pointerEvents: "none",
      color: "palevioletred",
    };

    return (
      <div className="counter-container">
        <button
          className="counter-btn"
          onClick={() => {
            itemsInCart[itemName] > 1
              ? removeOneItemFromCart(itemName)
              : resetItemCount(itemName);
          }}
        >
          <FaMinus style={btnStyle} />
        </button>
        <span className="add-item-counter">{itemsInCart[itemName]}</span>
        {itemsInCart[itemName] < itemObj.available ? (
          <button
            className="counter-btn"
            onClick={() => {
              addToCart(itemObj);
              addItemToCart(itemName);
            }}
          >
            <FaPlus style={btnStyle} />
          </button>
        ) : (
          <button>
            <FcCancel />
            <span
              style={{
                position: "absolute",
                bottom: "5",
                right: "42%",
              }}
            >
              limit: {itemObj.available}
            </span>
          </button>
        )}
      </div>
    );
  }

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

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<SharedLayout itemsInCart={itemsInCart} user={user} />}
          >
            <Route index element={<Home user={user} banner={banner} />} />
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
                    ItemCounter={ItemCounter}
                  />
                }
              />
            </Route>

            <Route
              path="login"
              element={<Login user={user} setUser={setUser}></Login>}
            />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} logOut={logOut} />
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
                  ItemCounter={ItemCounter}
                  user={user}
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

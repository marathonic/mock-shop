import { Link, useParams } from "react-router-dom";
import MediaQuery from "react-responsive";
import { FaPlus, FaMinus, FaArrowCircleLeft } from "react-icons/fa";
import products from "../data";

const SingleProduct = (props) => {
  const {
    addToCart,
    inCart,
    addItemToCart,
    removeOneItemFromCart,
    removeFromCart,
    itemsInCart,
    removeFromCartTotally,
    resetItemCount,
    ItemCounter,
  } = props;

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, price, description } = product;

  const backToProducts = {
    position: "absolute",
    top: "30%",
    alignItems: "stretch",
  };

  const desktopArrow = {
    position: "absolute",
    marginTop: "7px",
    marginLeft: "-11px",
  };

  const mobileArrow = {
    position: "relative",
    marginTop: 0,
    marginLeft: 0,
  };

  const isAlreadyInCart = () => {
    // const arr = inCart;
    return itemsInCart[name] > 0;
    // return inCart.some((itemObj) => itemObj.id === productId);

    // console.log(inCart);
    // return false;
    // return true; <-- TESTING. Uncomment above to see. We want to figure out why arr.some isn't working, and how to do it instead
  };

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5>{name}</h5>
        <span>${price.toLocaleString("en-US")}</span>
        <p>{description}</p>
      </div>
      {/* We actually want to display the 'add to cart' button only if the item isn't yet in the cart */}
      {/* When there is at least 1 of the item in the cart, display instead a counter */}
      {!isAlreadyInCart() ? (
        <div>
          <button
            className="add-cart-btn"
            onClick={() => {
              addToCart(product);
              addItemToCart(name);
              console.log(productId);
            }}
          >
            add to cart
          </button>
        </div>
      ) : (
        ItemCounter(name, product)
        // ^^^ All we did here was put all the code that was here into the ItemCounter function.
        // It works the same, but if we want to place the code here instead, simply copy and paste it here,
        // starting right after the return statement in the ItemCounter functional component.
      )}

      {/* READ NOW!!! 11 JUL. (now doing this above)
      Let's try using addItemToCart here to add the item to our object,
      the one that looks like:
      {
        accent chair: 0,
        albany sectional: 0,
        etc...
      }
      */}

      {/* fluff, no longer using: 
      {if(inCart.includes(product)) {
        run increaseQuantity instead of addToCart
}} */}

      {/* <MediaQuery query="(min-width: 1024px)"> */}
      <Link to="/products">
        <div style={backToProducts}>
          <FaArrowCircleLeft
            style={{
              position: "absolute",
              marginTop: "7px",
              marginLeft: "-11px",
            }}
          />
          &nbsp; Back
        </div>
      </Link>
      {/* </MediaQuery> */}
    </section>
  );
};

export default SingleProduct;

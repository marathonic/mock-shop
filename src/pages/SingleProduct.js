import { Link, useParams } from "react-router-dom";
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
  } = props;

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  const isAlreadyInCart = () => {
    // const arr = inCart;
    return itemsInCart[name] > 0;
    return inCart.some((itemObj) => itemObj.id === productId);

    // console.log(inCart);
    // return false;
    // return true; <-- TESTING. Uncomment above to see. We want to figure out why arr.some isn't working, and how to do it instead
  };
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      {/* We actually want to display the 'add to cart' button only if the item isn't yet in the cart */}
      {/* When there is at least 1 of the item in the cart, display instead a counter */}
      {!isAlreadyInCart() ? (
        <button
          onClick={() => {
            addToCart(product);
            addItemToCart(name);
            console.log(productId);
          }}
        >
          add to cart
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              itemsInCart[name] > 1
                ? removeOneItemFromCart(name)
                : resetItemCount(name);
              // removeFromCartTotally(productId);
            }}
          >
            -
          </button>
          <span>{itemsInCart[name]}</span>
          <button
            onClick={() => {
              addToCart(product);
              addItemToCart(name);
            }}
          >
            +
          </button>
        </div>
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

      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;

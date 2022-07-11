import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = (props) => {
  const { addToCart, inCart, addItemToCart } = props;

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <button
        onClick={() => {
          addToCart(product);
          addItemToCart(name);
        }}
      >
        add to cart
      </button>

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

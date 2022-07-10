import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = (props) => {
  const { addToCart, inCart } = props;

  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <button onClick={() => addToCart(product)}>add to cart</button>
      {/* {if(inCart.includes(product)) {
        run increaseQuantity instead of addToCart
}} */}

      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;

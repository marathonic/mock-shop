import { Link } from "react-router-dom";
import products from "../data";
import MediaQuery from "react-responsive";

const Products = () => {
  return (
    <section className="section products-section">
      <div className="products">
        {products.map((product) => {
          return (
            <Link to={`/products/${product.id}`} key={product.id}>
              <article className="product-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="item-thumbnail"
                />
                <div className="preview-right">
                  <h5>{product.name}</h5>
                  <span>${product.price}</span>
                  read more
                </div>
                {/* <MediaQuery query="(max-width: 600px)">
                <hr className="product-separator" />
              </MediaQuery> */}
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;


import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import Rating from "../components/Rating";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found!</h2>
        <button onClick={() => navigate("/")}>
          Back To Home
        </button>
      </div>
    );
  }

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    navigate("/cart");
  }

  return (
    <section className="product-details">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="details-container">

        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

<Rating
  productId={product.id}
  rating={product.rating}
  reviews={product.reviews}
/>
          <p>{product.description}</p>

          <h2>{product.price} EGP</h2>

          <div className="details-quantity">
            <span>Quantity:</span>

            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <h3>
            Total: {product.price * quantity} EGP
          </h3>

          <button
            className="details-add-btn"
            onClick={handleAddToCart}
          >
            Add To Cart 🛒
          </button>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;

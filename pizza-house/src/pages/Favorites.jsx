
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Favorites() {
  const {
    favoriteItems,
    toggleFavorite,
    addToCart,
    clearFavorites
  } = useCart();

  if (favoriteItems.length === 0) {
    return (
      <section className="favorites-page">

        <h1>My Favorites ❤️</h1>

        <div className="favorites-empty">
          <h2>No Favorites Yet!</h2>

          <p>
            Save your favorite meals and find them here.
          </p>

          <Link to="/" className="back-menu-btn">
            Explore Menu
          </Link>
        </div>

      </section>
    );
  }

  return (
    <section className="favorites-page">

      <div className="favorites-header">
        <div>
          <h1>My Favorites ❤️</h1>
          <p>Your favorite meals are waiting for you!</p>
        </div>

        <button
          className="clear-favorites-btn"
          onClick={clearFavorites}
        >
          Clear Favorites
        </button>
      </div>

      <div className="products-grid">

        {favoriteItems.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image-wrapper">

              <img
                src={product.image}
                alt={product.name}
              />

              <button
                className="favorite-btn favorited"
                onClick={() => toggleFavorite(product)}
              >
                ❤️
              </button>

            </div>

            <div className="product-info">

              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <Link
                to={`/product/${product.id}`}
                className="details-link"
              >
                View Details
              </Link>

              <p>{product.description}</p>

              <div className="product-footer">

                <strong>{product.price} EGP</strong>

                <button onClick={() => addToCart(product)}>
                  Add to Cart +
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Favorites;

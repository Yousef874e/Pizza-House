
import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import Rating from "./Rating";

function Products() {
  const {
    addToCart,
    toggleFavorite,
    isFavorite
  } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products-section" id="menu">

     
      {/* Search */}
      <div className="products-controls">

        <input
          type="text"
          placeholder="Search for your favorite food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Categories */}
        <div className="category-buttons">
          {["All", "Pizza", "Crepe", "Feteer"].map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* Products */}
      <div className="products-grid">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image-wrapper">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className={`favorite-btn ${
                    isFavorite(product.id) ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(product)}
                  aria-label="Toggle favorite"
                >
                  {isFavorite(product.id) ? "❤️" : "🤍"}
                </button>

              </div>

              <div className="product-info">

                <span className="product-category">
                  {product.category}
                </span>
<h3>{product.name}</h3>

<Rating
  productId={product.id}
  rating={product.rating}
  reviews={product.reviews}
/>

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
          ))
        ) : (
          <p className="no-products">
            No products found!
          </p>
        )}

      </div>

    </section>
  );
}

export default Products;


function Home() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <span className="hero-tag">
          🍕 Fresh & Delicious
        </span>

        <h1>
          Enjoy Your
          <span> Favorite Pizza</span>
        </h1>

        <p>
          Fresh ingredients, delicious flavors,
          and the best pizza in town.
          Order your favorite meal today!
        </p>

        <button className="order-btn">
          Order Now →
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&auto=format&fit=crop&q=80"
          alt="Delicious Pizza"
        />
      </div>

    </section>
  );
}

export default Home;

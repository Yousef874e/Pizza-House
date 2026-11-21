
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">

        <span>ABOUT PIZZA HOUSE 🍕</span>

        <h1>
          Good Food,
          <span> Good Mood!</span>
        </h1>

        <p>
          We believe that great food brings people
          together. Enjoy delicious pizza, crepes
          and fresh feteer made with love.
        </p>

        <Link to="/#menu" className="about-btn">
          Explore Our Menu →
        </Link>

      </section>

      {/* Our Story */}
      <section className="about-story">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800"
            alt="Fresh delicious pizza"
          />
        </div>

        <div className="story-content">

          <span>OUR STORY</span>

          <h2>
            Made With Love,
            <span> Served With Passion.</span>
          </h2>

          <p>
            Welcome to Pizza House!

            We are passionate about serving delicious
            food using fresh ingredients and amazing
            flavors.
          </p>

          <p>
            From cheesy pizzas to tasty crepes and
            traditional feteer, we make every meal
            special for our customers.
          </p>

          <Link to="/#menu" className="about-btn">
            Discover Our Menu
          </Link>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-us">

        <div className="section-header">
          <span>WHY CHOOSE US</span>
          <h2>What Makes Us <span>Special?</span></h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <span>🥗</span>
            <h3>Fresh Ingredients</h3>
            <p>
              We use fresh ingredients to prepare
              delicious meals.
            </p>
          </div>

          <div className="feature-card">
            <span>👨‍🍳</span>
            <h3>Made With Love</h3>
            <p>
              Every meal is prepared with care
              and passion.
            </p>
          </div>

          <div className="feature-card">
            <span>🚀</span>
            <h3>Fast Delivery</h3>
            <p>
              Enjoy your favorite food delivered
              to your door.
            </p>
          </div>

          <div className="feature-card">
            <span>❤️</span>
            <h3>Customer First</h3>
            <p>
              Your satisfaction is always our
              top priority.
            </p>
          </div>

        </div>

      </section>

      {/* Our Specialties */}
      <section className="specialties">

        <div className="section-header">
          <span>OUR SPECIALTIES</span>
          <h2>Something For <span>Everyone!</span></h2>
        </div>

        <div className="specialties-grid">

          <div className="specialty-card">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
              alt="Pizza"
            />
            <h3>Pizza 🍕</h3>
          </div>

          <div className="specialty-card">
            <img
              src="https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500"
              alt="Crepe"
            />
            <h3>Crepe 🥞</h3>
          </div>

          <div className="specialty-card">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500"
              alt="Feteer"
            />
            <h3>Feteer 🥐</h3>
          </div>

        </div>

      </section>

      {/* Final CTA */}
      <section className="about-cta">
        <h2>Ready To Taste Something Delicious?</h2>

        <p>
          Explore our menu and find your favorite meal!
        </p>

        <Link to="/#menu" className="about-btn">
          Order Now 🍕
        </Link>
      </section>

    </div>
  );
}

export default About;

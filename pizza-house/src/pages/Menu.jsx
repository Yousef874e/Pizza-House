import Products from "../components/Products";

function Menu() {
  return (
    <main className="menu-page">
      <div className="menu-hero">
        <span>DISCOVER OUR FOOD 🍕</span>
        <h1>Our <span>Menu</span></h1>
        <p>
          Explore our delicious pizza, crepes
          and fresh feteer.
        </p>
      </div>

      <Products />
    </main>
  );
}

export default Menu;
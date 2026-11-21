
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const {
    totalQuantity,
    favoriteItems
  } = useCart();

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        Pizza<span>House</span> 🍕
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Navbar Actions */}
      <div className="navbar-actions">

        <Link to="/favorites" className="favorites-link">
          ❤️ Favorites ({favoriteItems.length})
        </Link>

        <Link to="/cart" className="cart-btn">
          🛒 Cart ({totalQuantity})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;

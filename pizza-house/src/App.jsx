
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Products from "./components/Products";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";

import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  return (
    <CartProvider>

      <Navbar />

      <Toast />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Products />
            </>
          }
        />

        {/* Menu Page */}
        <Route
          path="/menu"
          element={<Menu />}
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Shopping Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Favorites */}
        <Route
          path="/favorites"
          element={<Favorites />}
        />

      </Routes>

      <Footer />

    </CartProvider>
  );
}

export default App;

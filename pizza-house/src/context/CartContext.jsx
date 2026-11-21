
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  // Cart State with LocalStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("pizza-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Favorites State with LocalStorage
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const savedFavorites = localStorage.getItem("pizza-favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Toast State
  const [toastMessage, setToastMessage] = useState("");

  // Save Cart in LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "pizza-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // Save Favorites in LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "pizza-favorites",
      JSON.stringify(favoriteItems)
    );
  }, [favoriteItems]);

  // Hide Toast after 3 seconds
  useEffect(() => {
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      setToastMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Add Product to Cart
  function addToCart(product) {
    setToastMessage(`${product.name} added to cart!`);

    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevItems,
        { ...product, quantity: 1 }
      ];
    });
  }

  // Update Product Quantity
  function updateQuantity(id, amount) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Remove Product from Cart
  function removeFromCart(id) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }

  // Clear Cart
  function clearCart() {
    setCartItems([]);
  }

  // Toggle Favorite
  function toggleFavorite(product) {
    setFavoriteItems((prevItems) => {
      const isFavorite = prevItems.some(
        (item) => item.id === product.id
      );

      if (isFavorite) {
        return prevItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevItems, product];
    });
  }

  // Check Favorite
  function isFavorite(id) {
    return favoriteItems.some(
      (item) => item.id === id
    );
  }

  // Clear Favorites
  function clearFavorites() {
    setFavoriteItems([]);
  }

  // Total Quantity
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        // Cart
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalQuantity,
        totalPrice,

        // Toast
        toastMessage,

        // Favorites
        favoriteItems,
        toggleFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h2>Your Cart Is Empty 🛒</h2>
        <p>Add some delicious meals to get started!</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">

        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.price} EGP</p>

                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <h3>Total: {totalPrice} EGP</h3>

         <Link to="/checkout" className="checkout-btn">
  Proceed to Checkout
</Link>

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>

      </div>
    </section>
  );
}

export default Cart;


import { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <section className="checkout-success">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thank you for choosing Pizza House.</p>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="checkout-success">
        <h2>Your Cart Is Empty 🛒</h2>
        <p>Please add products before checkout.</p>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Delivery Information</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Delivery Address</label>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>Payment Method</label>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          >
            <option value="Cash on Delivery">
              Cash on Delivery
            </option>
            <option value="Online Payment" disabled>
              Online Payment (Coming Soon)
            </option>
          </select>

          <button type="submit">
            Place Order
          </button>
        </form>

        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {item.price * item.quantity} EGP
              </strong>
            </div>
          ))}

          <hr />

          <h3>Total: {totalPrice} EGP</h3>
        </div>

      </div>
    </section>
  );
}

export default Checkout;

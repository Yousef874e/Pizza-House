
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  }

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <span>GET IN TOUCH 📞</span>
        <h1>Contact <span>Us</span></h1>
        <p>
          Have a question or want to place an order?
          We'd love to hear from you!
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Let's Talk!</h2>

          <p>
            We're always happy to hear from our customers.
            Send us a message and we'll be glad to help.
          </p>

          <div className="contact-info-item">
            <span>📞</span>
            <div>
              <h3>Phone Number</h3>
              <p>+20 100 000 0000</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>📧</span>
            <div>
              <h3>Email Address</h3>
              <p>pizzahouse@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>📍</span>
            <div>
              <h3>Our Location</h3>
              <p>Egypt</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <h2>Send Us a Message</h2>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message →
          </button>

          {success && (
            <p className="contact-success">
              ✓ Your message has been submitted successfully!
            </p>
          )}

        </form>

      </section>

    </div>
  );
}

export default Contact;

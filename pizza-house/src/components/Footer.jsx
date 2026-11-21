
function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Pizza<span>House</span> 🍕</h2>

          <p>
            Delicious pizza, tasty crepes and fresh
            feteer. Made with love, served with flavor!
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/#menu">Menu</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📞 +20 100 000 0000</p>
          <p>📧 pizzahouse@gmail.com</p>
          <p>📍 Egypt</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Pizza House. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;

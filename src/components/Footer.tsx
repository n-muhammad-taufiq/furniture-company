import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <span className="footer-logo">LuxeDecor.</span>
            <p className="footer-bio">
              Elevating everyday living with thoughtfully designed, sustainable, and meticulously crafted furniture pieces.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h5 className="footer-heading">Shop</h5>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Living Room</a></li>
              <li><a href="#">Bedroom</a></li>
              <li><a href="#">Decor & Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-links-col">
            <h5 className="footer-heading">About</h5>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Design Journal</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter-col">
            <h5 className="footer-heading">Join Our Newsletter</h5>
            <p>Subscribe for exclusive designs and private sales.</p>
            <form className="footer-form">
              <input type="email" placeholder="Email address..." className="footer-input" />
              <button type="submit" className="footer-submit">→</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} LuxeDecor. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

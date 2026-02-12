import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Avry's Nails</h3>
            <p>Custom Nail Artistry</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get in Touch</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com/avrysnails" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="mailto:avrysnails@example.com">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Avry's Nails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

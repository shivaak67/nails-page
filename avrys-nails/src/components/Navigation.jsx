import { useState } from 'react';
import './Navigation.css';

const Navigation = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">PRESSED BY AVRY</a>
        </div>
        
        <div className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#featured" className="nav-link">Sets</a>
          <a href="#mood" className="nav-link">Mood</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="mobile-nav-link" onClick={toggleMenu}>Home</a>
          <a href="#featured" className="mobile-nav-link" onClick={toggleMenu}>Sets</a>
          <a href="#mood" className="mobile-nav-link" onClick={toggleMenu}>Mood</a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

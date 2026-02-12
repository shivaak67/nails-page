import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Avry's Nails</h1>
          <p className="hero-tagline">Custom Nail Artistry</p>
          <Link to="/gallery" className="cta-button">
            View Designs
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-title">Why Choose Avry's Nails?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Custom Designs</h3>
              <p>Unique nail art tailored to your personal style and preferences.</p>
            </div>
            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>Using only the highest quality products for long-lasting results.</p>
            </div>
            <div className="feature-card">
              <h3>Expert Artistry</h3>
              <p>Professional nail technician with years of experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-container">
          <h2 className="section-title">Recent Work</h2>
          <div className="showcase-content">
            <div className="showcase-text">
              <h3>Transform Your Nails</h3>
              <p>From elegant classics to bold artistic designs, we bring your nail vision to life. Each design is carefully crafted with attention to detail and creativity.</p>
              <Link to="/gallery" className="secondary-button">
                View Gallery
              </Link>
            </div>
            <div className="showcase-placeholder">
              <div className="placeholder-box">
                <p>Gallery Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready for Your Perfect Nails?</h2>
          <p>Book your appointment today and experience the artistry of Avry's Nails.</p>
          <Link to="/contact" className="cta-button">
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

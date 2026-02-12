import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
    </div>
  );
};

export default Home;

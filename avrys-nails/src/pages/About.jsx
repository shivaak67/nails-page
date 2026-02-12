import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-main">
        <div className="about-content">
          <h1 className="page-title">About Avry's Nails</h1>
          <div className="about-text">
            <p>
              Welcome to Avry's Nails, where artistry meets elegance. 
              Founded with a passion for creating unique and stunning nail designs, 
              we specialize in custom nail artistry that expresses your individual style.
            </p>
            <p>
              Our mission is to provide exceptional nail services that not only enhance 
              your beauty but also boost your confidence. Each design is carefully crafted 
              with attention to detail, using only the highest quality products.
            </p>
            <p>
              Whether you're looking for a classic manicure, bold artistic designs, 
              or something uniquely yours, Avry's Nails is dedicated to bringing your 
              vision to life with precision and creativity.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

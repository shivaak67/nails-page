import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="collage-element collage-1"></div>
        <div className="collage-element collage-2"></div>
        <div className="collage-element collage-3"></div>
        <div className="collage-element collage-4"></div>
        <div className="collage-element collage-5"></div>
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-headline">PRESSED BY AVRY</h1>
        <p className="hero-subtext">Custom nails. Bold energy. Made to stand out.</p>
        <button className="hero-cta">Shop Sets</button>
      </div>
    </section>
  );
};

export default Hero;

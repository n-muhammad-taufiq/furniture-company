import './Hero.css';
import heroImg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-split-container">
        
        <div className="hero-content-side">
          <div className="hero-content">
            <p className="hero-tagline">New Arrivals 2026</p>
            <h1 className="hero-title">Refine Your<br/>Living Space.</h1>
            <p className="hero-description">
              Experience the pinnacle of modern Scandinavian design. Elegant, sustainable, and crafted for the contemporary home.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Shop Collection</button>
              <button className="btn btn-outline hero-btn-outline">Discover More</button>
            </div>
          </div>
        </div>

        <div className="hero-image-side">
          <img src={heroImg} alt="Modern Minimalist Interior" className="hero-img-split" />
        </div>

      </div>
    </section>
  );
};

export default Hero;

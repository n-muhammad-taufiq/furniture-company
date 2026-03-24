import './AboutSection.css';
import aboutImg from '../assets/about_bg.png';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-split">
        <div className="about-image-side">
          <img src={aboutImg} alt="Minimalist Interior" className="about-image-full" />
        </div>
        
        <div className="about-content-side">
          <div className="about-content-inner">
            <span className="section-tagline">Our Philosophy</span>
            <h2 className="section-title">Design That Speaks To The Soul.</h2>
            <p className="about-paragraph">
              At LuxeDecor, we believe that your home should be a reflection of your true self. We curate collections that embody the perfect balance of form, function, and timeless beauty.
            </p>
            <p className="about-paragraph">
              Every curve, every texture, and every material is selected with the utmost care, ensuring that our furniture not only fills a space but elevates it.
            </p>
            <button className="btn btn-primary" style={{ marginTop: '24px' }}>Read Our Story</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

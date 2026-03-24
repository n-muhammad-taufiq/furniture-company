import './Features.css';

const featuresList = [
  { title: 'Free Shipping', desc: 'On orders over ₹50,000' },
  { title: 'Secure Payment', desc: '100% secure checkout' },
  { title: '30 Days Return', desc: 'Money back guarantee' },
  { title: '24/7 Support', desc: 'Dedicated team' },
];

const Features = () => {
  return (
    <section className="features-container">
      <div className="container">
        <div className="features-grid">
          {featuresList.map((feature, idx) => (
            <div className="feature-item" key={idx}>
              <div className="feature-line"></div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

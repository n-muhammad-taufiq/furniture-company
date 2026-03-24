import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "The quality of the pieces we received completely surpassed our expectations. LuxeDecor has transformed our living space into a modern sanctuary.",
    author: "Elena R.",
    role: "Interior Enthusiast"
  },
  {
    id: 2,
    quote: "Minimalist, sustainable, and incredibly comfortable. The ordering process was seamless and the customer service is unmatched in the industry.",
    author: "Marcus T.",
    role: "Architect"
  },
  {
    id: 3,
    quote: "Every furniture piece feels like a work of art. The attention to detail in the woodwork and upholstery is absolutely stunning.",
    author: "Sarah L.",
    role: "Homeowner"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-tagline">Client Stories</span>
          <h2 className="section-title">Words from Our Community</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((test) => (
            <div className="testimonial-card" key={test.id}>
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{test.quote}</p>
              <div className="testimonial-author">
                <h4>{test.author}</h4>
                <span>{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

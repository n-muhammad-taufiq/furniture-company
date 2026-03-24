import './Journal.css';
import journal1Img from '../assets/journal_1.png';
import journal2Img from '../assets/journal_2.png';

const journalPosts = [
  {
    id: 1,
    title: "The Art of Selecting Sustainable Fabrics",
    date: "MARCH 15, 2026",
    category: "Materials",
    image: journal1Img,
    excerpt: "Discover the meticulous process behind sourcing eco-friendly linens and how they elevate your living space."
  },
  {
    id: 2,
    title: "Exquisite Joinery: A Closer Look",
    date: "MARCH 02, 2026",
    category: "Craftsmanship",
    image: journal2Img,
    excerpt: "Dive deep into the traditional woodworking techniques our artisans use to create seamless, durable furniture."
  }
];

const Journal = () => {
  return (
    <section className="journal-section section-padding" id="journal">
      <div className="container">
        <div className="section-header-split">
          <div>
            <span className="section-tagline">Design Journal</span>
            <h2 className="section-title">Latest Insights & Stories</h2>
          </div>
          <button className="btn btn-outline">Read All Articles</button>
        </div>
        
        <div className="journal-grid">
          {journalPosts.map((post) => (
            <article className="journal-card" key={post.id}>
              <div className="journal-img-container">
                <img src={post.image} alt={post.title} className="journal-img" />
              </div>
              <div className="journal-content">
                <div className="journal-meta">
                  <span className="journal-cat">{post.category}</span>
                  <span className="journal-date">{post.date}</span>
                </div>
                <h3 className="journal-title">{post.title}</h3>
                <p className="journal-excerpt">{post.excerpt}</p>
                <a href="#" className="journal-link">Read Article →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;

import './Categories.css';
import livingImg from '../assets/category_living.png';
import bedroomImg from '../assets/category_bedroom.png';
import diningImg from '../assets/category_dining.png';

const categories = [
  { id: 1, name: 'Living Room', image: livingImg, colSpan: 2 },
  { id: 2, name: 'Bedroom', image: bedroomImg, colSpan: 1 },
  { id: 3, name: 'Dining', image: diningImg, colSpan: 1 },
];

const Categories = () => {
  return (
    <section className="categories-section section-padding" id="categories">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tagline">Curated Spaces</span>
          <h2 className="section-title">Shop By Room</h2>
        </div>
        
        <div className="categories-grid">
          {categories.map((cat) => (
            <div className={`category-card col-span-${cat.colSpan}`} key={cat.id}>
              <img src={cat.image} alt={cat.name} className="category-img" />
              <div className="category-overlay">
                <div className="category-content">
                  <h3 className="category-title">{cat.name}</h3>
                  <button className="category-link">Explore →</button>
                </div>
              </div>
            </div>
          ))}
          <div className="category-card col-span-2 bg-text-card">
              <div className="text-card-inner">
                <h3 className="category-title" style={{ color: 'var(--primary)', fontSize: '28px', marginBottom: '16px' }}>Office & Workspace</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Discover ergonomic elegance designed for focus and productivity. Redefine your working environment.</p>
                <button className="btn btn-outline">Explore Office</button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

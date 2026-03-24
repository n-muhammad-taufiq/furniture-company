import './ProductGrid.css';
import sofaImg from '../assets/product_sofa.png';
import tableImg from '../assets/product_table.png';
import chairImg from '../assets/product_chair.png';

const products = [
  { id: 1, name: 'Bouclé Cloud Sofa', category: 'Seating', price: '$1,400', image: sofaImg },
  { id: 2, name: 'Oak dining Table', category: 'Dining', price: '$950', image: tableImg },
  { id: 3, name: 'Charcoal Lounge', category: 'Seating', price: '$620', image: chairImg },
];

const ProductGrid = () => {
  return (
    <section className="products-section section-padding" id="collections">
      <div className="container">
        <div className="section-header-split">
          <div>
            <span className="section-tagline">Trending Now</span>
            <h2 className="section-title">Minimalist Masterpieces</h2>
          </div>
          <button className="btn btn-outline">Explore All</button>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div className="product-item" key={product.id}>
              <div className="product-img-box">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-hover-overlay">
                  <button className="quick-add-btn">Quick Add</button>
                </div>
              </div>
              <div className="product-meta">
                <div className="meta-left">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-cat">{product.category}</p>
                </div>
                <div className="meta-right">
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

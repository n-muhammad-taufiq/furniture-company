import './ProductGrid.css';
import sofaImg from '../assets/product_sofa.png';
import tableImg from '../assets/product_table.png';
import chairImg from '../assets/product_chair.png';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Bouclé Cloud Sofa', category: 'Seating', price: '₹1,15,000', image: sofaImg },
  { id: 2, name: 'Oak dining Table', category: 'Dining', price: '₹75,500', image: tableImg },
  { id: 3, name: 'Charcoal Lounge', category: 'Seating', price: '₹55,000', image: chairImg },
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
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
                  <button className="quick-add-btn" onClick={() => onAddToCart(product)}>
                    Quick Add
                  </button>
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

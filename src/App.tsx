import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import ProductGrid, { type Product } from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import Footer from './components/Footer';
import CartOverlay, { type CartItem } from './components/CartOverlay';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setToastMessage(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="app-container">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Categories />
        <ProductGrid onAddToCart={handleAddToCart} />
        <AboutSection />
        <Testimonials />
        <Journal />
      </main>
      <Footer />

      <CartOverlay 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemove={handleRemoveFromCart} 
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* Toast Notification */}
      <div className={`toast-notification ${toastMessage ? 'visible' : ''}`}>
        {toastMessage}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { SearchIcon, UserIcon, CartIcon, MenuIcon } from './Icons';
import './Header.css';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header = ({ cartCount, onOpenCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list left-nav">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#collections" className="nav-link">Shop</a></li>
            <li><a href="#categories" className="nav-link">Rooms</a></li>
          </ul>
        </nav>

        <div className="logo-container">
          <span className="logo-text">LuxeDecor.</span>
        </div>

        <div className="header-actions">
           <ul className="nav-list right-nav desktop-only">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#journal" className="nav-link">Journal</a></li>
          </ul>
          <div className="action-icons">
            <button aria-label="Search" className="icon-btn"><SearchIcon /></button>
            <button aria-label="Account" className="icon-btn"><UserIcon /></button>
            <button aria-label="Cart" className={`icon-btn has-badge ${animateCart ? 'bubble-bounce' : ''}`} onClick={onOpenCart}>
              <CartIcon />
              <span className="cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

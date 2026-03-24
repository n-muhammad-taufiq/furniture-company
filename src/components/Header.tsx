import { useState } from 'react';
import { SearchIcon, UserIcon, CartIcon, MenuIcon } from './Icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        
        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list left-nav">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#shop" className="nav-link">Shop</a></li>
            <li><a href="#collections" className="nav-link">Collections</a></li>
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
            <button aria-label="Cart" className="icon-btn has-badge">
              <CartIcon />
              <span className="cart-badge">0</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

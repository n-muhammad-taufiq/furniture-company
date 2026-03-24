import './CartOverlay.css';

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}

const CartOverlay = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }: CartOverlayProps) => {
  // Convert "₹1,15,000" string to number to calculate subtotal
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
  };

  const subtotal = cartItems.reduce((total, item) => total + (parsePrice(item.price) * item.quantity), 0);
  const formattedSubtotal = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(subtotal);

  return (
    <>
      <div className={`cart-backdrop ${isOpen ? 'visible' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is currently empty.</p>
              <button className="btn btn-outline" onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-img-container">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <h4>{item.name}</h4>
                    <button className="cart-item-remove" onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                  <div className="cart-item-footer">
                    <div className="cart-item-qty-controls">
                      <button className="cart-qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                      <span className="cart-item-qty">{item.quantity}</span>
                      <button className="cart-qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                    </div>
                    <span className="cart-item-price">{item.price}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>{formattedSubtotal}</span>
            </div>
            <p className="cart-tax-note">Taxes and shipping calculated at checkout</p>
            <button className="btn btn-primary cart-checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartOverlay;

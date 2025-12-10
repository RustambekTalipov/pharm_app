import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { Features } from './components/Features';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Auth } from './components/Auth';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  prescription: boolean;
  inStock: boolean;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleLogin = (email: string) => {
    setUser(email);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (showAuth) {
    return <Auth onClose={() => setShowAuth(false)} onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={totalItems} 
        onCartClick={() => setIsCartOpen(true)}
        user={user}
        onAuthClick={() => setShowAuth(true)}
        onLogout={handleLogout}
      />
      <Hero />
      <Features />
      <ProductCatalog onAddToCart={addToCart} />
      <AboutSection />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}
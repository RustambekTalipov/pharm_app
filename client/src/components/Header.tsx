import { ShoppingCart, Phone, MapPin, Menu, User, LogOut } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  user: string | null;
  onAuthClick: () => void;
  onLogout: () => void;
}

export function Header({ cartItemCount, onCartClick, user, onAuthClick, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-pink-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="bg-pink-700">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-pink-200 transition">
                <Phone className="w-4 h-4" />
                <span>8 (800) 123-45-67</span>
              </a>
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
            <div className="text-sm">
              Работаем: Пн-Вс 8:00 - 22:00
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">💊</span>
            </div>
            <div>
              <h1 className="text-xl">Аптека Здоровье</h1>
              <p className="text-xs text-pink-100">Забота о вашем здоровье</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="hover:text-pink-200 transition">Каталог</a>
            <a href="#about" className="hover:text-pink-200 transition">О нас</a>
            <a href="#delivery" className="hover:text-pink-200 transition">Доставка</a>
            <a href="#contacts" className="hover:text-pink-200 transition">Контакты</a>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 bg-white text-pink-600 px-3 py-2 rounded-lg hover:bg-pink-50 transition"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden md:inline text-sm">{user.split('@')[0]}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700">
                    <a href="#profile" className="block px-4 py-2 hover:bg-gray-100">
                      Мой профиль
                    </a>
                    <a href="#orders" className="block px-4 py-2 hover:bg-gray-100">
                      Мои заказы
                    </a>
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Выйти
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="hidden md:flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition"
              >
                <User className="w-5 h-5" />
                <span>Войти</span>
              </button>
            )}

            <button
              onClick={onCartClick}
              className="relative bg-white text-pink-600 p-2 rounded-lg hover:bg-pink-50 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <a href="#catalog" className="hover:text-pink-200 transition">Каталог</a>
            <a href="#about" className="hover:text-pink-200 transition">О нас</a>
            <a href="#delivery" className="hover:text-pink-200 transition">Доставка</a>
            <a href="#contacts" className="hover:text-pink-200 transition">Контакты</a>
            {!user && (
              <button
                onClick={onAuthClick}
                className="text-left hover:text-pink-200 transition"
              >
                Войти
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
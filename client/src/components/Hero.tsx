import { Search } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику поиска
    console.log('Поиск:', searchQuery);
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Ваше здоровье — наш приоритет
            </h2>
            <p className="text-gray-600 mb-8">
              Широкий ассортимент лекарств, медицинских изделий и товаров для здоровья. 
              Быстрая доставка по городу и профессиональные консультации.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Поиск лекарств и товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Найти
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Популярное:</span>
              <button className="text-sm text-pink-600 hover:text-pink-700 underline">Витамины</button>
              <button className="text-sm text-pink-600 hover:text-pink-700 underline">Обезболивающие</button>
              <button className="text-sm text-pink-600 hover:text-pink-700 underline">Антибиотики</button>
            </div>
          </div>

          <div className="hidden md:block">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop"
              alt="Аптека"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
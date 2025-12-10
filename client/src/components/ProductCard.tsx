import { ShoppingCart, Info } from 'lucide-react';
import { Product } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="relative">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.prescription && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            По рецепту
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white">Нет в наличии</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-pink-600 mb-1">{product.category}</div>
        <h3 className="text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl text-gray-900">{product.price} ₽</span>
          </div>
          {product.inStock && (
            <button
              onClick={() => onAddToCart(product)}
              className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          )}
        </div>

        <button className="mt-3 w-full text-sm text-gray-600 hover:text-pink-600 transition flex items-center justify-center gap-1">
          <Info className="w-4 h-4" />
          Подробнее
        </button>
      </div>
    </div>
  );
}
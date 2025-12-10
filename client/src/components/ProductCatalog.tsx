import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../App';

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

export function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Обезболивающие', 'Витамины', 'Антибиотики', 'Простуда и грипп', 'Уход за кожей'];

  const products: Product[] = [
    {
      id: '1',
      name: 'Парацетамол 500мг',
      category: 'Обезболивающие',
      price: 45,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Жаропонижающее и обезболивающее средство'
    },
    {
      id: '2',
      name: 'Витамин C 1000мг',
      category: 'Витамины',
      price: 320,
      image: 'https://images.unsplash.com/photo-1550572017-4a6c3fbd8c0a?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Укрепление иммунитета'
    },
    {
      id: '3',
      name: 'Амоксициллин 500мг',
      category: 'Антибиотики',
      price: 180,
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop',
      prescription: true,
      inStock: true,
      description: 'Антибактериальный препарат широкого спектра'
    },
    {
      id: '4',
      name: 'Терафлю',
      category: 'Простуда и грипп',
      price: 420,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Комплексное средство от простуды'
    },
    {
      id: '5',
      name: 'Омега-3',
      category: 'Витамины',
      price: 850,
      image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Поддержка сердечно-сосудистой системы'
    },
    {
      id: '6',
      name: 'Пантенол крем',
      category: 'Уход за кожей',
      price: 280,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Заживление и увлажнение кожи'
    },
    {
      id: '7',
      name: 'Ибупрофен 400мг',
      category: 'Обезболивающие',
      price: 95,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Противовоспалительное и обезболивающее'
    },
    {
      id: '8',
      name: 'Мультивитамины',
      category: 'Витамины',
      price: 650,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop',
      prescription: false,
      inStock: true,
      description: 'Комплекс витаминов и минералов'
    }
  ];

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-900 text-center mb-8">
          Каталог товаров
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
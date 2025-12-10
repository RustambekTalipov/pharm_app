const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Разрешаем запросы с фронтенда
app.use(express.json());

// База данных (имитация) - данные из вашего ProductCatalog.tsx
const products = [
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
    }
    // ... остальные товары можно добавить сюда
];

// --- API ROUTES ---

// 1. Получить все товары
app.get('/api/products', (req, res) => {
    // Реализация фильтрации (если придет query параметр ?category=...)
    const category = req.query.category;
    if (category && category !== 'Все') {
        const filtered = products.filter(p => p.category === category);
        return res.json(filtered);
    }
    res.json(products);
});

// 2. Получить один товар по ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ message: 'Товар не найден' });
    res.json(product);
});

// 3. Оформить заказ (Заглушка)
app.post('/api/orders', (req, res) => {
    const { items, userEmail } = req.body;
    if (!items || items.length === 0) {
        return res.status(400).json({ message: 'Корзина пуста' });
    }
    // Здесь была бы логика сохранения в БД
    console.log(`Новый заказ от ${userEmail || 'Гостя'}:`, items);

    res.status(201).json({
        success: true,
        orderId: Math.floor(Math.random() * 10000),
        message: 'Заказ успешно оформлен'
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
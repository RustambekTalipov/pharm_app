import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacts" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <h3 className="text-lg">Аптека Здоровье</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Ваш надежный партнер в заботе о здоровье с 2009 года
            </p>
          </div>

          <div>
            <h4 className="mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition">О компании</a></li>
              <li><a href="#delivery" className="hover:text-white transition">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-white transition">Лицензии</a></li>
              <li><a href="#" className="hover:text-white transition">Вакансии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Покупателям</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Как сделать заказ</a></li>
              <li><a href="#" className="hover:text-white transition">Программа лояльности</a></li>
              <li><a href="#" className="hover:text-white transition">Возврат товара</a></li>
              <li><a href="#" className="hover:text-white transition">Частые вопросы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+78001234567" className="hover:text-white transition">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@apteka-zdorove.ru" className="hover:text-white transition">info@apteka-zdorove.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 Аптека Здоровье. Все права защищены.</p>
          <p className="mt-2">Информация на сайте не является публичной офертой</p>
        </div>
      </div>
    </footer>
  );
}
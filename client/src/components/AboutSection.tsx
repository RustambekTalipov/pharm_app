import { Award, Users, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-gray-900 mb-6">О нашей аптеке</h2>
            <p className="text-gray-600 mb-6">
              Аптека «Здоровье» работает более 15 лет, обеспечивая жителей города качественными 
              лекарственными препаратами и медицинскими изделиями. Мы гордимся нашей репутацией 
              и доверием клиентов.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900 mb-1">15+</div>
                  <div className="text-sm text-gray-600">лет на рынке</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900 mb-1">50 000+</div>
                  <div className="text-sm text-gray-600">клиентов</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">точек в городе</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-2xl text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">поддержка</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=400&fit=crop"
              alt="Аптека интерьер"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=400&fit=crop"
              alt="Фармацевт"
              className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
            />
          </div>
        </div>

        <div id="delivery" className="mt-16 bg-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">Условия доставки</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="text-gray-900 mb-2">Стандартная доставка</h4>
              <p className="text-gray-600 text-sm mb-3">В течение 2-3 часов</p>
              <p className="text-pink-600">Бесплатно от 1500 ₽</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="text-gray-900 mb-2">Экспресс доставка</h4>
              <p className="text-gray-600 text-sm mb-3">В течение 1 часа</p>
              <p className="text-pink-600">200 ₽</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="text-gray-900 mb-2">Самовывоз</h4>
              <p className="text-gray-600 text-sm mb-3">Из любой аптеки сети</p>
              <p className="text-pink-600">Бесплатно</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Truck, Clock, Shield, HeartPulse } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставка в течение 2-3 часов по городу'
    },
    {
      icon: Clock,
      title: 'Работаем без выходных',
      description: 'Ежедневно с 8:00 до 22:00'
    },
    {
      icon: Shield,
      title: 'Гарантия качества',
      description: 'Только сертифицированные препараты'
    },
    {
      icon: HeartPulse,
      title: 'Консультации',
      description: 'Бесплатная консультация фармацевта'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
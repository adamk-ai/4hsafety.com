import React from 'react';
import { HardHat, Factory, Leaf, Flame, Monitor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: HardHat,
      title: t('services.hse.title'),
      description: t('services.hse.description')
    },
    {
      icon: Factory,
      title: t('services.industrial.title'),
      description: t('services.industrial.description')
    },
    {
      icon: Leaf,
      title: t('services.environmental.title'),
      description: t('services.environmental.description')
    },
    {
      icon: Flame,
      title: t('services.fire.title'),
      description: t('services.fire.description')
    },
    {
      icon: Monitor,
      title: t('services.it.title'),
      description: t('services.it.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-red-100 max-w-4xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={40} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-red-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index + 3} className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={40} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-red-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
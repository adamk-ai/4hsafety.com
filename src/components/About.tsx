import React from 'react';
import { Target, Award, Users, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.values.efficiency'),
      description: t('about.values.efficiencyDesc')
    },
    {
      icon: Award,
      title: t('about.values.credibility'),
      description: t('about.values.credibilityDesc')
    },
    {
      icon: Heart,
      title: t('about.values.loyalty'),
      description: t('about.values.loyaltyDesc')
    },
    {
      icon: Users,
      title: t('about.values.harmony'),
      description: t('about.values.harmonyDesc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-green-600 mx-auto"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t('about.description')}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('about.family.title')}</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t('about.family.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
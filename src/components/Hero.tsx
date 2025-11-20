import React from 'react';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100; // Account for fixed header with extra padding
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-white">{t('hero.slogan.company')}</span>
              <br />
              <span className="text-red-500">{t('hero.slogan.safety')}</span>
              <br />
              <span className="text-white">{t('hero.slogan.isOur')}</span>
              <br />
              <span className="text-green-500">{t('hero.slogan.responsibility')}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-16 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-500">100%</div>
              <div className="text-sm text-gray-300">{t('hero.stats.quality')}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500">100%</div>
              <div className="text-sm text-gray-300">{t('hero.stats.safety')}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-500">ISO</div>
              <div className="text-sm text-gray-300">{t('hero.stats.certified')}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-500">HSE</div>
              <div className="text-sm text-gray-300">{t('hero.stats.expert')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Menu, X, Globe, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const languages = {
  en: 'English',
  hu: 'Magyar',
  sv: 'Svenska',
  it: 'Italiano',
  ko: '한국어',
  zh: '中文',
  de: 'Deutsch'
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-white">
              <img src="/4H logo uj copy.jpg" alt="4H Safety Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">4H Safety</h1>
              <p className="text-xs text-gray-600">in Everything</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t('nav.team')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t('nav.contact')}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors border border-gray-300 rounded-md px-3 py-2"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{languages[language]}</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border py-1">
                  {Object.entries(languages).map(([lang, name]) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang as Language)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                        language === lang ? 'text-red-600 font-medium bg-red-50' : 'text-gray-700'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.team')}
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.projects')}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.gallery')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors w-full text-left font-medium"
              >
                {t('nav.contact')}
              </button>
              {/* Mobile Language Selector */}
              <div className="px-3 py-2 border-t">
                <div className="flex items-center space-x-2 text-gray-700 mb-2">
                  <Globe size={18} />
                  <span className="font-medium text-sm">{t('nav.language')}</span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {Object.entries(languages).map(([lang, name]) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang as Language)}
                      className={`px-2 py-1 text-sm rounded transition-colors ${
                        language === lang ? 'text-red-600 bg-red-100 font-medium' : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
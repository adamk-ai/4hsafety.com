import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white">
                <img src="/logo uj.2 copy.png" alt="4H Safety Logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">4H Safety</h3>
                <p className="text-green-400 font-semibold">in Everything</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">{t('services.hse.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">{t('services.industrial.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">{t('services.environmental.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">{t('services.fire.title')}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors">{t('services.it.title')}</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-green-400 transition-colors">{t('footer.ourTeam')}</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors">{t('footer.projects')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">{t('footer.certifications')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.contactInfo')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-red-400 mt-0.5" />
                <a href="mailto:office@4hsafety.com" className="text-gray-300 hover:text-white transition-colors">
                  office@4hsafety.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-green-400 mt-0.5" />
                <a href="tel:+36301903376" className="text-gray-300 hover:text-white transition-colors">
                  +36/30-190-3376
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-400 mt-0.5" />
                <span className="text-gray-300">
                  Europe
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 4H Safety in Everything Kft. {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{t('footer.privacy')}</span>
              <span>•</span>
              <span>{t('footer.terms')}</span>
              <span>•</span>
              <span>{t('footer.iso')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
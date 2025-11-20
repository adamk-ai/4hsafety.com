import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <p className="font-bold text-gray-900 mb-3 text-lg">{t('contact.info.email')}</p>
              <a href="mailto:office@4hsafety.com" className="text-gray-700 hover:text-red-600 transition-colors font-semibold">
                office@4hsafety.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <p className="font-bold text-gray-900 mb-3 text-lg">{t('contact.info.phone')}</p>
              <a href="tel:+36301903376" className="text-gray-700 hover:text-green-600 transition-colors font-semibold">
                +36/30-190-3376
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <p className="font-bold text-gray-900 mb-3 text-lg">{t('contact.info.hours')}</p>
              <div className="text-gray-700 space-y-1 font-medium">
                <p>{t('contact.hours.weekday')}</p>
                <p>{t('contact.hours.saturday')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
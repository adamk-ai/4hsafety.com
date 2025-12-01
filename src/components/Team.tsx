import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TeamMember } from '../types';

export function Team() {
  const { t } = useLanguage();

  const ceo: TeamMember = {
    id: '1',
    name: 'Akos Horvath',
    position: t('team.ceo.position'),
    specialization: t('team.ceo.specialization'),
    description: t('team.ceo.description'),
    image: '/aki-website-photo.png',
    email: 'akos.horvath@office.4hsafety.com',
    linkedin: 'https://linkedin.com/in/akos-horvath'
  };

  const management: TeamMember[] = [
    {
      id: '2',
      name: 'Matyas Egyed',
      position: t('team.projectManager.position'),
      specialization: t('team.projectManager.specialization'),
      description: t('team.projectManager.description'),
      image: '/matyas-new.jpg',
      imagePosition: 'center 30%',
      email: 'matyas.egyed@office.4hsafety.com',
      linkedin: 'https://linkedin.com/in/matyas-egyed'
    },
    {
      id: '4',
      name: 'Mate Horvath',
      position: t('team.environmentalEngineer.position'),
      specialization: t('team.environmentalEngineer.specialization'),
      description: t('team.environmentalEngineer.description'),
      image: '/mate-new.jpg',
      imagePosition: 'center center',
      email: 'mate.horvath@office.4hsafety.com',
      linkedin: 'https://linkedin.com/in/mate-horvath'
    }
  ];

  const team: TeamMember[] = [
    {
      id: '3',
      name: 'Viktor Varhegyi',
      position: t('team.safetyCoordinator.position'),
      specialization: t('team.safetyCoordinator.specialization'),
      description: t('team.safetyCoordinator.description'),
      image: '/viktor-varhegyi.jpg',
      imagePosition: 'center 25%',
      email: 'viktor.varhegyi@office.4hsafety.com',
      linkedin: 'https://linkedin.com/in/viktor-varhegyi'
    },
    {
      id: '5',
      name: 'Adam Kiss',
      position: t('team.officeAdmin.position'),
      specialization: t('team.officeAdmin.specialization'),
      description: t('team.officeAdmin.description'),
      image: '/adam-new.jpg',
      imagePosition: 'center 30%',
      email: 'adam.kiss@office.4hsafety.com',
      linkedin: 'https://linkedin.com/in/adam-kiss'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('team.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        {/* CEO - Top Level */}
        <div className="flex justify-center mb-12">
          <div className="group text-center">
            <div className="relative mb-6">
              <div className="w-56 h-56 mx-auto rounded-full overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-4 ring-red-600">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-full object-cover object-center filter transition-all duration-500 grayscale contrast-110 brightness-105 group-hover:grayscale-0 group-hover:brightness-110"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            </div>

            <div className="space-y-3 px-2 max-w-xs mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                  {ceo.name}
                </h3>
                <p className="text-red-600 font-semibold text-base mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {ceo.position}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Management - Second Level */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl">
            {management.map((member, index) => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-500 ring-2 ring-gray-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center filter transition-all duration-500 grayscale contrast-110 brightness-105 group-hover:grayscale-0 group-hover:brightness-110"
                      style={{ objectPosition: member.imagePosition || 'center 20%' }}
                    />
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-semibold text-sm mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team - Third Level */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl">
            {team.map((member, index) => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center filter transition-all duration-500 grayscale contrast-110 brightness-105 group-hover:grayscale-0 group-hover:brightness-110"
                      style={{ objectPosition: member.imagePosition || 'center 20%' }}
                    />
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-semibold text-sm mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
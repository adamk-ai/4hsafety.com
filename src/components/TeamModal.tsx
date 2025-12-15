import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { TeamMember } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !member) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const detailedDescriptionKey = member.id === '1' ? 'team.ceo.detailedDescription' :
    member.id === '6' ? 'team.engineeringManager.detailedDescription' :
    member.id === '2' ? 'team.projectManager.detailedDescription' :
    member.id === '4' ? 'team.environmentalEngineer.detailedDescription' :
    member.id === '3' ? 'team.safetyCoordinator.detailedDescription' :
    member.id === '5' ? 'team.officeAdmin.detailedDescription' :
    'team.safetyCoordinator.detailedDescription';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-slideUp">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: member.imagePosition || 'center 20%' }}
                />
              </div>
            </div>

            <div className="md:w-2/3 space-y-4">
              <div>
                <p className="text-red-600 font-semibold text-lg mb-2">
                  {member.position}
                </p>
                {member.previousPosition && (
                  <p className="text-gray-500 text-sm mb-2">
                    {t('team.formerly')} {member.previousPosition}
                  </p>
                )}
                <p className="text-gray-600 font-medium">
                  {member.specialization}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {t(detailedDescriptionKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

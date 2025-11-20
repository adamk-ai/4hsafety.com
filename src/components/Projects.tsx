import React from 'react';
import { Calendar, MapPin, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types';

export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const projects: Project[] = [
    {
      id: '1',
      title: t('projects.sweden.title'),
      description: t('projects.sweden.description'),
      image: '/sweden/4b4beec3-4da8-4426-bf7d-1b95e5d8ee copy copy.jpg',
      gallery: [
        '/sweden/4b4beec3-4da8-4426-bf7d-1b95e5d8ee copy copy.jpg',
        '/sweden/4b4beec3-4da8-4426-bf7d-1b95e5d8ee44 copy copy.jpg',
        '/sweden/07e2f6ac-d98c-4285-ad81-b22647db3e2c copy copy.jpg',
        '/sweden/8c3706c7-0b9a-4715-8a88-806bf49c68d9 copy copy.jpg',
        '/sweden/39866fad-1346-4ceb-a28c-15749726a9dc copy copy.jpg',
        '/sweden/4304967c-9fc6-4e6e-b3b6-3d35a02af321 copy copy.jpg',
        '/sweden/71014859-4955-4f54-a6cf-15189ba3bfac copy copy.jpg',
        '/sweden/a1743477-eb86-4630-b861-c4416ed74cf2 (1) copy copy.jpg',
        '/sweden/c1e3a9d9-f318-4930-932f-e0db296f4951 copy copy.jpg',
        '/sweden/ddbb3ce1-8473-482e-9beb-ad5fde0ef174 copy copy.jpg'
      ],
      technologies: [],
      category: t('projects.sweden.category'),
      client: t('projects.sweden.client'),
      completed: t('projects.sweden.completed')
    },
    {
      id: '2',
      title: t('projects.italy.title'),
      description: t('projects.italy.description'),
      image: '/italy/8947d42f-f292-41cf-b567-63cd394fe6cb.jpg',
      gallery: [
        '/italy/8947d42f-f292-41cf-b567-63cd394fe6cb.jpg',
        '/italy/a15ebaee-95e7-424a-b049-bc0a1171ff93.jpg',
        '/italy/0eb6b90fe637aa6520793adc775fd7fd.JPEG',
        '/italy/4183aa5de5bb8bd50e60c0c7ebd6afff.JPEG',
        '/italy/4e6185153f2aafb1526dd91581fbf47a.JPEG',
        '/italy/71d517678a51e7625903268150922381.JPEG',
        '/italy/77d54bbfff63c9beb92d31976b25abe6.JPEG',
        '/italy/97befc896d8bd95b4b0376311acf55ee.JPEG',
        '/italy/a08ed002ab39824713d6e6ef56dad8f7.JPEG',
        '/sicily/PHOTO-2025-09-29-14-13-13.jpg',
        '/sicily/PHOTO-2025-09-29-14-13-12 1.jpg'
      ],
      technologies: [],
      category: t('projects.italy.category'),
      client: t('projects.italy.client'),
      completed: t('projects.italy.completed')
    }
  ];

  const categoryColors = {
    'Industrial Safety': 'bg-red-100 text-red-800',
    'Environmental Safety': 'bg-green-100 text-green-800',
    'Fire Safety': 'bg-orange-100 text-orange-800',
    'IT Systems': 'bg-blue-100 text-blue-800',
    'HSE Service': 'bg-purple-100 text-purple-800'
  };

  const openGallery = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-400 mb-2">{project.title}</div>
                      <div className="text-sm text-gray-500">{project.description}</div>
                    </div>
                  </div>
                )}
                {project.image && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {project.client && (
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin size={16} />
                        <span>{project.client}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{project.completed}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {project.gallery.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <button
                      onClick={() => openGallery(project, 0)}
                      className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                    >
                      <span>{t('projects.gallery')} ({project.gallery.length} {t('projects.photos')})</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full h-full flex items-center">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {selectedProject.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-[20rem] top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Gallery Content */}
            <div className="w-full h-full flex">
              {/* Main Image Area */}
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="relative max-w-4xl w-full">
                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.gallery.length}
                  </div>
                </div>
              </div>

              {/* Project Info Sidebar */}
              <div className="w-80 bg-white/95 backdrop-blur-sm p-6 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[selectedProject.category as keyof typeof categoryColors]}`}>
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin size={16} />
                      <span>{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{selectedProject.completed}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{t('projects.technologiesUsed')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  {selectedProject.gallery.length > 1 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">{t('projects.gallery')} ({selectedProject.gallery.length} {t('projects.photos')}):</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProject.gallery.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                              index === currentImageIndex ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
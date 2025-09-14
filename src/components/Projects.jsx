import React, { useState } from 'react';
import { Code, ExternalLink, X, Eye } from 'lucide-react';
import { projects } from '../data/content';

const Projects = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="projects"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
      }`}
    >
      {/* Background decoration */}
      <div
        className={`absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-blue-500/10' : 'bg-blue-200/50'
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-purple-500/10' : 'bg-purple-200/50'
        }`}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Showcasing my latest work and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in ${
                darkMode
                  ? 'bg-gray-800/90 backdrop-blur-sm border-gray-700/50 hover:border-blue-500/30'
                  : 'bg-white/90 backdrop-blur-sm border-gray-200/50 hover:border-blue-300/50 hover:shadow-blue-100/50'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image Section */}
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Code size={20} className="text-white" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transition-all duration-200 transform hover:scale-110"
                      aria-label="Project Link"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p
                  className={`text-base mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4
                    className={`font-semibold mb-3 text-sm uppercase tracking-wide ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm transition-colors duration-200 hover:translate-x-1 ${
                          darkMode
                            ? 'text-gray-300 hover:text-white'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md ${
                        darkMode
                          ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-800/50'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200/50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`text-xs font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {project.period}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Project preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fade-in {
            opacity: 0;
            animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(40px) scale(0.95);
            }
            to { 
              opacity: 1; 
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;

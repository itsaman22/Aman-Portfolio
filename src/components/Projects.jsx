import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';

const Projects = ({ darkMode }) => (
  <section
    id="projects"
    className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    }`}
  >
    <div className="max-w-6xl mx-auto">
      <h2
        className={`text-3xl font-bold mb-12 text-center tracking-tight ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group p-7 rounded-2xl border shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700'
                : 'bg-white border-gray-200'
            }`}
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Code size={22} className="text-blue-400" />
                <h3
                  className={`text-xl font-semibold ${
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
                    className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p
                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                mb-4
              >
                {project.description}
              </p>
              <div className="mb-4">
                <h4
                  className={`font-medium mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 text-xs rounded-full font-semibold shadow-sm transition-transform duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {project.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Fade-in animation keyframes */}
    <style>
      {`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: none;}
        }
      `}
    </style>
  </section>
);

export default Projects;

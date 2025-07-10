import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';

const Projects = () => (
  <section
    id="projects"
    className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50"
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white p-7 rounded-2xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            {/* Subtle Glow Border on Hover */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              style={{
                boxShadow: '0 0 0 4px #bae6fd',
                background: 'transparent',
                filter: 'blur(0px)',
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Code size={22} className="text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-500 hover:text-blue-700 transition-colors"
                    aria-label="Project Link"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                      <span className="text-blue-600 mt-1">•</span>
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
              <div className="text-sm text-gray-500">{project.period}</div>
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

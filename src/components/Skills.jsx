import React from 'react';
import { Code, Award } from 'lucide-react';
import { skills, certifications } from '../data/content';

const Skills = () => (
  <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 animate-fade-in">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={category}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
          >
            <h3 className="font-semibold text-gray-900 mb-4 capitalize flex items-center gap-2">
              <Code size={18} />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 text-sm rounded-full font-semibold shadow-sm transition-transform duration-200 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white/90 p-6 rounded-lg shadow-sm border border-blue-100 transition-shadow duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Award size={20} />
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-2 text-gray-600">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-sm">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
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

export default Skills;

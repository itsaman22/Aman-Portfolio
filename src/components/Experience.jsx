import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/content';

const Experience = () => (
  <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 animate-fade-in">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Briefcase size={20} />
                  {exp.role}
                </h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <div className="text-gray-500 text-sm">{exp.period}</div>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
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

export default Experience;

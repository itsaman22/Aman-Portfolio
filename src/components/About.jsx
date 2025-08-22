import React from 'react';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = ({ darkMode }) => (
  <section
    id="about"
    className={`py-14 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-white via-blue-50 to-teal-50'
    } animate-fade-in`}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 text-center tracking-tight ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className={`mb-6 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm a passionate Computer Science student specializing in Artificial Intelligence & Machine Learning,
            currently pursuing my B.Tech from Noida Institute of Engineering and Technology. Expected to graduate in 2026.
          </p>
          <p className={`mb-6 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            With hands-on experience in React development and a strong foundation in AI/ML, I love creating
            innovative solutions that bridge the gap between technology and user experience.
          </p>
          <div className={`flex items-center gap-4 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              Greater Noida, UP
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-400" />
              Available for opportunities
            </div>
          </div>
        </div>
        <div className={`p-7 rounded-xl border shadow-md transition-shadow duration-300 hover:shadow-lg ${
          darkMode 
            ? 'bg-gray-800/80 border-gray-700' 
            : 'bg-white/80 border-blue-100'
        }`}>
          <h3 className={`font-semibold mb-4 flex items-center gap-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <GraduationCap size={20} className="text-blue-400" />
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className={`font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>B.Tech in Computer Science - AI & ML</h4>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Noida Institute of Engineering and Technology</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Expected 2026</p>
            </div>
            <div>
              <h4 className={`font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>High School & Intermediate</h4>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>St. Giri Public School, New Delhi</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Completed 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
      {`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: none;}
        }
      `}
    </style>
  </section>
);

export default About;

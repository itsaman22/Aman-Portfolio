import React from 'react';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = () => (
  <section
    id="about"
    className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 animate-fade-in"
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm a passionate Computer Science student specializing in Artificial Intelligence & Machine Learning,
            currently pursuing my B.Tech from Noida Institute of Engineering and Technology. Expected to graduate in 2026.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With hands-on experience in React development and a strong foundation in AI/ML, I love creating
            innovative solutions that bridge the gap between technology and user experience.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Greater Noida, UP
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              Available for opportunities
            </div>
          </div>
        </div>
        <div className="bg-white/80 p-7 rounded-xl border border-blue-100 shadow-md transition-shadow duration-300 hover:shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GraduationCap size={20} />
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">B.Tech in Computer Science - AI & ML</h4>
              <p className="text-gray-600">Noida Institute of Engineering and Technology</p>
              <p className="text-sm text-gray-500">Expected 2026</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">High School & Intermediate</h4>
              <p className="text-gray-600">St. Giri Public School, New Delhi</p>
              <p className="text-sm text-gray-500">Completed 2021</p>
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

import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = ({ darkMode }) => (
  <section id="contact" className={`py-12 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
    darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
      : 'bg-gradient-to-br from-white via-blue-50 to-teal-50'
  } animate-fade-in`}>
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 text-center ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>Get in Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className={`mb-8 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:aman9036singh@gmail.com"
            className={`flex items-center justify-center gap-3 p-4 rounded-lg border shadow-sm transition-all duration-300 group hover:-translate-y-1 ${
              darkMode 
                ? 'bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-900/20' 
                : 'bg-blue-50 border-blue-100 hover:shadow-lg'
            }`}
          >
            <Mail size={20} className="text-blue-400" />
            <span className={`group-hover:text-blue-400 transition-colors ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>aman9036singh@gmail.com</span>
          </a>
          <a
            href="tel:+919310871271"
            className={`flex items-center justify-center gap-3 p-4 rounded-lg border shadow-sm transition-all duration-300 group hover:-translate-y-1 ${
              darkMode 
                ? 'bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-900/20' 
                : 'bg-green-50 border-green-100 hover:shadow-lg'
            }`}
          >
            <Phone size={20} className="text-blue-400" />
            <span className={`group-hover:text-blue-400 transition-colors ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>+91 9310871271</span>
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/itsaman22"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border shadow-md transition-all duration-300 group hover:-translate-y-1 ${
              darkMode 
                ? 'bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-900/20' 
                : 'bg-gray-100 border-gray-200 hover:shadow-md hover:bg-gray-200'
            }`}
          >
            <Github size={20} className={`group-hover:text-blue-400 transition-colors ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`} />
            <span className={`group-hover:text-blue-400 transition-colors ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aman-singh-baghel-697130224/"
            className={`flex items-center gap-2 px-6 py-3 rounded-lg border shadow-md transition-all duration-300 group hover:-translate-y-1 ${
              darkMode 
                ? 'bg-gray-800/80 border-gray-700 hover:shadow-xl hover:shadow-blue-900/20' 
                : 'bg-blue-100 border-blue-200 hover:shadow-md hover:bg-blue-200'
            }`}
          >
            <Linkedin size={20} className={`group-hover:text-blue-400 transition-colors ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`} />
            <span className={`group-hover:text-blue-400 transition-colors ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>LinkedIn</span>
          </a>
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

export default Contact;

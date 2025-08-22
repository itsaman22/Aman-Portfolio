import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = ({ darkMode }) => (
  <section
    id="home"
    className={`relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    }`}
  >
    {/* Animated Background Elements */}
    <div
      className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse ${
        darkMode ? 'bg-blue-500/10' : 'bg-blue-100'
      }`}
    ></div>
    <div
      className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse delay-700 ${
        darkMode ? 'bg-blue-400/10' : 'bg-blue-200'
      }`}
    ></div>

    <div className="relative max-w-6xl mx-auto text-center animate-fade-in z-10">
      <h2
        className={`text-lg font-semibold tracking-wide mb-2 ${
          darkMode ? 'text-blue-400' : 'text-blue-600'
        }`}
      >
        Welcome to my portfolio
      </h2>
      <h1
        className={`text-4xl md:text-6xl font-extrabold mb-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Hello, I'm{' '}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Aman
        </span>
      </h1>
      <p
        className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        Java, Web Developer & AI/ML Enthusiast crafting modern web experiences
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="mailto:aman9036singh@gmail.com"
          className="flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 font-medium"
        >
          <Mail size={20} />
          Get in Touch
        </a>
        <a
          href="tel:+919310871271"
          className={`flex items-center gap-2 px-7 py-3 rounded-lg shadow transition-all duration-200 font-medium ${
            darkMode
              ? 'bg-gray-800/50 backdrop-blur text-gray-300 border border-gray-700 hover:border-blue-500/50'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Phone size={20} />
          Call Me
        </a>
      </div>

      <div className="flex justify-center gap-8 mb-8">
        <a
          href="https://github.com/itsaman22"
          className={`transition-colors duration-200 transform hover:scale-110 ${
            darkMode
              ? 'text-gray-400 hover:text-blue-400'
              : 'text-gray-500 hover:text-blue-600'
          }`}
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-singh-baghel-697130224/"
          className={`transition-colors duration-200 transform hover:scale-110 ${
            darkMode
              ? 'text-gray-400 hover:text-blue-400'
              : 'text-gray-500 hover:text-blue-600'
          }`}
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
      </div>

      <div className="flex justify-center mt-4">
        <ArrowDown className="animate-bounce text-blue-400" size={32} />
      </div>
    </div>

    <style>
      {`
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: none;}
        }
      `}
    </style>
  </section>
);

export default Hero;

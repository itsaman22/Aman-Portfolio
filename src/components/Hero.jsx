import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowDown } from 'lucide-react';

const Hero = ({ darkMode }) => (
  <section
    id="home"
    className={`relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-300 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900' // use solid dark gradient
        : 'bg-gradient-to-br from-blue-50 via-white to-teal-50'
    }`}
  >
    {/* Animated Background Elements */}
    <div
      className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse ${
        darkMode
          ? 'bg-blue-900/20' // darker, less opaque for dark mode
          : 'bg-blue-100/40' // less opaque for light mode
      }`}
    ></div>
    <div
      className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse delay-700 ${
        darkMode
          ? 'bg-blue-800/20' // darker, less opaque for dark mode
          : 'bg-blue-200/40' // less opaque for light mode
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
        <a
          href="https://leetcode.com/itsaman22"
          className={`transition-colors duration-200 transform hover:scale-110 ${
            darkMode
              ? 'text-gray-400 hover:text-blue-400'
              : 'text-gray-500 hover:text-blue-600'
          }`}
          aria-label="LeetCode"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.841 2.133 8.062-.074l2.36-2.335A1.314 1.314 0 0 0 18.5 19.32a1.8 1.8 0 0 0-1.909-1.909 1.8 1.8 0 0 0-1.296.53l-2.364 2.339a2.08 2.08 0 0 1-2.91 0l-3.681-3.706a2.062 2.062 0 0 1-.498-2.614 2.14 2.14 0 0 1 .459-.587l5.861-6.13a2.083 2.083 0 0 1 2.91 0l.034.04a2.092 2.092 0 0 1 0 2.96l-2.935 3.08a.67.67 0 0 1-.942 0 .67.67 0 0 1 0-.943l2.208-2.315a.924.924 0 0 0 0-1.319.924.924 0 0 0-1.319 0l-2.208 2.315a2.7 2.7 0 0 0 0 3.81 2.7 2.7 0 0 0 3.81 0L16.626 9.7a4.498 4.498 0 0 0-.647-6.967 4.613 4.613 0 0 0-6.428.647l-5.861 6.13a4.35 4.35 0 0 0-1.055 1.918 4.236 4.236 0 0 0 1.016 4.331l3.681 3.706a4.3 4.3 0 0 0 6.002 0l2.364-2.339a3.9 3.9 0 0 1 5.423 5.632l-2.36 2.335a7.706 7.706 0 0 1-10.661.074l-.039-.038-4.277-4.193a8.138 8.138 0 0 1-1.738-2.415 8.025 8.025 0 0 1-.477-1.396 7.15 7.15 0 0 1-.084-3.06 7.14 7.14 0 0 1 .171-.704 7.202 7.202 0 0 1 1.653-2.878L7.116 2.044A3.688 3.688 0 0 1 13.483 0z"
              fill="currentColor"
            />
          </svg>
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

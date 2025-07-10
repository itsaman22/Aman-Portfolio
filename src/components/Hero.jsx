import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowDown } from 'lucide-react';
import MyPicprofileSquare from '../assets/MyPicprofileSquare.jpg';
const Hero = () => (
  <section
    id="home"
    className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
    }}
  >
    {/* Animated Gradient Circles */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>

    <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
      {/* Profile Image */}
      <img
        src={MyPicprofileSquare}
        alt="Aman"
        className="mx-auto mb-6 w-32 h-32 rounded-full shadow-lg border-4 border-white object-cover"
      />
      <h2 className="text-lg text-blue-500 font-semibold tracking-wide mb-2">
        Welcome to my portfolio
      </h2>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Hello, I'm <span className="text-blue-600">Aman</span>

        
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
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
          className="flex items-center gap-2 px-7 py-3 border border-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-100 transition-all duration-200 font-medium"
        >
          <Phone size={20} />
          Call Me
        </a>
      </div>
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="https://github.com/itsaman22"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-singh-baghel-697130224/"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
      </div>
      {/* Animated Arrow Down */}
      <div className="flex justify-center mt-4">
        <ArrowDown className="animate-bounce text-blue-400" size={32} />
      </div>
    </div>
    {/* Fade-in animation keyframes */}
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

import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-700 animate-fade-in">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-gray-300">
        © 2024 Aman Singh Baghel. Built with{' '}
        <span className="text-blue-300 font-semibold">React</span> &{' '}
        <span className="text-teal-300 font-semibold">Tailwind CSS</span>.
      </p>
    </div>
    <style>
      {`
        .animate-fade-in {
          opacity: 0;
          animation: fadeInFooter 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes fadeInFooter {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: none;}
        }
      `}
    </style>
  </footer>
);

export default Footer;

import React, { useState } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-blue-700 tracking-tight drop-shadow-sm">
            Aman Singh Baghel
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-sm font-medium capitalize transition-colors duration-200 px-1
                  ${activeSection === section
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'}
                `}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 rounded-full animate-slide-in"></span>
                )}
              </button>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4 bg-white/90 rounded-lg shadow animate-fade-in">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setMenuOpen(false);
                }}
                className={`text-base font-medium capitalize px-3 py-2 rounded transition-colors duration-200
                  ${activeSection === section
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'}
                `}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Animations */}
      <style>
        {`
          .animate-slide-in {
            animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes slideIn {
            from { width: 0; opacity: 0; }
            to { width: 100%; opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: none;}
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;

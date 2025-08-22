import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen transition-colors duration-300`}>
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;

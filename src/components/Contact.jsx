import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 animate-fade-in">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 mb-8">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:aman9036singh@gmail.com"
            className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
          >
            <Mail size={20} className="text-blue-600" />
            <span className="text-gray-700 group-hover:text-blue-600">aman9036singh@gmail.com</span>
          </a>
          <a
            href="tel:+919310871271"
            className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
          >
            <Phone size={20} className="text-green-600" />
            <span className="text-gray-700 group-hover:text-green-600">+91 9310871271</span>
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/itsaman22"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-200 transition-all duration-200 hover:-translate-y-1"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aman-singh-baghel-697130224/"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg border border-blue-200 shadow-sm hover:shadow-md hover:bg-blue-200 transition-all duration-200 hover:-translate-y-1"
          >
            <Linkedin size={20} />
            LinkedIn
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

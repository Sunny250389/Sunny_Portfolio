import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm <span className="text-teal-600">Sunny Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">
            Test Automation Lead
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Senior Test Engineer with 12 years of experience in UI, API, Database and Machine Learning 
            model testing. Specialized in test automation using Python, Selenium, Robot Framework, 
            and ML algorithm testing in Agile environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="/Sunny_Portfolio/public/Sunny_Automation_Resume.pdf"
              download
              className="flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-200 transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 hover:text-teal-600 transition-colors duration-200 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
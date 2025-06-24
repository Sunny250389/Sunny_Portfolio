import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sunny Kumar</h3>
            <p className="text-slate-300 leading-relaxed">
              Test Automation Lead with 12 years of experience in comprehensive testing, 
              specializing in ML model validation, test automation frameworks, and quality 
              assurance across healthcare, finance, and telecom domains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-slate-300 hover:text-teal-400 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-300">
              <p>sunny250389@gmail.com</p>
              <p>+91 7676153621</p>
              <p>Bangalore, Karnataka</p>
              <div className="mt-4">
                <p className="text-sm">Specializing in:</p>
                <p className="text-sm">Test Automation • ML Testing • API Testing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 mb-4 md:mb-0">
              © {currentYear} Sunny Kumar. All rights reserved.
            </p>
            <p className="text-slate-300 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> 
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
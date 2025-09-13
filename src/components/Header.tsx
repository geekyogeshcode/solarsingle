import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div onClick={() => scrollToSection('hero')} className="flex items-center space-x-2 cursor-pointer">
            <Sun className="w-8 h-8 text-sky-500" />
            <span className="text-2xl font-bold text-gray-900">SolarTech</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
             <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors font-medium"
            >
              Get Quote
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors font-medium text-left w-fit"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
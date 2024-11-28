"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-600">HiilCore - Intelligent IoT Solutions</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="text-lg hover:text-blue-600 transition-colors duration-200"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-lg hover:text-blue-600 transition-colors duration-200"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="text-lg hover:text-blue-600 transition-colors duration-200"
          >
            Demo
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-lg hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('solutions')} 
              className="py-2 text-lg hover:text-blue-600 transition-colors duration-200"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="py-2 text-lg hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('demo')} 
              className="py-2 text-lg hover:text-blue-600 transition-colors duration-200"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-2 text-lg hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

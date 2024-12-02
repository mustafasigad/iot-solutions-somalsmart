"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (sectionId) => {
    if (pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, go to home first then scroll
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-wide">
          HiilCore - Intelligent IoT Solutions
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link 
            href="/"
            className="text-lg hover:text-blue-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/solutions"
            className="text-lg hover:text-blue-300 transition-colors duration-200"
          >
            Solutions
          </Link>
          <button 
            onClick={() => handleNavigation('features')} 
            className="text-lg hover:text-blue-300 transition-colors duration-200"
          >
            Features
          </button>
          <Link
            href="/demo"
            className="text-lg hover:text-blue-300 transition-colors duration-200"
          >
            Demo
          </Link>
          <button 
            onClick={() => handleNavigation('contact')} 
            className="text-lg hover:text-blue-300 transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 bg-white">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="px-4 py-2 text-lg text-blue-600 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="px-4 py-2 text-lg text-blue-600 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <button 
              onClick={() => handleNavigation('features')}
              className="px-4 py-2 text-left text-lg text-blue-600 hover:text-blue-700"
            >
              Features
            </button>
            <Link
              href="/demo"
              className="px-4 py-2 text-lg text-blue-600 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <button 
              onClick={() => handleNavigation('contact')}
              className="px-4 py-2 text-left text-lg text-blue-600 hover:text-blue-700"
            >
              Contact
            </button>
          </div>
        </nav>
      )}

      {/* Floating Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex gap-4">
          <Link 
            href="/"
            className="text-white hover:text-blue-300 transition-colors px-3 py-1"
          >
            Home
          </Link>
          <Link 
            href="/solutions"
            className="text-white hover:text-blue-300 transition-colors px-3 py-1"
          >
            Solutions
          </Link>
          <Link 
            href="/demo"
            className="text-white hover:text-blue-300 transition-colors px-3 py-1"
          >
            Demo
          </Link>
        </nav>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </header>
  );
}
"use client"

import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ChakraOrb = ({ delay = 0 }) => {
  return (
    <div className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        animation: `float ${Math.random() * 10 + 20}s infinite ${delay}s`
      }}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 animate-pulse"
          style={{ animationDuration: '3s' }} />
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-40 animate-pulse"
          style={{ animationDuration: '4s' }} />
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 animate-pulse"
          style={{ animationDuration: '5s' }} />
      </div>
    </div>
  );
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translate(100px) rotate(0deg); }
        50% { transform: translate(-50%, -50%) rotate(180deg) translate(100px) rotate(-180deg); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <ChakraOrb key={i} delay={i * 2} />
        ))}
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-slate-900/80" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 
            className="text-5xl md:text-7xl font-bold"
            style={{
              animation: 'fadeSlideUp 1s ease-out forwards',
              opacity: 0
            }}
          >
            Smart IoT Solutions
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              for Modern Business
            </span>
          </h1>

          <p 
            className="text-xl md:text-2xl max-w-2xl text-blue-100"
            style={{
              animation: 'fadeSlideUp 1s ease-out 0.3s forwards',
              opacity: 0
            }}
          >
            Empowering businesses and individuals with cutting-edge IoT technology.
          </p>

          <button 
            onClick={scrollToContact}
            className="relative group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            style={{
              animation: 'fadeSlideUp 1s ease-out 0.6s forwards',
              opacity: 0
            }}
          >
            <span className="relative z-10 flex items-center">
              Get Started
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </header>
  );
}
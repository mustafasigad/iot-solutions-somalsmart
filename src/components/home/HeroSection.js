// src/components/home/HeroSection.js
"use client"

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 50 + 10,
        duration: Math.random() * 3 + 2
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              animation: `pulse ${particle.duration}s infinite`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Smart IoT Solutions for Modern Business
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-fade-in-delay">
            Empowering businesses and individuals with cutting-edge IoT technology.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 flex items-center transform hover:scale-105 transition-all">
            Get Started <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
}
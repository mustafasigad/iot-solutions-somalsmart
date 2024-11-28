"use client";
import React from 'react';
import { ChevronRight, Signal } from 'lucide-react';

const NetworkNode = ({ Icon, color, size, style }) => (
  <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={style}>
    <div className={`text-${color} animate-pulse`}>
      <Icon size={size} />
    </div>
    <div className={`absolute inset-0 bg-${color} rounded-full animate-ping opacity-20`} />
    <div className={`absolute inset-0 bg-${color} rounded-full animate-pulse opacity-40`} />
  </div>
);

const DataStream = ({ style }) => (
  <div className="absolute h-0.5 bg-gradient-to-r from-cyan-500 to-transparent animate-[moveRight_2s_linear_infinite]" style={style} />
);

export default function HeroSection() {
  return (
    <header className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-900 text-white overflow-hidden h-[400px] flex items-center justify-center">
      {/* Sensors Network */}
      <div className="absolute inset-0">
     
        
        {/* Data Streams */}
        {Array.from({ length: 8 }).map((_, i) => (
          <DataStream 
            key={`stream-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '100px',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes moveRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            Smart IoT Solutions for Modern Business
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-fade-in-delay text-blue-100">
            Empowering businesses with cutting-edge IoT technology.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 px-8 py-3 rounded-full font-semibold text-white flex items-center transform hover:scale-105 transition-all shadow-lg hover:shadow-cyan-500/50"
          >
            Get Started <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
}

// src/components/home/SolutionsSection.js
"use client"

import { Droplets, Building2, Home } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Water Level Monitoring",
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      description: "Real-time water level monitoring for tanks, reservoirs, and water systems."
    },
    {
      title: "Smart Building Solutions",
      icon: <Building2 className="h-8 w-8 text-blue-500" />,
      description: "Automate and monitor building systems including HVAC, lighting, and security."
    },
    {
      title: "Home Automation",
      icon: <Home className="h-8 w-8 text-blue-500" />,
      description: "Transform your home with smart devices and sensors."
    }
  ];

  return (
    // Add id="solutions" here for the scroll target
    <section id="solutions" className="pt-20 py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
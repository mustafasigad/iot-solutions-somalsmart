"use client";
import { Droplets, Building2, Home, Clock, Users, Waves } from 'lucide-react';

const solutions = [
  {
    title: "Water Level Monitoring",
    icon: Droplets,
    description: "Real-time water level monitoring for tanks, reservoirs, and water systems."
  },
  {
    title: "Smart Building Solutions",
    icon: Building2,
    description: "Automate and monitor building systems including HVAC, lighting, and security."
  },
  {
    title: "Home Automation",
    icon: Home,
    description: "Transform your home with smart devices and sensors."
  },
  {
    title: "Staff Monitoring",
    icon: Users,
    description: "Track attendance, assignments, and real-time staff locations with RFID integration."
  },
  {
    title: "Irrigation Monitoring",
    icon: Waves,
    description: "Monitor soil moisture, flow rates, and automate irrigation schedules across zones."
  },
  {
    title: "Drip Automation",
    icon: Clock,
    description: "Smart drip irrigation with automated scheduling and moisture-based control."
  }
];

const SolutionIcon = ({ Icon }) => (
  <Icon className="h-12 w-12 text-blue-500 mb-4" />
);

export default function SolutionsSection() {
  return (
    <section id="solutions" className="pt-20 py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Solutions</h2>
        <p className="text-center mb-12 text-xl text-gray-700 max-w-2xl mx-auto">
          Discover our comprehensive IoT solutions for business automation and monitoring, featuring advanced irrigation and staff management systems.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <SolutionIcon Icon={solution.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
              <p className="text-gray-600 text-center">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
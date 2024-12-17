'use client';

import { useEffect, useRef } from 'react';
import { Activity, Bell, Zap, Cloud, Shield, Laptop } from 'lucide-react';

const features = [
  {
    title: "Real-time Monitoring",
    icon: Activity,
    iconColor: "rgb(59, 130, 246)", // Blue
    bgColor: "rgb(239, 246, 255)",
    description: "Access your data anytime, anywhere with our cloud-based monitoring system."
  },
  {
    title: "Instant Alerts",
    icon: Bell,
    iconColor: "rgb(16, 185, 129)", // Green
    bgColor: "rgb(236, 253, 245)",
    description: "Receive immediate notifications when critical thresholds are reached."
  },
  {
    title: "Cloud Integration",
    icon: Cloud,
    iconColor: "rgb(147, 51, 234)", // Purple
    bgColor: "rgb(250, 245, 255)",
    description: "Seamlessly sync and store your data in the cloud for easy access."
  },
  {
    title: "Advanced Security",
    icon: Shield,
    iconColor: "rgb(217, 119, 6)", // Orange
    bgColor: "rgb(255, 247, 237)",
    description: "Enterprise-grade security to protect your sensitive IoT data."
  },
  {
    title: "Remote Management",
    icon: Laptop,
    iconColor: "rgb(87, 87, 87)", // Steel gray
    bgColor: "rgb(243, 244, 246)",
    description: "Control and configure your devices from anywhere in the world."
  },
  {
    title: "Easy Integration",
    icon: Zap,
    iconColor: "rgb(180, 83, 9)", // Warm brown
    bgColor: "rgb(255, 237, 213)",
    description: "Seamlessly integrate with your existing systems and workflows."
  }
];

const FeatureIcon = ({ Icon, color, bgColor }) => (
  <div className={`p-4 rounded-full transition-all duration-300 group-hover:scale-110`}
       style={{ backgroundColor: bgColor }}>
    <Icon className="h-10 w-10" style={{ color: color }} />
  </div>
);

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">
          Why Choose Our IoT Solutions?
        </h2>
        <p className="text-center mb-16 text-xl text-black max-w-2xl mx-auto">
          Our IoT solutions offer unmatched technical capabilities that empower businesses 
          to stay ahead in a rapidly evolving technological landscape.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group bg-white p-8 rounded-xl 
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                transition-all duration-300 ease-in-out
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                hover:-translate-y-1
                border border-gray-100
                hover:border-gray-200
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              <div className="flex justify-center mb-6">
                <FeatureIcon 
                  Icon={feature.icon} 
                  color={feature.iconColor}
                  bgColor={feature.bgColor}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-black">
                {feature.title}
              </h3>
              <p className="text-black text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
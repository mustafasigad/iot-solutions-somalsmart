// src/components/home/FeaturesSection.js
"use client"

import { useEffect, useRef } from 'react';
import { Activity, Bell, Zap, Cloud, Shield, Laptop } from 'lucide-react';

export default function FeaturesSection() {
  const featuresRef = useRef([]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px',
    });

    featuresRef.current.forEach((feature) => {
      if (feature) {
        observer.observe(feature);
      }
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Access your data anytime, anywhere with our cloud-based monitoring system."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Instant Alerts",
      description: "Receive immediate notifications when critical thresholds are reached."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Integration",
      description: "Seamlessly sync and store your data in the cloud for easy access."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "Enterprise-grade security to protect your sensitive IoT data."
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Remote Management",
      description: "Control and configure your devices from anywhere in the world."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing systems and workflows."
    }
  ];

  return (
    <section id="features" className="pt-20 py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our IoT Solutions?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-lg transform opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-blue-500 group-hover:text-blue-600 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
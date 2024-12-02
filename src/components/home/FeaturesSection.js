"use client";
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
      icon: <Activity className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Real-time Monitoring",
      description: "Access your data anytime, anywhere with our cloud-based monitoring system."
    },
    {
      icon: <Bell className="h-12 w-12 text-green-500 mb-4" />,
      title: "Instant Alerts",
      description: "Receive immediate notifications when critical thresholds are reached."
    },
    {
      icon: <Cloud className="h-12 w-12 text-purple-500 mb-4" />,
      title: "Cloud Integration",
      description: "Seamlessly sync and store your data in the cloud for easy access."
    },
    {
      icon: <Shield className="h-12 w-12 text-red-500 mb-4" />,
      title: "Advanced Security",
      description: "Enterprise-grade security to protect your sensitive IoT data."
    },
    {
      icon: <Laptop className="h-12 w-12 text-yellow-500 mb-4" />,
      title: "Remote Management",
      description: "Control and configure your devices from anywhere in the world."
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500 mb-4" />,
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
        <p className="text-center mb-12 text-xl text-gray-700 max-w-2xl mx-auto">
          Our IoT solutions offer unmatched technical capabilities that empower businesses to stay ahead in a rapidly evolving technological landscape.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featuresRef.current[index] = el)}
              className="bg-white p-8 rounded-lg shadow-lg transform opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

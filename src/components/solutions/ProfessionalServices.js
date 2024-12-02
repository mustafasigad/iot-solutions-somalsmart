"use client";
import { 
  Code2, Network, Shield, BarChart, Database, Cpu,
  GitBranch, LineChart, Wrench, Users
} from 'lucide-react';

const services = [
  {
    title: "System Architecture Design",
    icon: Network,
    description: "Enterprise-grade architecture design with scalability and reliability in focus",
    features: [
      "High-level system design",
      "Component architecture",
      "Infrastructure planning",
      "Scalability patterns"
    ],
    deliverables: "Complete architecture documentation, diagrams, and implementation roadmap"
  },
  {
    title: "Custom Integration Services",
    icon: GitBranch,
    description: "Seamless integration of our IoT solutions with your existing systems",
    features: [
      "API development",
      "Legacy system integration",
      "Data migration",
      "Custom middleware"
    ],
    deliverables: "Fully integrated system with documentation and support"
  },
  {
    title: "Performance Optimization",
    icon: LineChart,
    description: "Comprehensive system optimization for maximum efficiency",
    features: [
      "Performance auditing",
      "Bottleneck identification",
      "Query optimization",
      "Caching strategies"
    ],
    deliverables: "Optimization report and implemented improvements"
  },
  {
    title: "Security Implementation",
    icon: Shield,
    description: "Enterprise-level security measures and best practices",
    features: [
      "Security audit",
      "Encryption implementation",
      "Access control",
      "Compliance checking"
    ],
    deliverables: "Security assessment report and enhanced protection measures"
  },
  {
    title: "Data Analytics Solutions",
    icon: BarChart,
    description: "Advanced analytics and reporting systems",
    features: [
      "Custom dashboards",
      "Real-time analytics",
      "Predictive modeling",
      "Data visualization"
    ],
    deliverables: "Analytics platform with custom reports and dashboards"
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cpu,
    description: "Complete infrastructure and deployment solutions",
    features: [
      "CI/CD implementation",
      "Container orchestration",
      "Monitoring setup",
      "Automated scaling"
    ],
    deliverables: "Fully automated infrastructure with monitoring"
  }
];

export default function ProfessionalServices() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Professional Services
        </h2>
        <p className="text-center mb-16 text-xl text-gray-300 max-w-3xl mx-auto">
          Leverage our expertise in IoT solutions, system integration, and enterprise architecture to transform your business operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="h-14 w-14 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-6">
                {service.description}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold text-blue-400">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <h4 className="font-semibold text-blue-400 mb-2">Deliverables:</h4>
                  <p className="text-gray-300">{service.deliverables}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
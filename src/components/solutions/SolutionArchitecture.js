"use client";
import { Server, Database, Cloud, Shield, Network, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function SolutionArchitecture() {
  const [activeLayer, setActiveLayer] = useState('overview');

  const architectureLayers = {
    overview: {
      title: "System Overview",
      diagram: (
        <div className="grid grid-cols-3 gap-4 p-8 bg-gray-900 rounded-xl">
          <div className="col-span-3 text-center p-4 bg-blue-600 rounded-lg">
            <Cloud className="w-12 h-12 mx-auto mb-2" />
            Cloud Infrastructure
          </div>
          <div className="p-4 bg-blue-500 rounded-lg">
            <Server className="w-8 h-8 mx-auto mb-2" />
            Data Collection
          </div>
          <div className="p-4 bg-blue-500 rounded-lg">
            <Database className="w-8 h-8 mx-auto mb-2" />
            Processing
          </div>
          <div className="p-4 bg-blue-500 rounded-lg">
            <Network className="w-8 h-8 mx-auto mb-2" />
            Distribution
          </div>
        </div>
      ),
      description: "Our IoT platform utilizes a multi-layered architecture ensuring scalability, reliability, and security."
    },
    security: {
      title: "Security Implementation",
      diagram: (
        <div className="space-y-4 p-8 bg-gray-900 rounded-xl">
          <div className="p-4 bg-blue-600 rounded-lg flex items-center">
            <Shield className="w-8 h-8 mr-4" />
            End-to-end Encryption
          </div>
          <div className="p-4 bg-blue-500 rounded-lg flex items-center">
            <Shield className="w-8 h-8 mr-4" />
            Access Control
          </div>
          <div className="p-4 bg-blue-400 rounded-lg flex items-center">
            <Shield className="w-8 h-8 mr-4" />
            Data Protection
          </div>
        </div>
      ),
      description: "Multi-layer security approach protecting data at rest and in transit."
    },
    dataflow: {
      title: "Data Flow",
      diagram: (
        <div className="space-y-4 p-8 bg-gray-900 rounded-xl">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-blue-600 rounded-lg">
              <Cpu className="w-8 h-8 mx-auto mb-2" />
              Sensors
            </div>
            <div className="p-4 bg-blue-500 rounded-lg">
              <Server className="w-8 h-8 mx-auto mb-2" />
              Gateway
            </div>
            <div className="p-4 bg-blue-400 rounded-lg">
              <Cloud className="w-8 h-8 mx-auto mb-2" />
              Cloud
            </div>
            <div className="p-4 bg-blue-300 rounded-lg">
              <Database className="w-8 h-8 mx-auto mb-2" />
              Storage
            </div>
          </div>
        </div>
      ),
      description: "Efficient data flow from sensors to storage with real-time processing capabilities."
    }
  };

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Solution Architecture
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(architectureLayers).map(([key, layer]) => (
            <button
              key={key}
              className={`px-6 py-2 rounded-full ${
                activeLayer === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setActiveLayer(key)}
            >
              {layer.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
            {architectureLayers[activeLayer].diagram}
          </div>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              {architectureLayers[activeLayer].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {architectureLayers[activeLayer].description}
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-400">Key Components:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Scalable cloud infrastructure</li>
                <li>Real-time data processing</li>
                <li>Secure communication protocols</li>
                <li>Redundant storage systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
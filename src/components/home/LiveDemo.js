// src/components/home/LiveDemo.js
"use client"

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function LiveDemo() {
  const [waterLevel, setWaterLevel] = useState([]);
  const [activeTab, setActiveTab] = useState('realTime');

  useEffect(() => {
    const generateData = () => {
      const newData = Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        level: Math.floor(Math.random() * 30) + 70
      }));
      setWaterLevel(newData);
    };

    generateData();
    const interval = setInterval(generateData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Add id="demo" and pt-20 for proper scrolling
    <section id="demo" className="pt-20 py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Live Water Level Monitor Demo</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-full ${activeTab === 'realTime' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('realTime')}
            >
              Real-Time
            </button>
            <button
              className={`px-4 py-2 rounded-full ${activeTab === 'historical' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('historical')}
            >
              Historical
            </button>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterLevel}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="level" stroke="#2563eb" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
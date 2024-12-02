"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ClientView({ client, tankData, historicalData }) {
  if (!client || !tankData) return null;

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold">Your Water Tank</h3>
            <p className="text-gray-600">Current Status</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            tankData.currentLevel < 30
              ? 'bg-red-100 text-red-600'
              : 'bg-green-100 text-green-600'
          }`}>
            {tankData.currentLevel < 30 ? 'Low Level' : 'Normal'}
          </span>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-gray-600">Current Level</h4>
            <p className="text-3xl font-bold text-blue-600">
              {tankData.currentLevel}%
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-gray-600">Daily Usage</h4>
            <p className="text-3xl font-bold text-blue-600">
              {tankData.dailyUsage}L
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-gray-600">Est. Days Left</h4>
            <p className="text-3xl font-bold text-blue-600">
              {tankData.estimatedDaysRemaining}
            </p>
          </div>
        </div>

        {/* Usage Chart */}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="time" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="level"
                stroke="#2563EB"
                fill="#3B82F6"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Actions and Tips */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Request Refill
            </button>
            <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Report Issue
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Usage Tips</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Your consumption is above average</li>
            <li>• Consider scheduling a refill soon</li>
            <li>• Check for possible leaks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

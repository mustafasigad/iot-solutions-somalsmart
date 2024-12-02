"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function SupplierView({
  clients,
  tankData,
  historicalData,
  selectedClient,
  onClientSelect
}) {
  return (
    <div className="space-y-6">
      {/* Clients Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map(client => (
          <div
            key={client.id}
            onClick={() => onClientSelect(client)}
            className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
              selectedClient?.id === client.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{client.name}</h3>
              <span className={`px-2 py-1 rounded-full text-sm ${
                tankData[client.id]?.currentLevel < 30
                  ? 'bg-red-100 text-red-600'
                  : 'bg-green-100 text-green-600'
              }`}>
                {tankData[client.id]?.currentLevel}%
              </span>
            </div>
            <div className="mt-4 text-gray-600">
              <p>{client.location}</p>
              <p>Capacity: {client.tankCapacity}L</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Client Details */}
      {selectedClient && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{selectedClient.name}</h2>
              <p className="text-gray-600">24-Hour Usage History</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Schedule Refill
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Contact Client
              </button>
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
      )}
    </div>
  );
}

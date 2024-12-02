"use client";
import { useState, useEffect } from 'react';
import { Settings, CheckCircle2, XCircle } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Label, PieChart, Pie, Cell, Legend
} from 'recharts';
import NotificationSystem from './NotificationSystem';
import ClientView from './ClientView';
import SupplierView from './SupplierView';
import { clients, generateMockData } from './utils/mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function LiveDemo() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [tankData, setTankData] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [staffActivity, setStaffActivity] = useState([]);
  const [recentScans, setRecentScans] = useState([]);
  const [irrigationData, setIrrigationData] = useState([]);
  const [viewMode, setViewMode] = useState('supplier');

  useEffect(() => {
    const generateStaffActivity = () => {
      const currentHour = new Date().getHours();
      const staffMembers = [
        { id: 'SC001', name: 'Sarah Wilson' },
        { id: 'SC002', name: 'John Davies' },
        { id: 'SC003', name: 'Emma Thompson' },
        { id: 'SC004', name: 'Michael Brown' },
      ];

      const newActivity = staffMembers.map(staff => {
        const isCheckedIn = Math.random() > 0.3;
        const checkInTime = isCheckedIn ? 
          new Date(new Date().setHours(Math.max(currentHour - 4, 8), Math.floor(Math.random() * 60))).toLocaleTimeString() : 
          null;
        const checkOutTime = isCheckedIn && Math.random() > 0.7 ? 
          new Date(new Date().setHours(currentHour, Math.floor(Math.random() * 60))).toLocaleTimeString() : 
          null;
        
        return {
          ...staff,
          status: isCheckedIn ? (checkOutTime ? 'Completed Shift' : 'On Duty') : 'Off Duty',
          checkIn: checkInTime,
          checkOut: checkOutTime,
          location: isCheckedIn ? 'Client Location A' : '-'
        };
      });

      setStaffActivity(newActivity);
    };

    const generateRecentScans = () => {
      const newScans = Array.from({ length: 5 }, (_, i) => ({
        id: `SC00${Math.floor(Math.random() * 4) + 1}`,
        time: new Date(Date.now() - i * 1000 * 60 * Math.floor(Math.random() * 30)).toLocaleTimeString(),
        type: Math.random() > 0.5 ? 'Check In' : 'Check Out',
        location: `Client Location ${String.fromCharCode(65 + Math.floor(Math.random() * 3))}`
      }));
      setRecentScans(newScans);
    };

    const generateIrrigationData = () => {
      const data = Array.from({ length: 7 }, (_, i) => ({
        zone: `Zone ${i + 1}`,
        moisture: Math.floor(Math.random() * 40) + 60,
        flow: Math.floor(Math.random() * 5) + 2
      }));
      setIrrigationData(data);
    };

    const updateData = () => {
      const { tankData: newTankData, historicalData: newHistoricalData } = generateMockData(clients);
      setTankData(newTankData);
      setHistoricalData(newHistoricalData);
      generateStaffActivity();
      generateRecentScans();
      generateIrrigationData();
    };

    updateData();
    const interval = setInterval(updateData, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderDashboardHeader = () => (
    <div className="bg-gradient-to-r from-blue-700 to-purple-700 px-6 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-white font-semibold">
          {viewMode === 'supplier' ? 'Supplier Dashboard' : 'Client Dashboard'}
        </h3>
        <div className="flex items-center gap-4">
          <NotificationSystem userType={viewMode} />
          <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderIrrigationSection = () => {
    const activeZones = irrigationData.filter(z => z.flow > 3).length;
    
    return (
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Drip Irrigation Status</h3>
            <div className="bg-green-100 px-4 py-2 rounded-full">
              Active Zones: {activeZones}
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={irrigationData}
                       margin={{ top: 10, right: 30, left: 50, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="zone">
                  <Label value="Irrigation Zones" offset={-20} position="insideBottom" />
                </XAxis>
                <YAxis label={{ value: 'Moisture (%) / Flow Rate (L/min)', angle: -90, position: 'insideLeft', offset: -30 }} />
                <Tooltip />
                <Bar dataKey="moisture" fill="#22c55e" name="Moisture %" />
                <Bar dataKey="flow" fill="#3b82f6" name="Flow Rate (L/min)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  const renderStaffActivity = () => (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <h3 className="text-xl text-white font-semibold">Staff Activity Monitoring</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Staff Status Overview */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Current Staff Status</h3>
            <div className="space-y-4">
              {staffActivity.map((staff) => (
                <div key={staff.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{staff.name}</p>
                    <p className="text-sm text-gray-600">{staff.id}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      staff.status === 'On Duty' ? 'text-green-600' :
                      staff.status === 'Completed Shift' ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {staff.status}
                    </p>
                    <p className="text-sm text-gray-600">{staff.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent RFID Scans */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent RFID Scans</h3>
            <div className="space-y-3">
              {recentScans.map((scan, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2">
                    {scan.type === 'Check In' ? 
                      <CheckCircle2 className="text-green-500" size={20} /> : 
                      <XCircle className="text-red-500" size={20} />
                    }
                    <div>
                      <p className="font-medium">{scan.id}</p>
                      <p className="text-sm text-gray-600">{scan.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${scan.type === 'Check In' ? 'text-green-600' : 'text-red-600'}`}>
                      {scan.type}
                    </p>
                    <p className="text-sm text-gray-600">{scan.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Stats Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">
              {staffActivity.filter(s => s.status === 'On Duty').length}
            </p>
            <p className="text-sm text-gray-600">Currently On Duty</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">
              {staffActivity.filter(s => s.checkIn).length}
            </p>
            <p className="text-sm text-gray-600">Total Check-ins Today</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">
              {staffActivity.filter(s => s.status === 'Completed Shift').length}
            </p>
            <p className="text-sm text-gray-600">Completed Shifts</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="demo" className="pt-20 py-16 px-6 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Live Monitoring System Demo
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Experience real-world monitoring for water levels, irrigation, and staff activity.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode('supplier')}
              className={`px-6 py-2 rounded-full transition-all ${
                viewMode === 'supplier'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Supplier View
            </button>
            <button
              onClick={() => setViewMode('client')}
              className={`px-6 py-2 rounded-full transition-all ${
                viewMode === 'client'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Client View
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          {renderDashboardHeader()}
          <div className="p-6">
            {viewMode === 'supplier' ? (
              <SupplierView
                clients={clients}
                tankData={tankData}
                historicalData={historicalData}
                selectedClient={selectedClient}
                onClientSelect={setSelectedClient}
              />
            ) : (
              <ClientView
                client={selectedClient}
                tankData={tankData[selectedClient?.id]}
                historicalData={historicalData}
              />
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
            <h3 className="text-xl text-white font-semibold">Irrigation Monitoring</h3>
          </div>
          {renderIrrigationSection()}
        </div>

        {renderStaffActivity()}
      </div>
    </section>
  );
}
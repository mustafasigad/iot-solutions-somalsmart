// src/components/home/NotificationSystem.js
"use client";
import { useState } from 'react';
import { Bell, X, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { generateNotifications } from './utils/mockData';

export default function NotificationSystem({ userType }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(generateNotifications(userType));

  const getIcon = (type) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="p-2 hover:bg-gray-100 rounded-full relative"
      >
        <Bell className="h-6 w-6" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
            <button 
              onClick={() => setShowNotifications(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="p-4 border-b hover:bg-gray-50"
              >
                <div className="flex gap-3">
                  {getIcon(notification.type)}
                  <div>
                    <p className="text-gray-900">{notification.message}</p>
                    <p className="text-sm text-gray-500">Just now</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
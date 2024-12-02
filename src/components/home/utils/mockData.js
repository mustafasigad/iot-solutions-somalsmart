// src/utils/mockData.js

export function generateMockData(clientsList) {
    const tankData = {};
    clientsList.forEach(client => {
      tankData[client.id] = {
        currentLevel: Math.floor(Math.random() * 30) + 70,
        status: 'Normal',
        lastUpdated: new Date().toLocaleTimeString(),
        dailyUsage: Math.floor(Math.random() * 1000) + 500,
        estimatedDaysRemaining: Math.floor(Math.random() * 5) + 2,
        temperature: Math.floor(Math.random() * 15) + 20,
        lastRefill: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      };
    });
  
    const historicalData = Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      level: Math.floor(Math.random() * 30) + 70,
    }));
  
    return { tankData, historicalData };
  }
  
  export function generateIrrigationData() {
    return Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      moisture: Math.floor(Math.random() * 50) + 50,
      temperature: Math.floor(Math.random() * 10) + 20,
      humidity: Math.floor(Math.random() * 20) + 60,
    }));
  }
  
  export function generateStaffActivityData() {
    const staffActivity = [];
    for (let i = 0; i < 5; i++) { // Simulating data for 5 staff members
      const clockInHour = Math.floor(Math.random() * 3) + 7; // Randomly between 7:00 AM and 10:00 AM
      const clockOutHour = Math.floor(Math.random() * 3) + 16; // Randomly between 4:00 PM and 7:00 PM
      const workedHours = clockOutHour - clockInHour;
  
      staffActivity.push({
        staffId: `Staff${i + 1}`,
        clockIn: `${clockInHour}:00`,
        clockOut: `${clockOutHour}:00`,
        workedHours,
      });
    }
  
    return staffActivity;
  }
  
  export const clients = [
    { id: 'CLT001', name: 'Al Rayyan Hotel', location: 'Doha West', tankCapacity: 5000 },
    { id: 'CLT002', name: 'Pearl Residences', location: 'Pearl Qatar', tankCapacity: 10000 },
    { id: 'CLT003', name: 'Marina Mall', location: 'Lusail', tankCapacity: 15000 },
    { id: 'CLT004', name: 'City Gardens', location: 'Al Sadd', tankCapacity: 8000 },
  ];
  
  export function generateNotifications(userType) {
    const notifications = [];
    if (userType === 'supplier') {
      notifications.push(
        { id: 1, type: 'alert', message: 'Low level alert - Al Rayyan Hotel', priority: 'high' },
        { id: 2, type: 'info', message: 'Scheduled refill - Pearl Residences', priority: 'medium' },
        { id: 3, type: 'success', message: 'Maintenance completed - Marina Mall', priority: 'low' }
      );
    } else {
      notifications.push(
        { id: 1, type: 'warning', message: 'Water level below 30%', priority: 'medium' },
        { id: 2, type: 'info', message: 'Scheduled maintenance tomorrow', priority: 'low' }
      );
    }
    return notifications;
  }
  
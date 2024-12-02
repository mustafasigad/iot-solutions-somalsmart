"use client";
import { useState } from 'react';
import { Terminal, PlayCircle, PauseCircle, RefreshCcw, Code } from 'lucide-react';

export default function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState('api');
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState([]);

  const demoTypes = {
    api: {
      title: "API Testing Console",
      description: "Test our REST APIs with live endpoints",
      sampleCode: `
// Sample API Request
fetch('/api/water-level', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    tankId: 'tank123',
    level: 85.5
  })
})
.then(response => response.json())
.then(data => console.log(data));`
    },
    websocket: {
      title: "WebSocket Demo",
      description: "Real-time data streaming demonstration",
      sampleCode: `
// WebSocket Connection
const ws = new WebSocket('wss://api.example.com/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};

ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'water-level-updates'
}));`
    },
    mqtt: {
      title: "MQTT Testing Environment",
      description: "Test MQTT publish/subscribe functionality",
      sampleCode: `
// MQTT Client Setup
const client = mqtt.connect('mqtt://broker.example.com');

client.subscribe('sensors/water-level');

client.on('message', (topic, message) => {
  console.log(\`\${topic}: \${message}\`);
});

client.publish('sensors/water-level', JSON.stringify({
  level: 75,
  timestamp: new Date()
}));`
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setConsoleOutput([
      { type: 'info', message: 'Initializing connection...' },
      { type: 'success', message: 'Connected successfully!' },
      { type: 'data', message: '{ "status": "ok", "data": { "level": 85.5 } }' }
    ]);
  };

  const handleStop = () => {
    setIsRunning(false);
    setConsoleOutput(prev => [...prev, { type: 'info', message: 'Connection closed.' }]);
  };

  const handleClear = () => {
    setConsoleOutput([]);
    setIsRunning(false);
  };

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Interactive Demo Environment
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {Object.entries(demoTypes).map(([key, demo]) => (
            <button
              key={key}
              className={`p-6 rounded-xl transition-all ${
                activeDemo === key 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                  : 'bg-gradient-to-r from-gray-800 to-gray-900'
              }`}
              onClick={() => setActiveDemo(key)}
            >
              <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
              <p className="text-gray-300 text-sm">{demo.description}</p>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-400">Code Editor</h3>
              <div className="flex gap-2">
                {!isRunning ? (
                  <button
                    onClick={handleRun}
                    className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <PlayCircle className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleStop}
                    className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <PauseCircle className="h-5 w-5" />
                  </button>
                )}
                <button
                  onClick={handleClear}
                  className="p-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <RefreshCcw className="h-5 w-5" />
                </button>
              </div>
            </div>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">
                {demoTypes[activeDemo].sampleCode}
              </code>
            </pre>
          </div>

          {/* Console Output */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <Terminal className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-blue-400">Console Output</h3>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg h-[300px] overflow-y-auto">
              {consoleOutput.map((output, index) => (
                <div
                  key={index}
                  className={`mb-2 font-mono ${
                    output.type === 'success' ? 'text-green-400' :
                    output.type === 'error' ? 'text-red-400' :
                    output.type === 'data' ? 'text-blue-400' :
                    'text-gray-300'
                  }`}
                >
                  {`> ${output.message}`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
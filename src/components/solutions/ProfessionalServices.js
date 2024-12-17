"use client";
import { 
  Network, Shield, BarChart, Cpu,
  GitBranch, LineChart, X, Send, Upload, File, Trash2, Calendar,
  AlertCircle, CheckCircle, XCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Industry standard colors for IoT and tech services
const serviceColors = {
  architecture: {
    icon: "rgb(52, 211, 153)", // Emerald
    bg: "rgba(52, 211, 153, 0.1)"
  },
  integration: {
    icon: "rgb(99, 102, 241)", // Indigo
    bg: "rgba(99, 102, 241, 0.1)"
  },
  analytics: {
    icon: "rgb(234, 88, 12)", // Orange
    bg: "rgba(234, 88, 12, 0.1)"
  },
  security: {
    icon: "rgb(220, 38, 38)", // Red
    bg: "rgba(220, 38, 38, 0.1)"
  },
  industrial: {
    icon: "rgb(147, 51, 234)", // Purple
    bg: "rgba(147, 51, 234, 0.1)"
  },
  performance: {
    icon: "rgb(20, 184, 166)", // Teal
    bg: "rgba(20, 184, 166, 0.1)"
  }
};

const services = [
  {
    title: "IoT System Architecture",
    icon: Network,
    description: "End-to-end IoT architecture design with scalability and real-time monitoring capabilities",
    features: [
      "Sensor network design",
      "Edge computing architecture",
      "Cloud integration planning",
      "Real-time data processing"
    ],
    deliverables: "Complete IoT architecture blueprint, implementation roadmap, and technical specifications",
    colorScheme: serviceColors.architecture
  },
  {
    title: "Smart Device Integration",
    icon: GitBranch,
    description: "Seamless integration of IoT devices with existing infrastructure and systems",
    features: [
      "Device connectivity",
      "Protocol implementation",
      "Legacy system integration",
      "Custom firmware development"
    ],
    deliverables: "Fully integrated IoT ecosystem with documentation and support",
    colorScheme: serviceColors.integration
  },
  {
    title: "IoT Data Analytics",
    icon: BarChart,
    description: "Transform IoT data into actionable insights with advanced analytics",
    features: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Performance analytics",
      "Custom dashboards"
    ],
    deliverables: "Analytics platform with real-time monitoring and predictive capabilities",
    colorScheme: serviceColors.analytics
  },
  {
    title: "IoT Security Solutions",
    icon: Shield,
    description: "Comprehensive security for your IoT infrastructure and devices",
    features: [
      "Device security",
      "Network protection",
      "Data encryption",
      "Access control"
    ],
    deliverables: "Secure IoT environment with continuous monitoring and threat protection",
    colorScheme: serviceColors.security
  },
  {
    title: "Industrial IoT Solutions",
    icon: Cpu,
    description: "Specialized IoT solutions for industrial applications and automation",
    features: [
      "Industrial automation",
      "Machine monitoring",
      "Process optimization",
      "Equipment tracking"
    ],
    deliverables: "Complete IoT solution with automation and monitoring capabilities",
    colorScheme: serviceColors.industrial
  },
  {
    title: "Performance Optimization",
    icon: LineChart,
    description: "Optimize your IoT network for maximum efficiency and reliability",
    features: [
      "Network optimization",
      "Battery life improvement",
      "Bandwidth management",
      "Latency reduction"
    ],
    deliverables: "Optimized IoT infrastructure with improved performance metrics",
    colorScheme: serviceColors.performance
  }
];

export default function ProfessionalServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    selectedService: '',
    requirements: ''
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('time', formData.time);
      formDataToSend.append('selectedService', formData.selectedService);
      formDataToSend.append('requirements', formData.requirements);
      formDataToSend.append('to', 'info@hiilcore.com');
      if (file) {
        formDataToSend.append('attachment', file);
      }

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setNotification({
          type: 'success',
          message: 'Consultation scheduled successfully!'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          selectedService: '',
          requirements: ''
        });
        setFile(null);
        setTimeout(() => {
          setIsModalOpen(false);
          setNotification(null);
        }, 2000);
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({
        type: 'error',
        message: 'Failed to schedule consultation. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      setNotification({
        type: 'error',
        message: 'Please select a file smaller than 5MB'
      });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto">
        {notification && (
          <div
            className={`fixed top-4 right-4 z-50 flex items-center space-x-2 p-4 rounded-lg shadow-lg transition-all duration-500 ${
              notification.type === 'success'
                ? 'bg-emerald-100 border-emerald-500 text-emerald-700'
                : 'bg-red-100 border-red-500 text-red-700'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-emerald-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500" />
            )}
            <span>{notification.message}</span>
          </div>
        )}

        <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
          IoT Professional Services
        </h2>
        <p className="text-center mb-16 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Transform your operations with our enterprise-grade IoT solutions. From sensor networks to advanced analytics, 
          we deliver complete IoT ecosystems tailored to your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl 
                transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-700"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.colorScheme.bg }}
                >
                  <service.icon 
                    className="h-14 w-14"
                    style={{ color: service.colorScheme.icon }} 
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: service.colorScheme.icon }}>
                {service.title}
              </h3>
              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold" style={{ color: service.colorScheme.icon }}>
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="transition-colors duration-200 hover:text-white">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <h4 className="font-semibold mb-2" style={{ color: service.colorScheme.icon }}>
                    Deliverables:
                  </h4>
                  <p className="text-gray-300">{service.deliverables}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full 
              hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-lg font-semibold 
              shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule a Consultation
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div 
              className="bg-white rounded-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto
                transform transition-all duration-300 scale-100 opacity-100"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Schedule IoT Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                      focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                      transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                      focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                      transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                      focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                      transition-all duration-200"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={minDate}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                        focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                        transition-all duration-200"/>
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                        focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                        transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="selectedService"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service of Interest *
                  </label>
                  <select
                    id="selectedService"
                    name="selectedService"
                    required
                    value={formData.selectedService}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                      focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                      transition-all duration-200"
                  >
                    <option value="">Select an IoT service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Requirements *
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black 
                      focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none
                      transition-all duration-200 resize-y"
                    placeholder="Please describe your IoT project requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Attach Document (Optional)
                  </label>
                  {!file ? (
                    <div 
                      className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed 
                        rounded-lg hover:border-emerald-400 transition-colors cursor-pointer group"
                    >
                      <div className="space-y-2 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-emerald-600 hover:text-emerald-500">
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx,.txt,.rtf"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX up to 5MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1 flex items-center space-x-2 p-3 border border-gray-300 rounded-lg bg-gray-50">
                      <File className="h-6 w-6 text-emerald-500" />
                      <span className="flex-1 truncate text-sm text-gray-600">{file.name}</span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Remove file"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'}
                    text-white font-semibold transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Calendar className="h-5 w-5" />
                      <span>Schedule IoT Consultation</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-emerald-600 text-center mt-4 font-medium flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Consultation scheduled successfully!</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center mt-4 font-medium flex items-center justify-center space-x-2">
                    <XCircle className="h-5 w-5" />
                    <span>Failed to schedule consultation. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
"use client";
import { 
  Network, Shield, BarChart, Cpu,
  GitBranch, LineChart, X, Send, Upload, File, Trash2, Calendar
} from 'lucide-react';
import { useState } from 'react';

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
    deliverables: "Complete IoT architecture blueprint, implementation roadmap, and technical specifications"
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
    deliverables: "Fully integrated IoT ecosystem with documentation and support"
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
    deliverables: "Analytics platform with real-time monitoring and predictive capabilities"
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
    deliverables: "Secure IoT environment with continuous monitoring and threat protection"
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
    deliverables: "Complete IoT solution with automation and monitoring capabilities"
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
    deliverables: "Optimized IoT infrastructure with improved performance metrics"
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
        setSubmitStatus('success');
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
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
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
      alert('Please select a file smaller than 5MB');
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
          IoT Professional Services
        </h2>
        <p className="text-center mb-16 text-xl text-gray-300 max-w-3xl mx-auto">
          Transform your operations with our enterprise-grade IoT solutions. From sensor networks to advanced analytics, we deliver complete IoT ecosystems tailored to your business needs.
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
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Schedule a Consultation
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Schedule IoT Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
    Name *
  </label>
  <input
    type="text"
    id="name"
    name="name"
    required
    value={formData.name}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
  <div>
    <label htmlFor="date" className="block text-sm font-medium text-black mb-1">
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
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
    />
  </div>

  <div>
    <label htmlFor="time" className="block text-sm font-medium text-black mb-1">
      Preferred Time *
    </label>
    <input
      type="time"
      id="time"
      name="time"
      required
      value={formData.time}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
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
    className={`w-full px-4 py-2 border border-gray-300 rounded-lg outline-none ${
      formData.selectedService ? 'bg-white' : 'bg-gray-200 text-gray-900'
    } hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500`}
  >
    <option value="">Select an IoT service</option>
    {services.map((service, index) => (
      <option key={index} value={service.title} className="text-gray-900">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
                    placeholder="Please describe your IoT project requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Attach Document (Optional)
                  </label>
                  {!file ? (
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors cursor-pointer">
                      <div className="space-y-2 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
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
                      <File className="h-6 w-6 text-blue-500" />
                      <span className="flex-1 truncate text-sm">{file.name}</span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700"
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
                    ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}
                    text-white font-semibold transition-colors`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Calendar size={20} />
                      <span>Schedule IoT Consultation</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-center mt-4 font-medium">
                    Consultation scheduled successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-center mt-4 font-medium">
                    Failed to schedule consultation. Please try again.
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
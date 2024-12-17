
"use client";
import { useState } from 'react';
import { Mail, Phone, X, Send, Upload, File, Trash2 } from 'lucide-react';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
        setFormData({ name: '', email: '', phone: '', requirements: '' });
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

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.size <= 5 * 1024 * 1024) {
      setFile(droppedFile);
    } else {
      alert('Please select a file smaller than 5MB');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert('Please select a file smaller than 5MB');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
  <div className="absolute inset-0 opacity-20" 
       style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
  </div>
</div>

      <div className="container mx-auto relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Have questions or need a custom solution? Our team of experts is ready to help transform your ideas into reality.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          <a href="mailto:info@hiilcore.com" 
             className="group flex items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
          <Mail className="h-6 w-6 text-amber-800" />
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-1">Email Us</div>
              <div className="font-semibold text-gray-900">info@hiilcore.com</div>
            </div>
          </a>

          <a href="tel:+97433782295"
             className="group flex items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
         <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
              <Phone className="h-6 w-6 text-amber-800"/>
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-500 mb-1">Call Us</div>
              <div className="font-semibold text-gray-900">+974 (33) 782-295</div>
            </div>
          </a>
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-lg font-semibold shadow-lg 
                     hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
            <Send className="w-5 h-5 text-white" />
              Send Us Your Requirements
            </span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
             onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl p-8 relative max-h-[90vh] overflow-y-auto"
               onClick={e => e.stopPropagation()}>
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Send Your Requirements</h3>
              <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-y min-h-[120px]"
                  placeholder="Please describe your project or requirements..."
                />
              </div>

              {/* File Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Document (Optional)
                </label>
                {!file ? (
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl 
                             hover:border-emerald-400 transition-all cursor-pointer bg-gray-50 hover:bg-emerald-50"
                  >
                    <div className="space-y-2 text-center">
                    <Upload className="mx-auto h-12 w-12 text-amber-800" />
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
                  <div className="mt-1 flex items-center gap-3 p-4 border border-gray-300 rounded-xl bg-emerald-50">
                <File className="h-6 w-6 text-amber-800 flex-shrink-0" />
                    <span className="flex-1 truncate text-sm font-medium text-gray-900">{file.name}</span>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-2 hover:bg-emerald-100 rounded-full transition-colors"
                      aria-label="Remove file"
                    >
                      <Trash2 className="h-5 w-5 text-rose-500" />
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                  }
                  text-white transition-all duration-300 transform hover:scale-[1.02]`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`
                  text-center p-4 rounded-xl mt-4 font-medium
                  ${submitStatus === 'success' 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'bg-rose-50 text-rose-700'
                  }
                `}>
                  {submitStatus === 'success' 
                    ? 'Message sent successfully!' 
                    : 'Failed to send message. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
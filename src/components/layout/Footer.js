export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">HiilCore - Intelligent IoT Solutions</h2>
          <p className="text-gray-300">Empowering businesses with advanced IoT solutions and real-time monitoring technologies.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:contact@iotsolutions.com" className="text-gray-300 hover:text-white transition-colors">
            Email Us
          </a>
          <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
            Call Us
          </a>
          <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
        <div>
          <p>&copy; 2024 HiilCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Name */}
        <a
          href="/"
          className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 hover:opacity-90 transition-opacity duration-300"
        >
          HiilCore
        </a>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a
            href="#solutions"
            className="text-lg font-medium text-gray-300 hover:text-teal-400 hover:underline underline-offset-4 decoration-teal-400 transition-all duration-200"
          >
            Solutions
          </a>
          <a
            href="#features"
            className="text-lg font-medium text-gray-300 hover:text-teal-400 hover:underline underline-offset-4 decoration-teal-400 transition-all duration-200"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-lg font-medium text-gray-300 hover:text-teal-400 hover:underline underline-offset-4 decoration-teal-400 transition-all duration-200"
          >
            Demo
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-gray-300 hover:text-teal-400 hover:underline underline-offset-4 decoration-teal-400 transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

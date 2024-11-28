// src/components/layout/Navigation.js
export default function Navigation() {
    return (
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-blue-600">HiilCore</a>
          <div className="flex gap-6">
            <a href="#solutions" className="hover:text-blue-600">Solutions</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }

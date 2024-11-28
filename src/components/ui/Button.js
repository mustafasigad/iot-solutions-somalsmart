// src/components/ui/Button.js
export default function Button({ children, variant = 'primary', ...props }) {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
    };
  
    return (
      <button
        className={`px-4 py-2 rounded-full font-semibold transition-colors ${variants[variant]}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
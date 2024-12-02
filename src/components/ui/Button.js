export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50',
  };

  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

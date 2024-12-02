export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
}

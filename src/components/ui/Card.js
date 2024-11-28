// src/components/ui/Card.js
export default function Card({ title, children, className = '' }) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
        {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
        {children}
      </div>
    );
  }
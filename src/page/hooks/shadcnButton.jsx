import React from "react";

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-300",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

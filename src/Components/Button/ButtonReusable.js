// Button.js
import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#049805] text-white rounded-lg px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

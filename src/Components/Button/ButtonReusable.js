// Button.js
import React from "react";
import { Spinner } from "react-activity";

const Button = ({ children, onClick, className, loadingState }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#049805] text-white rounded-lg px-4 py-2 ${className} flex items-center justify-center`}
    >
      {loadingState ? <Spinner /> : children}
    </button>
  );
};

export default Button;

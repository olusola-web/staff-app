import React from 'react';

const ProgressBar = ({ value, max }) => {
  // Calculate the width of the filled part of the progress bar
  const fillerWidth = `${(value / max) * 100}%`;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden ">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: fillerWidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;

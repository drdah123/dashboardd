import React from 'react';

const Button = ({ text, bgColor, color, size, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} hover:drop-shadow-xl px-3 py-2 mt-2 text-font`}
    >
      {text}
    </button>
  );
};

export default Button;

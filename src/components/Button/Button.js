import React from 'react';
import './Button.css';

function Button({ text, handleSubmit, width = 'auto', color, background }) {
  return (
    <button
      style={{ width, background, color }}
      className="button"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {text}
    </button>
  );
}

export default Button;

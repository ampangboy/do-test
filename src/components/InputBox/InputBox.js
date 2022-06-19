import React from 'react';
import './InputBox.css';

function InputBox({ type, ariaLabel, placeholder, handleChange, value }) {
  return (
    <input
      className="inputBox"
      type={type}
      aria-label={ariaLabel}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
}

export default InputBox;

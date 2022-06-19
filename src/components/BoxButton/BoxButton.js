import React from 'react';
import './BoxButton.css';

function BoxButton({ text, isActive }) {
  const active = isActive ? 'boxButton_active' : '';
  const activeText = isActive ? 'boxButton_text_active' : '';

  return (
    <div className={`boxButton ${active}`}>
      <div className={`boxButton_text ${activeText}`}>{text}</div>
    </div>
  );
}

export default BoxButton;

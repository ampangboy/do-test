import React from 'react';
import './Title.css';

function Title({ text }) {
  return (
    <div className="title-container">
      <h1 className="title">{text}</h1>
    </div>
  );
}

export default Title;

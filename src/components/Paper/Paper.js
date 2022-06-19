import React from 'react';
import './Paper.css';

/**
 * Define fullview of Application With some style
 * @param color Color of layout background
 * @returns Layout components
 */
function Paper({ width = 'small', children }) {
  let paddingSize;

  switch (width) {
    case 'small':
      paddingSize = '40%';
      break;
    case 'medium':
      paddingSize = '20%';
      break;
    case 'large':
      paddingSize = '2%';
      break;
    default:
      paddingSize = '0%';
  }

  return (
    <div
      className="paper"
      style={{ paddingRight: paddingSize, paddingLeft: paddingSize }}
    >
      {children}
    </div>
  );
}

export default Paper;

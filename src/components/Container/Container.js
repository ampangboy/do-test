import React from 'react';
import './Container.css';

function Container({
  paddingTop = '15px',
  paddingLeft = '10px',
  paddingRight = '10px',
  paddingBottom = '10px',
  marginTop = '0',
  marginLeft = '0',
  marginRight = '0',
  marginBottom = '0',
  top = '0',
  left = '0',
  right = '0',
  bottom = '0',
  height = 'auto',
  width = 'auto',
  background,
  isElevate,
  children
}) {
  const styleOption = {
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    top,
    left,
    right,
    bottom,
    height,
    width,
    background,
    borderRadius: '9px'
  };

  const className = isElevate ? 'containerElevate' : '';

  return (
    <div className={className} style={styleOption}>
      {children}
    </div>
  );
}

export default Container;

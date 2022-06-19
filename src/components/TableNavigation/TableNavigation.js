import React from 'react';
import BoxButton from '../BoxButton/BoxButton';
import './TableNavigation.css';

function TableNavigation() {
  return (
    <div className="tableNavigation">
      <BoxButton text="<" />
      <BoxButton text="1" isActive />
      <BoxButton text=">" />
    </div>
  );
}

export default TableNavigation;

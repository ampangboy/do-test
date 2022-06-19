import React from 'react';
import SortButton from '../SortButton/SortButton';
import './HeaderCell.css';

function HeaderCell({ text }) {
  return (
    <div className="headerCell_container">
      <div className="headerCell_text">{text}</div>
      <SortButton />
    </div>
  );
}

export default HeaderCell;

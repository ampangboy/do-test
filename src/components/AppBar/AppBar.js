import React from 'react';
import './AppBar.css';

function AppBar({ isElevated, children }) {
  const classNames = isElevated
    ? 'appbar appbarContent appBar appbarElevate'
    : 'appbar appbarContent appBar';

  return <div className={classNames}>{children}</div>;
}

export default AppBar;

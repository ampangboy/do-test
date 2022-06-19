import React from 'react';
import './Layout.css';

/**
 * Define Fullview of Application
 * @param color Color of layout background
 * @returns Layout components
 */
function Layout({ children, color }) {
  return (
    <div className="layout" style={{ background: color }}>
      {children}
    </div>
  );
}

export default Layout;

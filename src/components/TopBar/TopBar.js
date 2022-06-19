import React, { useEffect, useState } from 'react';
import { getUsername } from '../../apis';
import AppBar from '../AppBar/AppBar';
import './TopBar.css';

function TopBar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const u = getUsername();

    if (username !== null) {
      setUsername(u);
    }
  });

  return (
    <AppBar isElevated>
      <div className="topBarItem">
        <p className="topBarItem_text">{username}</p>
      </div>
    </AppBar>
  );
}

export default TopBar;

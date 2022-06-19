import React, { useEffect, useState } from 'react';
import AppBar from '../AppBar/AppBar';
import './SecondBar.css';
import formatDatetime from '../../utils/Utils';

function SecondBar() {
  const [datetimeText, setDatetimeText] = useState(formatDatetime(Date.now()));

  function updateDate() {
    const now = Date.now();

    setDatetimeText(formatDatetime(now));
  }

  useEffect(() => {
    setTimeout(() => {
      updateDate();
    }, 1000);
  }, [datetimeText]);

  return (
    <AppBar>
      <div className="secondBarItem secondBarItem_title">
        <p className="secondBarItem_text">Dashboard</p>
      </div>
      <div className="secondBarItem secondBarItem_datetime">
        <p className="secondBarItem_text">{datetimeText}</p>
      </div>
    </AppBar>
  );
}

export default SecondBar;

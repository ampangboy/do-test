import React from 'react';
import './SearchBar.css';
import qrImage from '../../assets/qr_sample.png';

function SearchBar() {
  return (
    <div className="searchBar_container">
      <input
        className="searchBar_input"
        type="text"
        placeholder="  &#x1F50E;&#xFE0E;"
      />
      <div className="searchBar_qr">
        <img
          className="searchBar_qr_image"
          img
          src={qrImage}
          alt="qr code sample"
        />
      </div>
    </div>
  );
}

export default SearchBar;

import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="searchForm_container">
      <div className="searchBar_wrapper">
        <SearchBar />
      </div>
      <Button text="Cari" width="80px" background="#198fff" />
    </div>
  );
}

export default SearchForm;

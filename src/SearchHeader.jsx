import React from 'react';

function SearchHeader({ onSearchChange, onSearchKeyUp }) {
  return (
    <header className="SearchHeader">
      <a className="logo" href="https://news.ycombinator.com/" target="_self">
        <img src="../็Hlogo.png" alt="Logo"></img>
      </a>
      <form>
        <img className="search_icon" src="../search_icon.png" alt="Search icon"></img>
        <input className='searchBox' onKeyUp={onSearchKeyUp} onChange={onSearchChange} placeholder="Search stories by title, url or author"></input>
      </form>
      <a href="https://hn.algolia.com/settings" target="_self">
        <img className="settings_icon" src="../settings_icon.png" alt="Settings icon"></img>
      </a>
    </header>
  );
}

export default SearchHeader;

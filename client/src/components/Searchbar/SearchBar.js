import React from 'react'
import "Searchbar.scss"

export const SearchBar = () => {
  return (
    <div class='search-bar-wrap'>
      <div class='search-bar'>
        <input type='text' class='searchTerm' placeholder='Search set' />
        <button type='submit' class='searchButton'>
          <img src='https://cdn-icons-png.flaticon.com/512/10905/10905219.png' class='search-img' border='0' />
        </button>
      </div>
    </div>
  )
}

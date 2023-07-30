import React from 'react'

export const CardPage = () => {
  return (
    <div class='cardpage'>
      <div class='top-bar'>
        <div class='site-logo'>
          <img src='favicon.ico' class='logo-img' />
          <text>FlashMath</text>
        </div>
        <div class='search-bar-wrap'>
          <div class='search-bar'>
            <input type='text' class='searchTerm' placeholder='Search set' />
            <button type='submit' class='searchButton'>
              <img src='https://cdn-icons-png.flaticon.com/512/10905/10905219.png' class='search-img' border='0' />
            </button>
          </div>
        </div>
        <img src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' class='menu-icon' />
      </div>
      <div class='cardview'>
        <text class='card-title'>Title</text>
        <div class='card'>
          Vocabulary
        </div>
        <div class='arrows-container'>
          <button><i class='arrow left' /></button>
          <button class='shuffle-button'>Shuffle</button>
          <button><i class='arrow right' /></button>
        </div>
      </div>
      <div class='bottom-bar'>
        <button class='share-button'>
          <img src='https://w7.pngwing.com/pngs/176/664/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome-thumbnail.png' class='share-icon' />
        </button>
      </div>
    </div>

  )
}

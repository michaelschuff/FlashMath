import React from 'react'
import { ShareButton } from './ShareButton.jsx'
import { Logo } from './Logo.jsx'
import { SearchBar } from './SearchBar.jsx'
import { Menu } from './Menu.jsx'
import { Cards } from './Cards.jsx'
import { CardNavigation } from './CardNavigation.jsx'
import './EditorPage.css'

function EditorPage () {
  return (
    <div class='editor-page'>
      <div class='top-bar'>
        <Logo />
        <SearchBar />
        <Menu />
      </div>
      <div class='cardview'>
        <Cards />
        <CardNavigation />
      </div>
      <div class='bottom-bar'>
        <ShareButton />
      </div>
    </div>
  )
}

export default EditorPage

import React, { useState } from 'react'
import { ShareButton } from './ShareButton.jsx'
import { Logo } from './Logo.jsx'
import { SearchBar } from './SearchBar.jsx'
import { Menu } from './Menu.jsx'
import { Cards } from './Cards.jsx'
import { CardNavigation } from './CardNavigation.jsx'
import './EditorPage.css'

function EditorPage () {
  
  const [leftData, setLeftData] = useState("left card");
  const [rightData, setRightData] = useState("right card");
  const [midData, setMidData] = useState("mid card");

  // add parameter, new_data later and replace the string
  const shiftCardLeft = () => {
    setLeftData(midData)
    setMidData(rightData)
    setRightData("new_data")
  }

  const shiftCardRight = () => {
    setRightData(midData)
    setMidData(leftData)
    setLeftData("new data")
  }

  const shuffleSet = () => {
    setRightData("right card")
    setMidData("mid card")
    setLeftData("left card")
  }

  return (
    <div class='editor-page'>
      <div class='top-bar'>
        <Logo />
        <SearchBar />
        <Menu />
      </div>
      <div class='cardview'>
        <Cards leftData={leftData} midData={midData} rightData={rightData}/>
        <CardNavigation shiftCardLeft={shiftCardLeft} shiftCardRight={shiftCardRight} shuffleSet={shuffleSet}/>
      </div>
      <div class='bottom-bar'>
        <ShareButton />
      </div>
    </div>
  )
}

export default EditorPage

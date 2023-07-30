import React, { useState } from 'react'
import { ShareButton } from './ShareButton.jsx'
import { Logo } from './Logo.jsx'
import { SearchBar } from './SearchBar.jsx'
import { Menu } from './Menu.jsx'
import { Cardss } from './Cardss.jsx'
import { CardNavigation } from './CardNavigation.jsx'
import './EditorPage.css'

function EditorPage () {
  const [leftData, setLeftData] = useState('left card')
  const [rightData, setRightData] = useState('right card')
  const [midData, setMidData] = useState('mid card')

  // add parameter, new_data later and replace the string
  const handleShiftCardLeft = () => {
    setLeftData(midData)
    setMidData(rightData)
    setRightData('new_data')
  }

  const handleShiftCardRight = () => {
    setRightData(midData)
    setMidData(leftData)
    setLeftData('new data')
  }

  const handleShuffleSet = () => {
    setRightData('right card')
    setMidData('mid card')
    setLeftData('left card')
  }

  return (
    <div class='editor-page'>
      <div class='top-bar'>
        <Logo />
        <SearchBar />
        <Menu />
      </div>
      <div class='cardview'>
        <Cards leftData={leftData} midData={midData} rightData={rightData} />
        <CardNavigation shiftCardLeft={handleShiftCardLeft} shiftCardRight={handleShiftCardRight} shuffleSet={handleShuffleSet}/>
      </div>
      <div class='bottom-bar'>
        <ShareButton />
      </div>
    </div>
  )
}

export default EditorPage

import React, { useState, useEffect } from 'react'
import { ShareButton } from './ShareButton.jsx'
import { Logo } from '../SiteItems/Logo.jsx'
import { SearchBar } from './SearchBar.jsx'
import { Menu } from '../SiteItems/Menu.jsx'
import { Cards } from './Cards.jsx'
import { CardNavigation } from './CardNavigation.jsx'

// import { EditableText } from './EditCard.jsx'
import './EditorPage.css'
import '../SiteItems/Logo.css'
import '../SiteItems/Menu.css'

function EditorPage ({ cardtitles, cardtexts, backcardtexts }) {
  const [lTitle, setLTitle] = useState('')
  const [mTitle, setMTitle] = useState('')
  const [rTitle, setRTitle] = useState('')
  const [lText, setLText] = useState('')
  const [mText, setMText] = useState('')
  const [rText, setRText] = useState('')
  const [index, setIndex] = useState(0)

  const updateCardData = () => {
    console.log('length: [0,' + cardtexts.length + ']')
    console.log('index: ' + index)
    if (index > 0) {
      setLText(cardtexts[index - 1])
      setLTitle(cardtitles[index - 1])
    } else {
      setLText('')
      setLTitle('')
    }
    if (currentCardSide === 'front') {
      setMText(cardtexts[index])
    } else {
      setMText(backcardtexts[index])
    }
    setMTitle(cardtitles[index])
    if (index < cardtexts.length - 1) {
      setRText(cardtexts[index + 1])
      setRTitle(cardtitles[index + 1])
    } else {
      setRText('')
      setRTitle('')
    }
  }
  useEffect(() => {
    setLText(cardtexts[index - 1] || '')
    setLTitle(cardtitles[index - 1] || '')
    setMText(cardtexts[index])
    setMTitle(cardtitles[index])
    setRText(cardtexts[index + 1] || '')
    setRTitle(cardtitles[index + 1] || '')
  }, [index, cardtitles, cardtexts])
  const shiftCardLeft = () => {
    console.log('index: ' + index)
    console.log('ShiftCardLeft')
    if (index > 0) {
      setIndex(index - 1)
    }
    updateCardData()
  }

  const shiftCardRight = () => {
    console.log('index: ' + index)
    console.log('ShiftCardRight')
    if (index < cardtexts.length - 1) {
      setIndex(index + 1)
    }
    updateCardData()
  }

  const [currentCardSide, setCurrentForm] = useState('front')
  const shuffleSet = () => {
    // setIndex(Math.floor(Math.random() * (cardtitles.length - 1)))
    // updateCardData()
    if (currentCardSide === 'front') {
      setCurrentForm('back')
      setMText(backcardtexts[index])
    } else {
      setCurrentForm('front')
      setMText(cardtexts[index])
    }
  }


  const toggleCard = (cardName) => {
    setCurrentForm(cardName)
  }

  return (
    <div class='editor-page'>
      <div class='top-bar'>
        <Logo />
        <SearchBar />
        <Menu />
      </div>
      <div class='cardview'>
        {currentCardSide === 'front' ? <Cards leftText={lText} leftTitle={lTitle} midText={mText} midTitle={mTitle} rightText={rText} rightTitle={rTitle} onCardSwitch={toggleCard} /> : <Cards leftText={lText} leftTitle={lTitle} midText={mText} midTitle={mTitle} rightText={rText} rightTitle={rTitle} onCardSwitch={toggleCard} />}
        <CardNavigation handleShiftCardLeft={shiftCardLeft} handleShiftCardRight={shiftCardRight} handleShuffleSet={shuffleSet} />
      </div>
      <div class='bottom-bar'>
        <ShareButton />
      </div>
    </div>
  )
}

export default EditorPage

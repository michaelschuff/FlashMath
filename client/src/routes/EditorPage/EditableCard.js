import React, { useState, useRef } from 'react'

const EditableCard = ({ initialText, backText, title, type, onCardSwitch }) => {
  const editableRef = useRef(null)
  const [currentCardSide, setCurrentCardSide] = useState('front')

  const handleClick = () => {
    editableRef.current.focus()
  }
  const flipCard = () => {
    setCurrentCardSide(currentCardSide === 'front' ? 'back' : 'front')
  }

  return (
    <div className={type}>
      <div className='card-content'>
        <div className='card-title'>
          {title}
        </div>
        <div
          className='card-text'
          ref={editableRef}
          contentEditable='true'
          onClick={handleClick}
        >
          {currentCardSide === 'front' ? initialText : backText}
        </div>
        {type === 'card-mid' && (
          <div
            className='flip-button'
            onClick={() => {
              flipCard()
              onCardSwitch('card-mid')
            }}
          >
            Flip
          </div>
        )}
      </div>
    </div>
  )
}

export default EditableCard

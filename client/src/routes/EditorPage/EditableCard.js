import React, { useState, useRef } from 'react'
import Latex from 'react-latex';

const EditableCard = ({ initialText, backText, title, type, onCardSwitch, currentCardSide }) => {
  const editableRef = useRef(null)

  const handleClick = () => {
    editableRef.current.focus()
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
          {currentCardSide === 'front' ? (
            <Latex>{initialText}</Latex>
          ) : (
            <Latex>{backText}</Latex>
          )}
        </div>
        {type === 'card-mid' && (
          <div className='flip-button' onClick={() => onCardSwitch(currentCardSide === 'front' ? 'back' : 'front')}>
            Flip
          </div>
        )}
      </div>
    </div>
  )
}

export default EditableCard

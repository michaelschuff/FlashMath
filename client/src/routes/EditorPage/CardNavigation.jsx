import React from 'react'
// import EditorPage from './EditorPage'

export const CardNavigation = ({ handleShiftCardLeft, handleShuffleSet, handleShiftCardRight }) => {
  return (
    <div class='arrows-container'>
      <button><i class='left-arrow' id='left-arrow' onClick={handleShiftCardLeft} /></button>
      <button class='shuffle-button' onClick={handleShuffleSet}>Shuffle</button>
      <button><i class='right-arrow' id='right-arrow' onClick={handleShiftCardRight} /></button>
    </div>
  )
}

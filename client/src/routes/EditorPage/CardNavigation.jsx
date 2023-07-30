import React from 'react'
// import EditorPage from './EditorPage'

export const CardNavigation = (props) => {
  return (
    <div class='arrows-container'>
      <button><i class='arrow' id='left-arrow' onClick={props.handleShiftCardLeft} /></button>
      <button class='shuffle-button' onClick={props.handleShuffleSet}>Shuffle</button>
      <button><i class='arrow right' id='right-arrow' onClick={props.handleShiftCardRight }/></button>
    </div>
  )
}
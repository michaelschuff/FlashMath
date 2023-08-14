import React from 'react'
import Latex from 'react-latex';

export const Card = ({ initialText, title, type }) => {
  return (
    <div class={type}>
      <div class='card-content'>
        <div class='card-title'>
          {title} 
        </div>
        <div class='card-text'>
          <Latex>{initialText}</Latex>
        </div>
      </div>
    </div>
  )
}

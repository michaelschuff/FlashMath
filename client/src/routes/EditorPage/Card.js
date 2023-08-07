import React from 'react'


export const Card = ({ initialText, title, type }) => {
  return (
    <div class={type}>
      <div class='card-content'>
        <div class='card-title'>
          {title}
        </div>
        <div class='card-text'>
          {initialText}
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export const Card = ({ initialText, title, type }) => {
  return (
    <div class={type}>
      <text>{title}</text>
      <div>
        {initialText}
      </div>
    </div>
  )
}

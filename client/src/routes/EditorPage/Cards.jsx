import React from 'react'
<<<<<<< HEAD
import EditorPage from './EditorPage'
import { Card } from './Card.jsx'
=======
// import EditorPage from './EditorPage'
>>>>>>> fc8d8cb (merged correctly now)

export const Cards = (props) => {
  return (
    <div class='cards'>
      <text class='card-title'>Title</text>
      <div class='card-container'>
        <div class='card left'>
          {props.leftData}
        </div>
        <div class='card mid'>
          {props.midData}
        </div>
        <div class='card right'>
          {props.rightData}
        </div>
      </div>
    </div>
  )
}
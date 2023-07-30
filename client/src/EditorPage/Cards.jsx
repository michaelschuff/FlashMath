import React from 'react'
import EditorPage from './EditorPage'
import { Card } from './Card.jsx'

export const Cards = () => {
  return (
    <div class = 'cards'>
      <text class='card-title'>Title</text>
      <div class='card-container'>
        <div class='card left'>
            Vocabulary
        </div>
        <div class='card mid'>
            Vocabulary
        </div>
        <div class='card right'>
            Vocabulary
        </div>
      </div>
    </div>
  )
}
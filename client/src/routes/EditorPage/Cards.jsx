import React from 'react'

import { Card } from './Card.jsx'
import EditableCard from './EditableCard.jsx'
import './EditorPage.css'

export const Cards = (props) => {
  return (
    <div class='card-container'>
      <Card class='card' type='card-left' initialText={props.leftText} title={props.leftTitle} />
      <EditableCard class='card' type='card-mid' initialText={props.midText} title={props.midTitle} />
      <Card class='card' type='card-right' initialText={props.rightText} title={props.rightTitle} />
    </div>
  )
}

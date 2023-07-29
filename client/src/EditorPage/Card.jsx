import React from 'react'
import EditableText from './EditCard';

export const Card = () => {
  return (
    <div>
      <text class='card-title'>Title</text>
      <div class='card'>
        <EditableText initialText="Vocabulary"/>
      </div>
    </div>
  )
}

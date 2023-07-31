import React, { useState, useRef } from 'react'

const EditableCard = ({ initialText, title, type }) => {

  const editableRef = useRef(null)

  const handleClick = () => {
    editableRef.current.focus()
  }

  return (
    <div class={type}>
      <div class='card-content'>
        <div class='card-title'>
          {title}
        </div>
        <div
          class='card-text'
          ref={editableRef}
          contentEditable='true'
          onClick={handleClick}
        >
          {initialText}
        </div>
      </div>
    </div>
  )
}

export default EditableCard

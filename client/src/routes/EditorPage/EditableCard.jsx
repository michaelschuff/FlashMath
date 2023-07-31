import React, { useRef, useState } from 'react'

const EditableCard = ({ initialText, title, type }) => {
  const editableRef = useRef(null)

  const handleClick = () => {
    editableRef.current.focus()
  }

  return (
    <div class={type}>
      <text>{title}</text>
      <div
        ref={editableRef}
        contentEditable='true'
        onClick={handleClick}
      >
        {initialText}
      </div>
    </div>
  )
}

export default EditableCard

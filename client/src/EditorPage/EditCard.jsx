import React, { useRef } from 'react';

const EditableText = ({ initialText }) => {
  const editableRef = useRef(null);

  const handleClick = () => {
    editableRef.current.focus();
  };

  return (
    <div
      ref={editableRef}
      contentEditable="true"
      onClick={handleClick}
      style={{ 
        outline: 'none', 
        padding: '5px', 
        cursor: 'text' }}
    >
      {initialText}
    </div>
  );
};

export default EditableText;

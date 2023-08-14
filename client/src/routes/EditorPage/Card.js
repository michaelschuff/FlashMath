import React, {useState} from 'react'
import Latex from 'react-latex';
import './EditorPage.css'

export const Card = ({ initialText, title, type, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    console.log("FLIP ME");
    console.log(backText);
  };

  return (
    <div className={type} onClick={handleCardClick}>
      <div className='card-content'>
        <div className='card-title'>
          {isFlipped ? <Latex>{backText}</Latex>: title}
        </div>
      </div>
    </div>
  )
}

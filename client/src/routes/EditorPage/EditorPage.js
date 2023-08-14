import React, { useState, useEffect } from 'react'
import { ShareButton } from './ShareButton.js'
import { Logo } from '../../components/Branding/Logo.js'
import { SearchBar } from '../../components/Searchbar/SearchBar.js'
import { Menu } from '../../components/Menu/Menu.js'
import { Cards } from './Cards.js'
import { CardNavigation } from './CardNavigation.js'

import { SaveDeckButton } from './SaveDeckButton.js'
import { CreateDeckButton } from './CreateDeckButton.js'
  


import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiFillPlusSquare } from 'react-icons/ai';
import {Card} from './Card.js'

// import { EditableText } from './EditCard.jsx'
import './EditorPage.css'

function EditorPage({ userDeck }) {
function EditorPage ({ cardtitles, cardtexts, backcardtexts }) {
  const jwtToken = localStorage.getItem('jwtToken');
  
  
  const [lTitle, setLTitle] = useState('')
  const [mTitle, setMTitle] = useState('')
  const [rTitle, setRTitle] = useState('')
  const [lText, setLText] = useState('')
  const [mText, setMText] = useState('')
  const [rText, setRText] = useState('')
  const [index, setIndex] = useState(0)
  const [currentCardSide, setCurrentForm] = useState('front')
  const [deck, setDeck] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  const updateCardData = () => {
    console.log('length: [0,' + cardtexts.length + ']')
    console.log('index: ' + index)
    if (index > 0) {
      setLText(cardtexts[index - 1])
      setLTitle(cardtitles[index - 1])
    } else {
      setLText('')
      setLTitle('')
    }
    if (currentCardSide === 'front') {
      setMText(cardtexts[index])
    } else {
      setMText(backcardtexts[index])
    }
    setMTitle(cardtitles[index])
    if (index < cardtexts.length - 1) {
      setRText(cardtexts[index + 1])
      setRTitle(cardtitles[index + 1])
    } else {
      setRText('')
      setRTitle('')
    }
  }

  const [newCardFront, setNewCardFront] = useState('');
  const [newCardBack, setNewCardBack] = useState('');

  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  // Fetch decks via JWT
  useEffect(() => {
    if (jwtToken) {
      fetchDecks();
    }
  }, []);

  async function handleAddCard(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:9999/api/user/${decodedToken.id}/decks/${deck[index]._id}/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`,
        },
        body: JSON.stringify({
          front: newCardFront,
          back: newCardBack,
        }),
      });
      const result = await response.json();

      if (result.status === 'ok') {
        // Refresh the deck to see the updated cards
        fetchDecks();
        setNewCardFront('');
        setNewCardBack('');
      } else {
        console.log('Error adding card', result.error);
      }
    } catch (error) {
      console.log('Error adding card', error);
    }
  }

  // Fetching decks via JWT
  async function fetchDecks() {
    try {
      const response = await fetch(`http://localhost:9999/api/user/${decodedToken.id}/decks`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`,
        },
      });
      const result = await response.json();
      console.log('Fetched data:', result); // Log the fetched data

  const shuffleSet = () => {
    console.log('first' + index)
    setIndex(Math.floor(Math.random() * (cardtitles.length)))
    console.log('2nd' + index)
    updateCardData()
  }

      if (result.status === 'ok') {
        setDeck(result.data.decks); // Set the decks array
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error fetching decks', error);
      setIsLoading(true);
    }
  }

  let decodedToken = null;
  if (jwtToken) {
    const payload = jwtToken.split('.')[1];
    decodedToken = JSON.parse(atob(payload)); // Decoding base64 payload
  }

  const handleShiftCardLeft = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
    console.log(cardIndex);
  };

  const handleShiftCardRight = () => {
    if (cardIndex < deck[index].flashcards.length - 1) {
      setCardIndex(cardIndex + 1);
    }
    console.log(cardIndex);
  };

  const handleShuffleSet = () => {
    const shuffledFlashcards = deck[index].flashcards.slice().sort(() => Math.random() - 0.5);
    // Update the cardIndex to stay within the bounds of the shuffled flashcards
    const newIndex = Math.min(cardIndex, shuffledFlashcards.length - 1);
    const randomIndex = Math.floor(Math.random() * deck[index].flashcards.length);
    setCardIndex(randomIndex);
    console.log(cardIndex);
  };

  return (
    <div className='editor-page'>
      <div>
        {/* Display decoded token data */}
        {decodedToken && (
          <div>
            {decodedToken.username}
          </div>
        )}
      </div>
      <div className='top-bar'>
        <Logo />
        <SearchBar />
        <Menu />
      </div>

      <div className='cardview'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Card class='card' type='card-mid' title={deck[index].flashcards[cardIndex].front} backText = {deck[index].flashcards[cardIndex].back}/>
        </div>
      )}
              <CardNavigation
                handleShiftCardLeft={handleShiftCardLeft}
                handleShuffleSet={handleShuffleSet}
                handleShiftCardRight={handleShiftCardRight}
              />
      </div>

      <h3>Add New Card:</h3>
      <form onSubmit={handleAddCard}>
        <label>
          Front:
          <input
            type="text"
            value={newCardFront}
            onChange={(e) => setNewCardFront(e.target.value)}
          />
        </label>
        <label>
          Back:
          <input
            type="text"
            value={newCardBack}
            onChange={(e) => setNewCardBack(e.target.value)}
          />
        </label>
        <button type="submit">Add Card</button>
      </form>

      <div className='bottom-bar'>
        <ShareButton />
      </div>
    </div>
  );
}

export default EditorPage;

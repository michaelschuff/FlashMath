import React, { useState, useEffect } from 'react';
import { ShareButton } from './ShareButton.js';
import { Logo } from '../../components/Branding/Logo.js';
import { SearchBar } from '../../components/Searchbar/SearchBar.js';
import { Menu } from '../../components/Menu/Menu.js';
import { Cards } from './Cards.js';
import { CardNavigation } from './CardNavigation.js';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { AiFillPlusSquare } from 'react-icons/ai';
// import jwt_decode from 'jwt-decode' // Import the jsonwebtoken library

// import { EditableText } from './EditCard.jsx'
import './EditorPage.css';

function EditorPage({ userDeck }) {
  const jwtToken = localStorage.getItem('jwtToken');

  const [deck, setDeck] = useState(userDeck);
  const [index, setIndex] = useState(0);

  const [lTitle, setLTitle] = useState('');
  const [mTitle, setMTitle] = useState('');
  const [rTitle, setRTitle] = useState('');
  const [lText, setLText] = useState('');
  const [mText, setMText] = useState('');
  const [rText, setRText] = useState('');
  const [currentCardSide, setCurrentForm] = useState('front');

  // fetch on mount
  useEffect(()=>{
    if(jwtToken){
      fetchDecks();
    }
  }, []);

  // Fetching decks via JWT
  async function fetchDecks(){
    try{
      const response = await fetch('http://localhost:9999/api/user/decks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ${jwtToken}',
        },
      });
      const result = await response.json();

      if(result.status === 'ok'){
        setDeck(result.data);
      }
    } catch(error){
      console.log('Error fetching decks', error)
    }
  }

  let decodedToken = null;
  if (jwtToken) {
    const payload = jwtToken.split('.')[1];
    decodedToken = JSON.parse(atob(payload)); // Decoding base64 payload
  }

// {JSON.stringify(decodedToken, null, 2)}
// FORMAT TOKEN PLEASE
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
        {mTitle}
      </div>
      <AiOutlinePlusSquare />
      <div className='bottom-bar'>
        <ShareButton />
      </div>
    </div>
  );
}

export default EditorPage;

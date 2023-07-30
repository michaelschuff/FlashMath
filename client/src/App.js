import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';

// Add Routes Below:
import Login from './routes/LoginPage/LoginPage.js'
import MainCardDisplay from './routes/MainCardDisplay/Card.js'

function App () {
  return (
  // comment or uncomment the lines below
    <Router>
      <Routes>
        <Route path='/' id='LoginPage' element={<LoginPage />} />
        <Route path='/cards' id='EditorPage' element={<EditorPage />} />
      </Routes>
    </Router>
  )
}

export default App

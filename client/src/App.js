import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
// import CardPage from './Card.js'

// Add Routes Below:
import Login from './routes/LoginPage/LoginPage.js'
import MainCardDisplay from './routes/MainCardDisplay/Card.js'

function App () {
  return (
  // comment or uncomment the lines below
    <Router>
      <Routes>
        <Route path='/' id='Login' element={<Login/>} />
        <Route path='/cards' id='MainCardDisplay' element={<MainCardDisplay/>} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
<<<<<<< HEAD
// import CardPage from './Card.js'

// Add Routes Below:
import Login from './routes/LoginPage/LoginPage.js'
import MainCardDisplay from './routes/MainCardDisplay/Card.js'
=======
import EditorPage from './EditorPage/EditorPage.js'
// import LoginPage from './LoginPage/LoginPage.js'
>>>>>>> 5c18ed4 (refactored code)

function App () {
  return (
  // comment or uncomment the lines below
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path='/' id='Login' element={<Login/>} />
        <Route path='/cards' id='MainCardDisplay' element={<MainCardDisplay/>} />
      </Routes>
    </Router>
=======

    <EditorPage> </EditorPage>
    // <LoginPage> </LoginPage>
>>>>>>> 5c18ed4 (refactored code)
  )
}

export default App

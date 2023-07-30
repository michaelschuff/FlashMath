import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Add Routes Below:
import EditorPage from './routes/EditorPage/EditorPage.js'
import LoginPage from './routes/LoginPage/LoginPage.js'

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

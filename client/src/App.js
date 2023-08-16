import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Add Routes Below:
import EditorPage from './routes/EditorPage/EditorPage.js'
import LoginPage from './routes/LoginPage/LoginPage.js'

function App () {
  return (
  // comment or uncomment the lines below
    <Router>
      <Routes>
        <Route path='/' id='LoginPage' element={<LoginPage />} />
        <Route path='/cards' id='EditorPage' element={<EditorPage cardtitles={['Title Card', 'chain rule', 'integral', 'catssss', 'butt soup']} cardtexts={['These are my Flash Cards By FlashMath inc B)', '\$\\frac{d}{dx} f(g(x)) = f(g(x)) \\cdot g(x)\$', '\$\\int_{a}^{b} f(x) dx= F(a)-F(b)\$', '}:>', '~D']} backcardtexts={['back1', 'back2', 'back3', 'back4', 'back5', 'back6']} />} />
      </Routes>
    </Router>
  )
}

export default App

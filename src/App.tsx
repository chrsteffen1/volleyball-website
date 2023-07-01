import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Schedule from './Schedule'
import Vods from './Vods'

function App() {

  return (
    <div className='app'>
    <div className='app-container'>
      <NavBar />
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/vods' element={<Vods />} />
      </Routes>
      <footer>
        <p>© 2023 Men's Volleyball League. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

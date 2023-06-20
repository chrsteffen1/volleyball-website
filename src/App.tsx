import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Schedule from './Schedule'
import Vods from './Vods'

function App() {

  return (
    <>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/vods' element={<Vods />} />
      </Routes>
    </>
  )
}

export default App

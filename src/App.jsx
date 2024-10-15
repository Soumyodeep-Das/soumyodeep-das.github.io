import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      {/* <Education /> */}
    </>
  )
}

export default App

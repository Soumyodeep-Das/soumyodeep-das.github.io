import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      {/* <Education /> */}
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App

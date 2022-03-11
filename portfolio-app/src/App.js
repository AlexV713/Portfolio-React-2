import React from 'react'
import Header from './components/Header.js'
import Home from './Home.js'
import Work from './Work.js'
import About from './About.js'
import Pdx from './components/projects/Pdx.js'
import Footer from './components/Footer.js'

import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="work" element={ <Work /> } />
          <Route path="about" element={ <About /> } />
          <Route path="PDX-Handyman-Services-LLC" element={ <Pdx /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

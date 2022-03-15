import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id="home-content">
    <div id="me-container">
      <Link to="/">
        <img src="./images/selfie.jpg" id="myself" alt="Alejandro Valerio a web developer and UI designer who is also a 3D artist."/>
      </Link>
    </div>
    <div id="home-text">
      <h2>Alejandro Valerio</h2>
      <h3>Web Developer | UI Designer</h3>
      <p>A highly creative, artistic developer with a passion for developing websites and designing</p>
    </div>
  </section>
  )
}

export default Home
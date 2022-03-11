import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id="home-content">
    <div id="me-container">
      <Link to="/">
        <img src="./images/selfie.jpg" id="myself" />
      </Link>
    </div>
    <h2 className="name">Alejandro Valerio</h2>
    <h3>Web Developer | UI Designer</h3>
    <p>A highly creative, artistic developer with a passion for developing websites</p>
    <div id="home-buttons">
        <Link to="work">My Work</Link>
    </div>
  </section>
  )
}

export default Home
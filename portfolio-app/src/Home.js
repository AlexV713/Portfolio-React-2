import React from 'react'

function Home() {
  return (
    <section id="home-page">
    <div id="me-container">
      <a href="App.js">
        <img src="./images/selfie.jpg" id="myself" />
      </a>
    </div>
    <h2 className="name">Alejandro Valerio</h2>
    <h3>Web Developer | UI Designer</h3>
    <p>A highly creative, artistic developer with a passion for developing websites</p>
    <div id="home-buttons">
        <a href="work.php">My Work</a>
    </div>
  </section>
  )
}

export default Home
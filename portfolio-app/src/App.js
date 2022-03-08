import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="home-page">
          <div id="me">
            <a href="App.js">
              <img src="./images/selfie.jpg"/>
            </a>
          </div>
          <h2 className="name">Alejandro Valerio</h2>
          <h3>Web Developer | UI Designer</h3>
          <p>A highly creative, artistic developer with a passion for developing websites</p>
          <div id="home-buttons">
              <a href="work.php">My Work</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

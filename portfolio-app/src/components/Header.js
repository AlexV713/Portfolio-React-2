import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"

function header() {
  return (
    <header>
        <a href="../App.js" id="title">
            <h1>Alejandro Valerio</h1>
        </a>

        <nav id="desktop-nav">
            <a href="../App.js" className="links">Home</a>
            <a href="../App.js" className="links">My Work</a>
            <a href="../App.js" className="links">About Me</a>
                <div id="icons-container">
                    <a href="https://github.com/AlexV713" className="icon-links" target="_blank">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-valerio-9b57b31b0/" className="icon-links" target="_blank">
                        <FaLinkedin/>
                    </a>
                </div>
        </nav>
    </header>
  )
}

export default header
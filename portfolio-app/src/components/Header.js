import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"

function header() {
  return (
    <header>
        <Link to="/" id="title">
            <h1>Alejandro Valerio</h1>
        </Link>

        <nav id="desktop-nav">
            <Link to="/" className="links">Home</Link>
            <Link to="work" className="links">My Work</Link>
            <Link to="about" className="links">About Me</Link>
                <div id="icons-container">
                    <a href="https://github.com/AlexV713" className="icon-links" target="_blank">
                        <FaGithub/>&nbsp;
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
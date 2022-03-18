import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa"

function Header() {
    const [visible, setVisible] = React.useState(false);
  return (
    <header>
        <div id="desktop-nav">
            <Link to="/" id="title">
                <h1>Alejandro Valerio</h1>
            </Link>

            <nav id="desktop-nav-links">
                <Link to="/" className="links">Home</Link>
                <Link to="My-Work" className="links">My Work</Link>
                <Link to="About-Me" className="links">About Me</Link>
                <div id="icons-container">
                    <a href="https://github.com/AlexV713" className="icon-links" target="_blank" rel="noreferrer">
                        <FaGithub/>&nbsp;
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-valerio-9b57b31b0/" className="icon-links" target="_blank" rel="noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>
            </nav>
        </div>

        <div id="mobile-header">
            <div id="front">
                <Link to="/" id="mobile-title">
                    <h1>AV</h1>
                </Link>
                <FaBars className="toggle-bars" onClick={() => setVisible(!visible)}/>
            </div>
            <nav id="mobile-navigation" style={{display: visible ? 'block' : 'none'}}>
                <ul id="links-list">
                    <li><Link to="/" className="links" onClick={() => setVisible(!visible)}>Home</Link></li>
                    <li><Link to="My-Work" className="links" onClick={() => setVisible(!visible)}>My Work</Link></li>
                    <li><Link to="About-Me" className="links" onClick={() => setVisible(!visible)}>About Me</Link></li>
                </ul>
            </nav>
            <div id="mobile-icons" style={{display: visible ? 'block' : 'none'}}>
                <div id="icons-container">
                    <a href="https://github.com/AlexV713" className="icon-links" target="_blank" rel="noreferrer">
                        <FaGithub/>&nbsp;
                    </a>
                    <a href="https://www.linkedin.com/in/alejandro-valerio-9b57b31b0/" className="icon-links" target="_blank" rel="noreferrer">
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
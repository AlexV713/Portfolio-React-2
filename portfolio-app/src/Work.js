import React from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaSass, FaCode } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiJquery, SiPhp } from "react-icons/si";
import { Link } from 'react-router-dom'

function Work() {
  return (
    <section id="work-content">
      <h2>My Work</h2>
      <div className="boxes-container">
        <div className="box">
          <Link to="/PDX-Handyman-Services-LLC">
            <img src="./images/pdx-react.jpg" className="thumbnails" alt="PDX Handyman Services LLC"/>
          </Link>
          <p className="project-title">PDX Handyman Services LLC</p>
          <p className="tech-used">Technologies Used:</p>
          <div className="tech-list">
            <ol>
              <li>React <FaReact className="reactjs"/></li>
              <li>SASS <FaSass className="scss"/></li>
              <li>XML <FaCode className="xml"/></li>
            </ol>
          </div>
          <p className="readMore"><Link to="/PDX-Handyman-Services-LLC">Read more...</Link></p>
        </div>
        
        <div className="box">
          <Link to="/Ace-in-the-Hole-Multisport-Events">
            <img src="./images/aith.jpg" className="thumbnails" alt="PDX Handyman Services LLC"/>
          </Link>
          <p className="project-title">Ace In The Hole Multisport Events</p>
          <p className="tech-used">Technologies Used:</p>
          <div className="tech-list">
            <ol>
              <li>HTML5 <FaHtml5 className="html"/></li>
              <li>CSS3 <FaCss3Alt className="css3"/></li>
              <li>SASS <FaSass className="scss"/></li>
              <li>JavaScript <IoLogoJavascript className="javascript"/></li>
              <li>jQuery <SiJquery className="jquery"/></li>
              <li>PHP <SiPhp className="php"/></li>
            </ol>
          </div>
          <p className="readMore"><Link to="/PDX-Handyman-Services-LLC">Read more...</Link></p>
        </div>
        
      </div>
    </section>
  )
}

export default Work
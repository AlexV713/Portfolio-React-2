import React from 'react'
import { FaHtml5, FaCss3Alt, FaSass, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiJquery, SiPhp, SiMysql } from "react-icons/si";

function Ace() {
  return (
    <section className="work-sections">            
    <div className="information">
        <h2>Ace in The Hole Multisport Events</h2>
        <img src="../images/aith.jpg" alt="This is a dictionary web app."/>
        <div className="project-links">
            <a href="http://alejandrovalerio.me/projects/ace-in-the-hole" target="_blank" rel="noreferrer" className="links">Live Preview <FaExternalLinkAlt /></a>
            <a href="https://github.com/AlexV713/Ace-in-the-Hole-Multisport-events" target="_blank" rel="noreferrer" className="links">Repository <FaGithub /></a>
        </div>
        <p>Website for a fictional organization that hosts multi-sport events every summer. This project website has a responsive image gallery, lots of texts describing the events, colored text highlighted important text and rules, live Twitter feed, live weather feed, register form that stores the submissions in a database, and a contact form that sends the submissions to an email.</p>
        <h3 class="project-headings">Technologies Used</h3>
        <ol>
            <li>HTML5 <FaHtml5 className="html"/></li>
            <li>CSS3 <FaCss3Alt className="css3"/></li>
            <li>SASS <FaSass className="scss"/></li>
            <li>JavaScript <IoLogoJavascript className="javascript"/></li>
            <li>jQuery <SiJquery className="jquery"/></li>
            <li>PHP <SiPhp className="php"/></li>
            <li>MySQL <SiMysql className="mysql"/></li>
        </ol>
    </div>
    <div className="information">
        <h3 className="project-headings">My Role</h3>
        <p>I created this website with HTML5 and PHP and the database in phpMyAdmin with MySQL to store all the form submissions. On Adobe XD, I created the wireframes and mockups for each page. I added the text from the document that was given to us by the professor, created the image gallery, highlighted important text, styled the website to be responsive across all devices and browsers, created and styled the forms, database tables, and added the social media feeds.</p>
        <h3 className="project-headings">Project Difficulties</h3>
        <p>The database wasn’t receiving the form submissions, and it wasn’t connecting.</p>
        <h3 className="project-headings">The Solution</h3>
        <p>I double-checked the database by making sure everything was working correctly, and if I typed everything correctly. The problem was that I misspelled one query. This taught me to be detail-oriented and double check everything for than once.</p>
        <h3 className="project-headings">Notable Features</h3>
        <ol>
            <li>A sign-up form</li>
            <li>A database that receives information from the form submissions</li>
            <li>Live social media and weather feeds</li>
            <li>Toggling information made with only CSS3</li>
            <li>A button that scrolls the page back to the top</li>
            <li>Responsive across all devices and browsers</li>
        </ol>
    </div>
    </section>
  )
}

export default Ace
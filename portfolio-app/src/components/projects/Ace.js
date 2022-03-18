import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

function Ace() {
  return (
    <section className="work-sections">            
    <div className="information">
        <h2>Ace in The Hole Multisport Events</h2>
        <img src="../images/aith.jpg" alt="This is a dictionary web app."/>
        <div className="project-links">
            <a href="http://alejandrovalerio.com/projects/Ace-in-the-Hole-Multisport-Events" target="_blank" rel="noreferrer" className="links">Live Preview <FaExternalLinkAlt /></a>
            <a href="https://github.com/AlexV713/Ace-in-the-Hole-Multisport-events" target="_blank" rel="noreferrer" className="links">Repository <FaGithub /></a>
        </div>
        <p>Website for fictional organization that hosts multi-sport events every summer. I created sign-up forms, live social media feeds and a fully functional MySQL database. I built this website with PHP, JavaScript, and created the wireframes and mockups in Adobe XD.</p>
        <h3 class="project-headings">Technologies Used</h3>
        <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>MySQL</li>
        </ol>
    </div>
    <div className="information">
        <h3 className="project-headings">My Role</h3>
        <p>I created this website with HTML5 and PHP. I also created a database in phpMyAdmin with MySQL to store all the register page submissions. On Adobe XD, I created the wireframes and mockups. I added the text from the document that was given to us by the professor, styled the website to be responsive to all devices and browsers, created the forms, database tables, and added the social media feeds.</p>
        <h3 className="project-headings">Project Difficulties</h3>
        <p>The database wasn’t receiving the form submissions, and it wasn’t connecting.</p>
        <h3 className="project-headings">The Solution</h3>
        <p>I double-checked the database, made sure everything was working correctly, and if I typed everything correctly. The problem was that I misspelled one query.</p>
        <h3 className="project-headings">Notable Features</h3>
        <ol>
            <li>Sign-up form</li>
            <li>Database that receives information</li>
            <li>Live social media feeds</li>
            <li>Toggling information with only CSS3</li>
            <li>Back to top button</li>
        </ol>
    </div>
    </section>
  )
}

export default Ace
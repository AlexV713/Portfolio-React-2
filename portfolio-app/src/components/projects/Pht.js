import React from 'react'
import { FaHtml5, FaCss3Alt, FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { SiPhp} from "react-icons/si";

function Pht() {
  return (
    <section className="work-sections">
        <div className="information">
            <h2>Portland Historical Tours</h2>
            <img src="../images/pht.jpg" alt="This is a dictionary web app."/>
            <div className="project-links">
                <a href="http://alejandrovalerio.com/projects/Portland-Historical-Tours" target="_blank" rel="noreferrer" className="links">Live Preview <FaExternalLinkAlt /></a>
                <a href="https://github.com/AlexV713/portland-historical-tours" target="_blank" rel="noreferrer" className="links">Repository <FaGithub /></a>
            </div>
            <p>The website is being hosted on my student hosting server. This is the first static website I've ever created with HTML5, CSS3, and PHP!</p>
            <h3 className="project-headings">Technologies Used</h3>
            <ol>
                <li>HTML5 <FaHtml5 className="html"/></li>
                <li>CSS3 <FaCss3Alt className="css3"/></li>
                <li>PHP <SiPhp className="php"/></li>
            </ol>
        </div>
        <div className="information">
            <h3 className="project-headings">My Role</h3>
            <p>This was the first website I created. I created it with HTML5 and CSS3. I designed the wirefrmaes and mockups by drawing them on a white board, added the information, and did the styling.</p>

            <h3 className="project-headings">Project Difficulties</h3>
            <p>I was just starting web development in college during this project, and I didn’t know how to make functions with JavaScript. I wanted to add a drop-down navigation menu to the site.</p>

            <h3 className="project-headings">The Solution</h3>
            <p>I searched online on how to make a drop-down menu with CSS for the mobile display of the site, and luckily I found one that worked perfectly.</p>

            <h3 class="project-headings">Notable Features</h3>
            <ol>
                <li>Quick link images to the tours</li>
                <li>CSS3 drop-down navigation menu</li>
            </ol>
        </div>
    </section>
  )
}

export default Pht
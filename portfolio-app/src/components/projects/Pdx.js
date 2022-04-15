import React from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaSass, FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa"

function Pdx() {
  return (
    <section className="work-sections">
        <div className="information">
            <h2>PDX Handyman Services LLC</h2>
            <img src="../images/pdx-react.jpg" alt="PDX Handyman Services LLC"/>
            <div className="project-links">
                <a href="https://pdxhandymanservicesllc.com/" target="_blank" rel="noreferrer" className="links">Live Preview <FaExternalLinkAlt /></a>
                <a href="https://github.com/AlexV713/PDX-React" target="_blank" rel="noreferrer"className="links">Repository <FaGithub /></a>
            </div>
            <h3>About it</h3>
            <p>Business website for a renovator that highlights his previous contracts and summarizes his business. The business had an old website for a few years, but it didn’t meet the business’s standards. I created a responsive React.js website with fully custom CSS using SASS and created the wireframes and mockups in Adobe XD.</p>
            <h3 className="project-headings">Technologies Used</h3>
            <ol>
                <li>React.js <FaReact className="reactjs"/></li>
                <li>JSX <FaReact className="reactjs"/></li>
                <li>HTML5 <FaHtml5 className="html"/></li>
                 <li>XML <FaCode/></li>
                <li>CSS3 <FaCss3Alt className="css3"/></li>
                <li>SASS <FaSass className="scss"/></li>
            </ol>
        </div>
        <div className="information">
            <h3 className="project-headings">My Role</h3>
            <p>I used React.js to create this website with YARN package manager and react router for the navigation. On Adobe XD I designed the wireframes and mockups. In Photoshop, I edited most of the images by increasing their contrast, brightness, and removing people or objects. I added the text that he wanted me to add, the images, and the videos. I suggested the photo slide show and where to place his business card.</p>

            <h3 className="project-headings">Project Difficulties</h3>
            <p>I was having trouble displaying the home page content to be side by side.</p>

            <h3 className="project-headings">The Solution</h3>
            <p>I placed an auto column grid to make it responsive for all window sizes.</p>

            <h3 className="project-headings">Notable Features</h3>
            <ol>
                <li>A mobile dropdown menu created with React.js and CSS</li>
                <li>An image slideshow created with React.js and CSS</li>
                <li>Multiple videos on the home page</li>
                <li>Fully responsive across all devices and browsers</li>
            </ol>
        </div>
    </section>
  )
}

export default Pdx
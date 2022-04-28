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
            <p>Business website for a renovator that highlights his previous contract images in a gallery, his services, story, and work locations. He already had a website, but it was slow and lacked content. He came to me to create a responsive and fast React.js website with lots of content like images, text, and his work locations.</p>
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
            <p>I used React.js to create this website, YARN package manager, and react router for the navigation. On Adobe XD I designed the wireframes and mockups for each page. In Photoshop, I edited most of the images by increasing their contrast, brightness, and removing people or objects. I added the text that he wanted me to add, the images, and the videos. I suggested the photo slide show and where to place his business card. I created the sitemap with XML, and update it after making changes to the website.</p>

            <h3 className="project-headings">Project Difficulties</h3>
            <p>I was having trouble displaying the home page content to be side by side for desktops.</p>

            <h3 className="project-headings">The Solution</h3>
            <p>I placed an auto column grid to make it responsive for all window sizes and screen sizes.</p>

            <h3 className="project-headings">Notable Features</h3>
            <ol>
                <li>A mobile dropdown menu created with React.js and CSS</li>
                <li>An image slideshow created with React.js and CSS</li>
                <li>Fast loading</li>
                <li>Multiple videos on the home page</li>
                <li>Fully responsive across all devices and browsers</li>
            </ol>
        </div>
    </section>
  )
}

export default Pdx
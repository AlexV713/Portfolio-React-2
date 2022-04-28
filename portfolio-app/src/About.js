import React from 'react'
import { FaHtml5, FaReact, FaCss3Alt, FaSass, FaCode, FaFigma } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { SiJquery, SiVuedotjs, SiPhp, SiMysql, SiAdobecreativecloud, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiGimp } from "react-icons/si";

function About() {
  return (
    <section id="about-content">
      <h2>Alejandro Valerio</h2>
      <div id="about-container">
        <div id="picture">
          <img src="./images/alejandro-valerio.jpg" alt="web developer, ui designer, 3d artist, alejandro valerio"/>
          <h3>Web developer | UI Designer | 3D Artist</h3>
        </div>

        <div id="technologies-container">
          <h3>Technologies &#38; Software</h3>
          <div id="technologies-lists">
            <ul>
              <li>HTML5 <FaHtml5 className="html"/></li>
              <li>JSX <FaReact className="reactjs"/></li>
              <li>XML <FaCode/></li>
              <li>CSS3 <FaCss3Alt className="css3"/></li>
              <li>SCSS <FaSass className="scss"/></li>
              <li>SASS <FaSass className="scss"/></li>
            </ul>
            <ul>
              <li>JavaScript <IoLogoJavascript className="javascript"/></li>
              <li>jQuery <SiJquery className="jquery"/></li>
              <li>React.js <FaReact className="reactjs"/></li>
              <li>Vue.js <SiVuedotjs className="vuejs"/></li>
              <li>PHP <SiPhp className="php"/></li>
              <li>MySQL <SiMysql className="mysql"/></li>
            </ul>
            <ul>
              <li>Adobe Creative Cloud <SiAdobecreativecloud className="adobecc"/></li>
              <li>Adobe Photoshop <SiAdobephotoshop className="photoshop"/></li>
              <li>Adobe Illustrator <SiAdobeillustrator className="illustrator"/></li>
              <li>Adobe XD <SiAdobexd className="xd"/></li>
              <li>Figma <FaFigma className="noColor"/></li>
              <li>GIMP <SiGimp className="noColor"/></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="my-story">
        <h3>My Story and Why I am a Web Developer</h3>
        <p>Hello, I am Alejandro Valerio, a Web Developer, UI Designer and 3D artist. I am 24 years old and grew up in Cornelius, Oregon. <br/><br/>When I was in high school, I didn’t know what to do after graduating and what to major in college. I searched for the top paying jobs that require an associate’s degree or two years of college. After minutes of searching, I found a website that listed many jobs from technicians to developers, but the career that got my attention the most was the web developer's career. I read about it and learned that they are the ones who create and design websites. After reading more about web developers, I searched for their average salary and the amount of money they can make with years of experience. Reading about it surprised me because for some jobs they only require two years of college or a certification from a bootcamp and a few years of experience. The web development career sounded good to me because I enjoy working on a computer and I’ve always been interested in coding. Also, I have strong patience and I believe that with this trait, I can work for hours without getting tired. This motivated me to pursue a degree in web development and design at PCC and look for jobs after graduating. Also, improving my skills and learning new things.<br/><br/>During college, I doubted my choice in learning web development because I was afraid I wouldn't like it, but while taking my first course, I enjoyed working with HTML5 and CSS3 so much that I couldn’t wait to take my advanced courses. After two years at PCC, I got my degree in web development and design and am currently still learning new things to improve my skills.</p>
      
        <h3>What I Can Do As a Developer</h3>
        <p>College taught me how to create an entire website with HTML5, CSS3, LESS, JavaScript, jQuery, PHP, and mySQL. I can create a website with a database that can take in information from forms and display content from the database. The Ace in The Hole Multisport Events project website is originally supposed to take in the form submission in a database at phpMyAdmin. With PHP, I can make websites more complex by separating content like the header, navigation, footer, and other elements in an includes folder. I like to use includes to separate big content from a page like image galleries and long text. <br/><br/>React is a free and open-source front-end JavaScript library created by Meta for building user interfaces based on UI components. I enjoy making websites and webpages with React.js because it makes the website load fast, it's great for designing user-interfaces, it has many packages for developing, and it's nice to keep organized.<br/><br/>After College, I taught myself SASS, SCSS, React.js, and more JavaScript. I also kept improving my skills in HTML5 and CSS. I created my father's website and my portfolio with React.js and SASS. But I remade my portfolio website by using SCSS instead of SASS. I am a natural problem solver that will always look for bugs and find new ways to improve my projects. Solving issues and bugs taught me how to pay attention to detail and quickly learn from my mistakes. I am the type of person who ones I do something once, I can do it again without issues.</p>
      </div>
    </section>
  )
}

export default About
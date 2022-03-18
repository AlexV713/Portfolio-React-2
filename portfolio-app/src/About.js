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
          <img src="./images/me.jpg" alt="web developer, ui designer, 3d artist, alejandro valerio"/>
        </div>

        <h3>Web Developer | UI Designer | 3D Artist</h3>

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
        <p>Hello, I am Alejandro Valerio, a Web Developer and UI Designer. I am 24 years old and grew up in Cornelius, Oregon. <br/><br/>When I was in high school, I didn’t know what to do after graduating and what to major in college. A year after graduating from high school, I was trying to decide in what to major at PCC. I searched for the top paying jobs that require an associate’s degree or two years of college. After minutes of searching, I found a website that listed many jobs from technicians to developers, but the job title that caught my interest the most was the web developer’s career. I read about it and learned that they are the ones who create and design websites. After reading more about web developers, I searched for their average salary and the amount of money they can make with years of experience. Reading about it surprised me because for some jobs they only require two years of college or a certificate from a bootcamp and a few years of experience. The web development career sounded good to me because I enjoy working on a computer and I’ve always been interested in coding. Also, I have strong patience and I believe that with this skill, I can work for hours without tiring. This motivated me to pursue a degree in web development and design at PCC and look for jobs after graduating. <br/><br/>During college, I was doubting my choice in learning web development, but while taking my first course, I enjoyed working with HTML5 and CSS3 so much that I couldn’t wait to take my advanced courses and learn more things. I got my degree in web development and design at PCC and am currently still learning new things to improve my skills. Recently I learned React.js and have created two websites with it. <br/><br/>For these past few years, I’ve created many types of websites from small business websites, a weather website, a dictionary website, and a website for a renovator. My top technologies for web development are HTML5, CSS3, SASS, JavaScript, jQuery, React.js, and PHP. Now, for UI design, I like to use Adobe XD over Figma to design my wireframes and mockups because I have more years of experience designing in Adobe XD. During college; they assigned us to design wireframes and mockups. I’ve always been an artistic person and always submitted my wireframes with lots of details and good labeling. </p>
      </div>
    </section>
  )
}

export default About
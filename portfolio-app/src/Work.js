import React from 'react'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <section id="work-section">
      <h2>My Work</h2>
      <div className="boxes">
        <Link to="/PDX-Handyman-Services-LLC" className="box-links">
          <img src="./images/pdx-react.jpg" className="thumbnails" alt="PDX Handyman Services LLC"/>
        </Link>
        
        <Link to="" className="box-links">
          <img src="./images/aith.jpg" className="thumbnails" alt="PDX Handyman Services LLC"/>
        </Link>
        
        <Link to="" className="box-links">
          <img src="./images/pht.jpg" className="thumbnails" alt="PDX Handyman Services LLC"/>
        </Link>
      </div>
    </section>
  )
}

export default Work
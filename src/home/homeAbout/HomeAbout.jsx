import React from 'react'
import '../homeAbout/homeAbout.css'
import aboutleft from '../../assets/section2-img.png'
import aboutRight from '../../assets/our.png'
import {useNavigate } from 'react-router-dom'
const HomeAbout = () => {
  const navigate = useNavigate()
  return (
    <div className="section">
    <div className="about-container">
      <div className="about-left">
        <img src={aboutleft} alt=""/>
        <h1 className="about-left-heading">
          Discover the
          magic that
          happens when
          indulgence
          meets efficacy
        </h1>
      </div>
      <div className="about-right">
        <h1>Belladore Med Provide Professional Spa And Beauty Service Affordable</h1>
        <p>
          Immerse yourself in
          a world of
          sophistication and
          elegance as you
          embark on your
          skincare journey.
         
        </p>
        <div className="watch-btn">
         <button className="watch" onClick={()=>navigate('/about')}>Know More</button>
        </div>
        <div className="">
          <img src={aboutRight} alt=""/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeAbout
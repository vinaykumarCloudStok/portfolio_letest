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
        <div className="one-img-container">
        <img src={aboutleft} alt="" className='one-img'/>
        </div>
       
        <div className="aboot-new-content">
        <h1 className='about-left-heading'> Immerse yourself in
          a world of
          sophistication and
          elegance as you
          embark on your
          skincare journey.</h1>
        <div className="watch-btn">
         <button className="watch" onClick={()=>navigate('/about')}>Know More</button>
        </div>
        <div className="about-second-img">
          <img src={aboutRight} alt=""/>
        </div>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-right-heading">
          Discover the
          magic that
          happens when
          indulgence
          meets efficacy
        </h1>
      </div>
    </div>
  </div>
  )
}

export default HomeAbout
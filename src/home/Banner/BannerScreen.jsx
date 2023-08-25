import React from 'react'
import '../Banner/banner.css'
import bannerBg from '../../assets/bg.png'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import star from '../../assets/star.png'
import { useNavigate } from 'react-router-dom'
const BannerScreen = () => {
  const navigate = useNavigate()
  return (
  <div className="">
      <div className="section">
    <div className="home-content">
      <div className="home-left-content">
        <h1>Enhance Your Radiance With Exquisite Skincare Perfection <img src={star} alt=""
            className="star-img"/></h1>
        <div className="btn-container">
        <button type="button" onClick={()=>navigate('/shop')} className="apt-btn">Shop Now</button>
        </div>
      </div>
      <div className="home-right-content">
        <img src={bannerBg} alt=""/>
      </div>
    </div>
  </div>
  <div className="element-box">
    <div className="element-box-body">
      <div className="element-box-img">
        <div className="icon-heart-box">
          <img src={s1} alt=""/>
        </div>
    
      </div>
      <div className="element-box-img">
        <div className="icon-heart-box">
          <img src={s3} alt=""/>
        </div>
      
      </div>
      <div className="element-box-img">
        <div className="icon-heart-box">
          <img src={s2} alt=""/>
        </div>
     
      </div>
    </div>
  </div>
  </div>
  )
}

export default BannerScreen
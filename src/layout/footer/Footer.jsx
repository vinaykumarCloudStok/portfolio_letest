import React from 'react'
import { Link } from 'react-router-dom'
import '../footer/footer.css'
import footerlogo from '../../assets/logo1.png'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="section">
      <div className="footer-container">
      <div className="footer-img">
        <img src={footerlogo} alt=""/>
      </div>
        <div className="footer-card">
         
          <h1>Welcome to Link world Where beauty knows no bounds Welcome to Belladore Luxury</h1>
        </div>
        <div className="footer-menu">
          <ul>
            <h2>Menu</h2>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact us</Link></li>
            <li><Link to="#">FAQ</Link></li>
          </ul>
          <div>
            <h2>Social</h2>
            <div className="social-icon">
        <Link to="https://www.facebook.com/belladoreluxury" target='_blank'> <i className="fa-brands fa-facebook"></i></Link>
            <Link to="">
              <i className="fa-brands fa-youtube"></i>
            </Link>
             <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>
              <i className="fa-brands fa-instagram"></i>
             </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
   
  </footer>
  )
}

export default Footer
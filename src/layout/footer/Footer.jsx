import React from 'react'
import { Link } from 'react-router-dom'
import '../footer/footer.css'
import footerlogo from '../../assets/logo1.png'
const Footer = () => {
  return (
    <footer class="footer">
    <div class="section">
      <div class="footer-container">
      <div class="footer-img">
        <img src={footerlogo} alt=""/>
      </div>
        <div class="footer-card">
         
          <h1>Welcome to Link world Where beauty knows no bounds Welcome to Belladore Luxury</h1>
        </div>
        <div class="footer-menu">
          <ul>
            <h2>Menu</h2>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Contact us</Link></li>
            <li><Link to="#">FAQ</Link></li>
          </ul>
          <div>
            <h2>Social</h2>
            <div class="social-icon">
        <Link to="https://www.facebook.com/belladoreluxury" target='_blank'> <i class="fa-brands fa-facebook"></i></Link>
            <Link to="">
              <i class="fa-brands fa-youtube"></i>
            </Link>
             <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>
              <i class="fa-brands fa-instagram"></i>
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
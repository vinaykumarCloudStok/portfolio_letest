import React, { useState } from 'react'
import '../header/header.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import login from '../../assets/user (1).png'
import cart from '../../assets/shopping-cart (1).png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Header = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
  return (
    <nav class="navbar">
    <div class="navbar-container">
      <div class="logo-img">
       <Link to="/"> <img src={logo} alt=""/></Link>
      </div>
      <div className="menu-icon">
                    <AiOutlineMenu className='icon-color-menu' onClick={() => setToggle(true)} />
                </div>
      <ul className={`nav-links ${toggle ? "active-nav-links" : ""}`}>
      <div className="close-btn">
                        <AiOutlineClose className='icon-color-menu' style={{color:"black"}} onClick={() => setToggle(false)} />
                    </div>
        <li>
          <div class="dropdown">
            <button class="dropbtn">Categories <i class="fa-solid fa-chevron-down"></i></button>
            <div class="dropdown-content">
              <Link to="#">SKIN</Link>
              <Link to="#">MOISTURIZERS</Link>
              <Link to="#">Serums(Face Moisturizer & Cream)</Link>
              <Link to="#">BATH & BODY</Link>
              <Link to="#">BODY CARE</Link>
              <Link to="#">Lotion</Link>
            </div>
          </div>
        </li>
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/shop"> Shop </NavLink></li>
        <li><NavLink to="/about"> About Us </NavLink></li>
        <li><NavLink to="/blog"> Blog </NavLink></li>
        <li><NavLink to="/contact"> Contact </NavLink></li>
        <li>
          <div class="book-now-btn">
            <div class="tooltip" id="search-id">
              <img src={search} alt=""/>
              <span class="tooltiptext">Search</span>
            </div>
            <div class="tooltip">
              <img src={login} alt=""/>
              <span class="tooltiptext">Login</span>
            </div>

            <div class="tooltip" onClick={()=>navigate('/addtoCart')}>
              <img src={cart} alt=""/>
              <span class="tooltiptext">Cart</span>
            </div>
          </div>
        </li>
      </ul>

      <div id="menu-icon" class="fa-solid fa-bars">
      </div>
    </div>
  </nav>
  )
}

export default Header
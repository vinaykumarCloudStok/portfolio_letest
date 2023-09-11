import React, { useState } from 'react'
import '../header/header.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import login from '../../assets/user (1).png'
import cart from '../../assets/shopping-cart (1).png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import '../header/drop.css'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
const Header = (props) => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const [searchOpen,setSearchOpen] = useState(false)
 
    const { addToCart, cartItems } = useContext(ShopContext);
  
    const cartItemCount = cartItems;
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <div className="logo-img">
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
                   <p className='new-menu' to="#">CATEGORIES<i className="fas fa-caret-down"></i></p>
                    <ul className="sub-menu">
                        <li>
                            <Link to="#">SKIN<i className="fas fa-caret-down"></i></Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="#">MOISTURIZERS
                                        <i className="fas fa-caret-down"></i>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/product/listone">Serums</Link>
                                        </li>
                                        <li>
                                            <Link to="/product/listthree">Face Moisturizer & Cream</Link>
                                        </li>
                                       
                                    </ul>
                                </li>
                            </ul>
                        </li>
                   
                        <li>
                          <Link to="#">BATH & BODY
                              <i className="fas fa-caret-down"></i></Link>
                          <ul className="sub-menu">
                          
                              <li>
                                  <Link to="#">BODY CARE
                                      <i className="fas fa-caret-down"></i>
                                  </Link>
                                  <ul className="sub-menu">
                                      <li>
                                          <Link to="/product/listtwo">Lotion</Link>
                                      </li>
                                    
                                  </ul>
                              </li>
                          </ul>
                      </li>
                    </ul>
              
                </li>
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/shop"> Shop </NavLink></li>
        <li><NavLink to="/about"> About Us </NavLink></li>
        <li><NavLink to="/blog"> Blog </NavLink></li>
        <li><NavLink to="/contact"> Contact </NavLink></li>
        <li>
          <div className="book-now-btn">
            <div className="tooltip" id="search-id" onClick={()=>setSearchOpen(!searchOpen)}>
              <img src={search} alt=""/>
              <span className="tooltiptext">Search</span>
            </div>
            <div className="tooltip">
              <img src={login} alt=""/>
              <span className="tooltiptext">Login</span>
            </div>

            <div className="tooltip" onClick={()=>navigate('/addtoCart')} >
              <img src={cart} alt=""/> <p style={{color:"red"}}></p>
              <span className="tooltiptext">Cart</span>
            </div>
          </div>
        </li>
      </ul>
      {
        searchOpen&&(
            <div className="search-btn"></div>
        )
      }


    </div>
  </nav>
  )
}

export default Header
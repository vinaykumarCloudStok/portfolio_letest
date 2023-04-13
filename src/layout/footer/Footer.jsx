import React from 'react'
import { Link } from 'react-router-dom'
import '../footer/footer.css'
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsArrowRightShort} from 'react-icons/bs'
const Footer = () => {
  return (
   <section>
   <div className="footer-content">
    <div className="about-me">
      <h2>About Me</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos inventore 
        itaque quia vel laudantium id corrupti recusandae reiciendis voluptates odit?</p>
        <p className='copy-right'>Copyright 	&copy;2023 All rights reserved | This template is made <br />
          by Vinay </p>
    </div>
    <div className="news-letter">
      <div className="">
      <h2>Newsletter</h2>
      <p>Stay updated with our latest trends</p>
      <div className="input-container">
        <input type="email" name="" id="" /><button className='arrow-btn'><BsArrowRightShort className='icon-3'/></button>
      </div>
      </div>
    </div>
    <div className="social-link">
      <div>
      <h2>Follow Me</h2>
      <p>Let us be social</p>
      <div className="social-media">
      <Link to="https://twitter.com/VinayKu04755744?t=6k8mrlxUGDrdBa7ivH8TBA&s=08" target='_blank' > <BsFacebook className='icon'/> </Link>
      <Link to="https://www.linkedin.com/in/vinay-kumar-4215561a2" target='_blank' > <BsTwitter className='icon'/> </Link>
      <Link  to="https://instagram.com/vinay_cric18?igshid=ZDdkNTZiNTM=" target='_blank'> <BsLinkedin className='icon'/> </Link>
      <Link to="#"> <BsInstagram className='icon'/> </Link>
     </div>
      </div>
    </div>
   </div>
   
   </section>
  )
}

export default Footer
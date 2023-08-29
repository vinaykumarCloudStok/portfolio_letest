import React from 'react'
import Layout from '../../layout/Layout'
import '../../pages/contact/contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
  <Layout>
    <div className="hero-container">
        <h1 className="hero-heading">Contact</h1>
    </div>
  {/* // <!-- blog section  --> */}

  <div className="shop-category-section">
    <section className='section'>
    <div className="contact-container">
      <ul className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li>Contact</li>
      </ul>
      <div className="contact-container-content">
        <div className="contact-left">
          <div className="contact-head">
            <h1>SEND US AN EMAIL</h1>
  
          </div>
          <div className="contact-input-container">
            <div className="contact-input-field">
              <label for="name">Your Name</label> <br/>
              <input type="text" name="" id=""/>
            </div>
            <div className="contact-input-field">
              <label for="name">Your Email</label> <br/>
              <input type="email" name="" id=""/>
            </div>
          </div>
          <div className="contact-input-container">
            <div className="contact-input-field">
              <label for="name">Phone Number</label> <br/>
              <input type="text" name="" id=""/>
            </div>
            <div className="contact-input-field">
              <label for="name">Company</label> <br/>
              <input type="email" name="" id=""/>
            </div>
          </div>
          <div className="contact-input-container">
            <div className="contact-input-field-1">
              <label for="name">Your Message</label> <br/>
              <textarea name="" id="" rows="10"></textarea>
            </div>
          </div>
          <div className="contact-btn-container">
            <button>Ask A Questions</button>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-head-fre">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <div className="border"></div>
          </div>
          <p className="contact-lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id impedit iure nostrum aliquam veniam explicabo.
            Incidunt laborum impedit consequuntur, qui aperiam harum sequi facere quasi corrupti, dolorem error asperiores
            ratione.
          </p>
          <div className="contact-head">
            <h1>CONTACT US</h1>
          </div>
          <div className="contact-address-flex">
            <div className="contact-img-flex">
              <img src="../images/phone.png" alt=""/>
              <div className="">
                <p><span className="contact-bold">Phone : </span>+91 8826303060</p>
                <p><span className="contact-bold"> Email : </span>Hello@belladoreluxury.com </p>
              </div>
            </div>
            <div className="contact-img-flex">
              <img src="../images/message.png" alt=""/>
              <div>
                <p>Support forum</p>
                <p>for over 24h</p>
              </div>
            </div>
          </div>
          <div className="contact-address-flex">
            <div className="contact-img-flex">
              <img src="../images/location.png" alt=""/>
              <div className="">
                <p>
                  Free standard shipping
                </p>
                <p>
                  on all orders.
                </p>
              </div>
            </div>
            <div className="contact-img-flex">
              <img src="../images/location2.png" alt=""/>
              <div className="">
                <p><span style={{fontWeight:"bold"}}>Address : </span> 445,Basement, Sector-23, Gurgaon, Haryana-122017
                </p>
              </div>
            </div>
          </div>
          <div className="contact-footer">
        <p>
          Do you have questions about how we can help your company?
          Send us an email and we’ll get in touch shortly.
        </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>

  </Layout>
  )
}

export default Contact
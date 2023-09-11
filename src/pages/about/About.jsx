import React from 'react'
import Layout from '../../layout/Layout'
import '../about/about.css'
import { Link } from 'react-router-dom'
import aboutPageBg from '../../assets/aboutbg.jpg'
const About = () => {
 
  
  return (
    <Layout>
     <div className="hero-container">
    <h1 className="hero-heading">About Us</h1>
</div>
  <div className="about-main-container ">
    <section className="section">
      <ul className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li>About Us</li>
      </ul>
      <div className="about-page-section">
          <div className="about-page-section-left">
              <img src={aboutPageBg} alt="about"/>
          </div>
          <div className="about-page-section-right">
              <h1>About Us</h1>
              <p>
                  Welcome to Belladore, where we believe every individual deserves to be adored and have their skin taken care of in the most exquisite manner. We aim to provide Link skincare regime that nourishes, hydrates, and helps you embrace your true self.
              </p>
              <p>
                  At Belladore, we celebrate diversity and believe in beauty standards that accept, admire, and adapt to your unique qualities. We understand that no two individuals are the same, so our skincare products are designed to cater to every skin type and tone. We have Link tailored solution for dry, oily, sensitive, or combination skin.
              </p>
              <p>
                  Our commitment to excellence is reflected in the 3A recipe we follow: accept, admire, and adapt. We adore your natural beauty and aim to enhance it rather than conform to conventional ideals. Our products adapt to your needs, addressing specific skin concerns and delivering personalised results because, in the end, we want you to stand out in your own eyes and feel confident and empowered in your skin.
              </p>
              <p>
                  Pamper yourself with the luxurious experience of Belladore skincare. Unveil the radiant glow of your skin and embrace your natural beauty. Let our meticulously crafted products become integral to your self-care routine, helping you achieve the skin you've always dreamed of.
              </p>
          </div>
      </div>
     </section>
   </div>
 
   

    </Layout>
  )
}

export default About
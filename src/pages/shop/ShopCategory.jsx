import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'
import '../shop/shop.css'
import one from '../../assets/1-3-430x430.png'
import two from '../../assets/Aloe-Lavender-Lip-Balm_3-1-430x430.jpg'
const ShopCategory = () => {
  return (
   <Layout>
     <div class="hero-container">
            <h1 class="hero-heading">Shop</h1>
        </div>

     <div class="shop-category-section">
        <section class="section">
            <ul class="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Shop</li>
            </ul>
            <div class="shop-category-container">
                <figure class="snip1571">
                    <img src={one} alt="sample21" />
                    <figcaption>
                      <h3>Skin Care(2)</h3>
                    </figcaption>
                    <Link to="/product"></Link>
                  </figure>
                
                  <figure class="snip1571"><img src={two} alt="sample104" />
                    <figcaption>
                      <h3>Body Lotion(1)</h3>
                    </figcaption>
                    <Link to="/bodyProduct"></Link>
                  </figure>
            </div>
          </section>
     </div>
   </Layout>
  )
}

export default ShopCategory
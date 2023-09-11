import React from 'react'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'

import two from '../../assets/bcb.JPG'
import BodyProductCard from '../../components/BodyProductCard'
import { BodyProductData } from '../../BodyProductData'

const BodyProduct = () => {
    
  return (
   <Layout>
      <div className="hero-container">
            <h1 className="hero-heading">Shop</h1>
        </div>
     <div className="shop-category-section">
        <section className="section">
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li>Products</li>
            </ul>
            <div className="new-wrapper-card">
            {BodyProductData.map((product) => (
          <BodyProductCard data={product} />
        ))}
          </div>
          </section>
     </div>
   </Layout>
  )
}

export default BodyProduct
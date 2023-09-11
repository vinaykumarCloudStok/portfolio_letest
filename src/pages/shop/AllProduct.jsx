import React from 'react'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import one from '../../assets/vcb.JPG'
import two from '../../assets/bcb.JPG'
import three from '../../assets/hyc.JPG'
import { DATA } from '../../data'
import ProductCards from '../../components/ProductsCard'
const AllProduct = () => {
    const navigate = useNavigate()
   
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
            {DATA.map((product) => (
          <ProductCards data={product} />
        ))}
          </div>
          </section>
     </div>
   </Layout>
  )
}

export default AllProduct
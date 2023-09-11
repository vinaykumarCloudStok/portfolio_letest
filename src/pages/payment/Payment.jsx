import React from 'react'
import Layout from '../../layout/Layout'
import '../payment/payment.css'
import { Link } from 'react-router-dom'
const Payment = () => {
  return (
  <Layout>
    <div className="shop-category-section">
    <section className='section'>
    <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li>Payment</li>
            </ul>
      <div className='payment-screen'>Payment</div>
      </section>
    </div>
     
  </Layout>
  )
}

export default Payment
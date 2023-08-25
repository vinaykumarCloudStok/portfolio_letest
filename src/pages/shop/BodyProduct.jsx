import React from 'react'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'

import two from '../../assets/bcb.JPG'

const BodyProduct = () => {
    const navigate = useNavigate()
    const productData = [
        {
            img:two,
            head:"Vanilla body lotion",
            para:"Pour the mixture into a non-stick container and then freeze overnight. Take treating your dog a step",
            price:"Rs. 1099/-",
            route:"/product/listtwo"
        },
    ]
  return (
   <Layout>
      <div class="hero-container">
            <h1 class="hero-heading">Shop</h1>
        </div>
     <div class="shop-category-section">
        <section class="section">
            <ul class="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li>Products</li>
            </ul>
            <div class="product-container">
                {
                 productData.map((el,i)=>(
                    <article class="card">
                    <header class="card__thumb">
                        <Link to={el.route}><img src={el.img} alt="skin"/></Link>
                    </header>
                    <date class="card__date">
                        <span class="card__date__day">29%</span>
                    </date>
                    <div class="card__body">
                      
                        <h2 class="card__title"><Link to={el.route}>{el.head}</Link></h2>
                        <div class="card__subtitle"></div>
                        
                        <p class="card__description">{el.para}</p>
                        <button class="select-btn" onClick={()=>navigate('/addtoCart')}>Cart <i class="fa-solid fa-cart-shopping"></i> </button>
                    </div>
                    <footer class="card__footer">
                        <span class="ion-clock"></span>
                    </footer>
                </article>
                 ))
                }
             
          </div>
          </section>
     </div>
   </Layout>
  )
}

export default BodyProduct
import React from 'react'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import one from '../../assets/vcb.JPG'

const WishList = () => {
    const navigate = useNavigate()
    const productData = [
        {
            img:one,
            head:"Vitamin C serum",
            para:"Pour the mixture into Link non-stick container and then freeze overnight. Take treating your dog Link step",
            price:"Rs. 1199/-",
            route:"/product/listone"
        },
     
      
    ]
  return (
   <Layout>
     <div class="hero-container">
            <h1 class="hero-heading">WishList</h1>
        </div>
     <div class="shop-category-section">
        <section class="section">
            <ul class="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Home</Link></li>
              <li><Link to="/product/listone">Products</Link></li>
              <li>Wishlist</li>
            </ul>
          <div className="wish-heading">
            <h1>Your Product Wishlist</h1>
          </div>
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

export default WishList
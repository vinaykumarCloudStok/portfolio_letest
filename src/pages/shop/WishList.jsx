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
     <div className="hero-container">
            <h1 className="hero-heading">WishList</h1>
        </div>
     <div className="shop-category-section">
        <section className="section">
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Home</Link></li>
              <li><Link to="/product/listone">Products</Link></li>
              <li>Wishlist</li>
            </ul>
          <div className="wish-heading">
            <h1>Your Product Wishlist</h1>
          </div>
            <div className="product-container">
                {
                 productData.map((el,i)=>(
                    <article className="card">
                    <header className="card__thumb">
                        <Link to={el.route}><img src={el.img} alt="skin"/></Link>
                    </header>
                    <date className="card__date">
                        <span className="card__date__day">29%</span>
                    </date>
                    <div className="card__body">
                      
                        <h2 className="card__title"><Link to={el.route}>{el.head}</Link></h2>
                        <div className="card__subtitle"></div>
                        
                        <p className="card__description">{el.para}</p>
                        <button className="select-btn" onClick={()=>navigate('/addtoCart')}>Cart <i className="fa-solid fa-cart-shopping"></i> </button>
                    </div>
                    <footer className="card__footer">
                        <span className="ion-clock"></span>
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
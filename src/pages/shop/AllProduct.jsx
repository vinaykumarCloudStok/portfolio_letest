import React from 'react'
import Layout from '../../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import one from '../../assets/vcb.JPG'
import two from '../../assets/bcb.JPG'
import three from '../../assets/hyc.JPG'
const AllProduct = () => {
    const navigate = useNavigate()
    const productData = [
        {
            img:one,
            head:"Vitamin C serum",
            para:"Vitamin C serums have the potential to improve skin's appearance by preventing wrinkling and reducing the appearance of hyperpigmented areas.",
            price:"Rs. 1199/-",
            route:"/product/listone"
        },
        {
            img:two,
            head:"Vanilla body lotion",
            para:"This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind",
            price:"Rs. 1099/-",
            route:"/product/listtwo"
        },
        {
            img:three,
            head:"Hyaluronic Gel cream",
            para:"A Hydrating hyaluronic gel face cream infuse with watermelon extract help with retaining moisture.its anti- aging properties,leaves the face plumps and radiant for hours.",
            price:"Rs. 999/-",
            route:"/product/listthree"
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

export default AllProduct
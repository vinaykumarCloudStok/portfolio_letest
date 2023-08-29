import React from 'react'
import '../shop/productList.css'
import Layout from '../../layout/Layout'
import twoProduct from '../../assets/bcb.JPG'
import { Link } from 'react-router-dom'
const ProductTwo = () => {
  return (
    <Layout>
    <div class="hero-container">
          <h1 class="hero-heading">Shop</h1>
      </div>
    <div className="shop-category-section">
      <section className='section'>
      <ul class="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/bodyProduct">Products</Link></li>
          <li>Vanilla & Cinnamon  body lotion</li>
      </ul>
      <div class="product-list-container">
            <div class="product-list-left">
                <div class="product-slider-container">
                    <div class="product-list-slider-img">
                        <img src={twoProduct} alt=""/>
                    </div>
                    <div class="product-list-slider-img">
                    <img src={twoProduct} alt=""/>
                    </div>
                    <div class="product-list-slider-img">
                    <img src={twoProduct} alt=""/>
                    </div>
                </div>
                <div class="product-list-img">

                <img src={twoProduct} alt=""/>
                </div>
            </div>
            <div class="product-list-right">
                <h1>Vanilla & Cinnamon  body lotion(100ml)</h1>
                {/* <div class="rate-container">
                    <div class="rate">

                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>
                    <p>(1 Customer Review)</p>
                </div> */}
                <div class="price-content">
                    <p>Rs.1500.00/-</p> <span>Rs.1199.00/-</span>
                </div>
                <p>
                This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind                                                                                                                                
                        </p>
                <div class="product-cart">
                    <div class="product-cart-btn">
                        <button class="less-cart">-</button>
                        <input type="text" name="" id="" value="1"/>
                        <button class="less-cart">+</button>
                    </div>
                    <div class="add-cart-btn">
                        <button>Add To Cart</button>
                        <button class="buy">Buy Now</button>
                    </div>
                </div>
                <div class="wishlist-btn">
                    <Link to="wishlist.html">
                        <p><i class="fa-solid fa-heart"></i> Add to Wishlist</p>
                    </Link>
                </div>
                <div class="sku">
                    <p>SKU: <span>MNK-012</span> </p>
                    <p>Category: <span>Vanilla & Cinnamon  body lotion</span> </p>
                    <div class="share-icon">
                        <p>Share: </p>
                        <div class="social-icon-1">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-description">
              <div class="accordion">
                <hr/>
                <div class="container-1">
                  <div class="label">Description</div>
                  <div class="content">
                      This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind                                                                                                                                
                  </div>
                </div>
                <hr/>
                <div class="container-1">
                  <div class="label">How To Use</div>
                  <div class="content">
                  Take generous quantity and 
apply all over body. 
Massage gently in circular 
motion until absorbed
            </div>
                </div>
                <hr/>
                <div class="container-1">
                  <div class="label">Ingredients</div>
                  <div class="content">
                  Glycerol/Dlycerin, Aloe barbadensis,Olea europaea, Theobroma, Cetearyl alcohol, Stearic acid, Glyceryl mono stearate, Perfum, Tocopheryl acetate, Potassium Sorbate, Propylen Glycol, Vanilla Planifolia, perfume
                    </div>
                </div>
                <hr/>
               
              
              </div>
      </div>
      </section>
    </div>
        
 </Layout>
  )
}

export default ProductTwo
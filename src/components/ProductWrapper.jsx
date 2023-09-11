import React from 'react'
import Layout from '../layout/Layout'
import '../components/productWrapper.css'
const ProductWrapper = () => {
  return (
   <Layout>
      <div className="hero-container">
            <h1 className="hero-heading">Shop</h1>
        </div>
      <div className="shop-category-section">
        <section className='section'>
        <ul className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="product.html">Products</a></li>
            <li>Vitamin C Serum</li>
        </ul>
        <div className="product-list-container">
              <div className="product-list-left">
                  <div className="product-slider-container">
                      <div className="product-list-slider-img">
                          <img src="./images/vc.JPG" alt=""/>
                      </div>
                      <div className="product-list-slider-img">
                          <img src="./images/vc.JPG" alt=""/>
                      </div>
                      <div className="product-list-slider-img">
                          <img src="./images/vc.JPG" alt=""/>
                      </div>
                  </div>
                  <div className="product-list-img">

                      <img src="./images/vc.JPG" alt=""/>
                  </div>
              </div>
              <div className="product-list-right">
                  <h1>Vitamin C Serum(100ml)</h1>
                  <div className="rate-container">
                      <div className="rate">

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
                  </div>
                  <div className="price-content">
                      <p>Rs.1500.00/-</p> <span>Rs.1199.00/-</span>
                  </div>
                  <p>This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind</p>
                  <div className="product-cart">
                      <div className="product-cart-btn">
                          <button className="less-cart">-</button>
                          <input type="text" name="" id="" value="1"/>
                          <button className="less-cart">+</button>
                      </div>
                      <div className="add-cart-btn">
                          <button>Add To Cart</button>
                          <button className="buy">Buy Now</button>
                      </div>
                  </div>
                  <div className="wishlist-btn">
                      <a href="wishlist.html">
                          <p><i className="fa-solid fa-heart"></i> Add to Wishlist</p>
                      </a>
                  </div>
                  <div className="sku">
                      <p>SKU: <span>MNK-012</span> </p>
                      <p>Category: <span>Vanilla & Cinnamon  body lotion</span> </p>
                      <div className="share-icon">
                          <p>Share: </p>
                          <div className="social-icon-1">
                              <i className="fa-brands fa-facebook"></i>
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-instagram"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="product-description">
                  <div className="accordion">
                    <hr/>
                    <div className="container">
                      <div className="label">Description</div>
                      <div className="content">
                          This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind  
                      </div>
                    </div>
                    <hr/>
                    <div className="container">
                      <div className="label">How To Use</div>
                      <div className="content">
                          Take generous quantity and 
apply all over body. 
Massage gently in circular 
motion until absorbed
                </div>
                    </div>
                    <hr/>
                    <div className="container">
                      <div className="label">Ingredients</div>
                      <div className="content"> Glycerol/Dlycerin, Aloe barbadensis,Olea europaea, Theobroma, Cetearyl alcohol, Stearic acid, Glyceryl mono stearate, Perfum, Tocopheryl acetate, Potassium Sorbate, Propylen Glycol, Vanilla Planifolia, perfume</div>
                    </div>
                    <hr/>
                   
                  
                  </div>
          </div>
        </section>
      </div>
          
   </Layout>
  )
}

export default ProductWrapper
import React from 'react'
import '../shop/productList.css'
import Layout from '../../layout/Layout'
import hyc from '../../assets/hyc.JPG'
import { Link } from 'react-router-dom'
const ProductThree = () => {
  return (
    <Layout>
    <div className="hero-container">
          <h1 className="hero-heading">Shop</h1>
      </div>
    <div className="shop-category-section">
      <section className='section'>
      <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li>Hyaluronic Gel cream</li>
      </ul>
      <div className="product-list-container">
          <div className="product-list-left">
              <div className="product-slider-container">
                  <div className="product-list-slider-img">
                      <img src={hyc} alt=""/>
                  </div>
                  <div className="product-list-slider-img">
                  <img src={hyc} alt=""/>
                  </div>
                  <div className="product-list-slider-img">
                  <img src={hyc} alt=""/>
                  </div>
              </div>
              <div className="product-list-img">
              <img src={hyc} alt=""/>
              </div>
          </div>
          <div className="product-list-right">
              <h1>Hyaluronic Gel cream(50g)</h1>
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
                  <p>Rs.1500.00/-</p> <span>Rs.999.00/-</span>
              </div>
              <p>A Hydrating hyaluronic gel face cream infuse with watermelon extract help with retaining moisture.its anti- aging properties,leaves the face plumps and radiant for hours.</p>
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
                  <Link to="../pages/whishlist.html">
                      <p><i className="fa-solid fa-heart"></i> Add to Wishlist</p>
                  </Link>
              </div>
              <div className="sku">
                  <p>SKU: <span>MNK-012</span> </p>
                  <p>Category: <span>Hyaluronic Gel cream</span> </p>
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
                <div className="container-1">
                  <div className="label">Description</div>
                  <div className="content">
                      After washing your face, use Link small quantity and massage evenly on your face and neck
                  </div>
                </div>
                <hr/>
                <div className="container-1">
                  <div className="label">How To Use</div>
                  <div className="content">
                      Take generous quantity and 
apply all over body. 
Massage gently in circular 
motion until absorbed
            </div>
                </div>
                <hr/>
                <div className="container-1">
                  <div className="label">Ingredients</div>
                  <div className="content"> Aloe Barbadensis Leaf Extract ,Helianthus Annuus (Sunflower) Seed Oil,Propylene Glycol Dicaprate,Dimethicone,Glycerin,Prunus Amygdalus Dulcis (Sweet Almond) Oil,Sodium Benzoate,ALLANTOIN,Tocopheryl Acetate.Morus Alba Root,Citrullus Lanatus,Prunus Armeniaca (Apricot) Kernel Oil ,Disodium EDTA
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

export default ProductThree
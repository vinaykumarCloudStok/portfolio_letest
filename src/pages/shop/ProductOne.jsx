import React, { useContext, useState } from 'react'

import Layout from '../../layout/Layout'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {BsChevronDown} from 'react-icons/bs'
import oneproduct from '../../assets/vcb.JPG'
import { ShopContext } from '../../context/shop-context'
const ProductOne = (props) => {
  const navigate = useNavigate()
  const {state} = useLocation()
    const [oneAcc,setOneAcc] = useState(false)
    const [oneAcc1,setOneAcc1] = useState(false)
    const [oneAcc2,setOneAcc2] = useState(false)
    const routeData = state?.newData
    console.log(routeData)
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[routeData.id];
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
            <li>Vitamin C Serum</li>
        </ul>
        <div className="product-list-container">
              <div className="product-list-left">
                  <div className="product-slider-container">
                      <div className="product-list-slider-img">
                      <img src={routeData.productImage} alt=""/>
                      </div>
                      <div className="product-list-slider-img">
                      <img src={routeData.productImage} alt=""/>
                      </div>
                      <div className="product-list-slider-img">
                      <img src={routeData.productImage} alt=""/>
                      </div>
                  </div>
                  <div className="product-list-img">
                  <img src={routeData.productImage} alt=""/>
                  </div>
              </div>
              <div className="product-list-right">
                  <h1>{routeData.productName}(100ml)</h1>
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
                  <p>Rs.1500.00/-</p> <span>Rs.{routeData.price}/-</span>
                  </div>
                  <p>
                  Vitamin C serums have the potential to improve skin's appearance by preventing wrinkling and reducing the appearance of hyperpigmented areas.
                  </p>
                  <div className="product-cart">
                      {/* <div className="product-cart-btn">
                          <button className="less-cart">-</button>
                          <input type="text" name="" id="" value="1"/>
                          <button className="less-cart">+</button>
                      </div> */}
                      <div className="add-cart-btn">
                      <button type='button' onClick={() => addToCart(routeData.id)}>Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
                          <button type='button' onClick={()=>navigate("/addtoCart")} className="buy">Buy Now</button>
                      </div>
                  </div>
                  <div className="wishlist-btn">
                      <Link to="/wishlist">
                          <p><i className="fa-solid fa-heart"></i> Add to Wishlist</p>
                      </Link>
                  </div>
                  <div className="sku">
                      <p>SKU: <span>MNK-012</span> </p>
                      <p>Category: <span>Body Care</span> </p>
                      <div className="share-icon">
                          <p>Share: </p>
                          <div className="social-icon-1">
                          <Link to="https://www.facebook.com/belladoreluxury" target='_blank'>     <i className="fa-brands fa-facebook"></i></Link>
                          <Link to="">
              <i className="fa-brands fa-youtube"></i>
            </Link>
                         <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>  <i className="fa-brands fa-instagram"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="product-description">
                  <div className="accordion">
                    <hr/>
                    <div className="container-1">
                      <div className="label" onClick={()=>setOneAcc(!oneAcc)}>Description <BsChevronDown className='icon-down' style={{fontSize:"1.5rem"}}/></div>
                      {
                        oneAcc &&(
                            <div className="content">
                      Vitamin C serums have the potential to improve skin's appearance by preventing wrinkling and reducing the appearance of hyperpigmented areas.
                      </div>
                        )
                      }
                    </div>
                    <hr/>
                    <div className="container-1">
                      <div className="label" onClick={()=>setOneAcc1(!oneAcc1)}>How To Use <BsChevronDown style={{fontSize:"1.5rem"}}/></div>
                      {
                        oneAcc1 &&(
                            <div className="content">
                        
Tap your skin gently for 30-60 seconds until the serum is absorbed. After you’ve rubbed the serum onto your skin, place your fingers on your cheek and press your skin in small, circular motions
                </div>
                        )
                      }
                      
                    </div>
                    <hr/>
                    <div className="container-1">
                      <div className="label" onClick={()=>setOneAcc2(!oneAcc2)}>Ingredients <BsChevronDown style={{fontSize:"1.5rem"}}/></div>
                      {
                        oneAcc2 && (
                            <div className="content">
                            Aqua,2-Bromo-2-Nitropropane-1 ( bronopol),ALLANTOIN,Disodium EDTA,Sodium Benzoate,Sodium Ascorbyl Phosphate,Curcuma Longa Root Extract,Morus Alba Root,Aloe Barbadensis Leaf Extract,Glycerol/Dlycerin,Kojic Acid,Hydroxyethyl Cellulose,Citric acid,Perfume
                            </div>
                        )
                      }
                    
                    </div>
                    <hr/>
                   
                  
                  </div>
          </div>
        </section>
      </div>
          
   </Layout>
  )
}

export default ProductOne
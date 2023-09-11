import React from 'react'
import '../shop/productList.css'
import Layout from '../../layout/Layout'
import twoProduct from '../../assets/bcb.JPG'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {BsChevronDown} from 'react-icons/bs'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
const ProductTwo = () => {
  const navigate = useNavigate()
    const [twoAcc,setTwoAcc] = useState(false)
    const [twoAcc1,setTwoAcc1] = useState(false)
    const [twoAcc2,setTwoAcc2] = useState(false)
    const {state} = useLocation()
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
          <li><Link to="/bodyProduct">Products</Link></li>
          <li>Vanilla & Cinnamon  body lotion</li>
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
                {routeData.para}                                                                                                                            
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
                    <p>Category: <span>Vanilla & Cinnamon  body lotion</span> </p>
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
                <div className="label" onClick={()=>setTwoAcc(!twoAcc)}>Description <BsChevronDown style={{fontSize:"1.5rem"}}/></div>
                {
                    twoAcc&&(
                        <div className="content">
                        This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind                                                                                                                                
                    </div>
                    )
                }
                 
                </div>
                <hr/>
                <div className="container-1">
                  <div className="label" onClick={()=>setTwoAcc1(!twoAcc1)}>How To Use <BsChevronDown style={{fontSize:"1.5rem"}}/></div>
                  {
                    twoAcc1&&(
                        <div className="content">
                        Take generous quantity and 
      apply all over body. 
      Massage gently in circular 
      motion until absorbed
                  </div>
                    )
                  }
                 
                </div>
                <hr/>
                <div className="container-1">
                  <div className="label" onClick={()=>setTwoAcc2(!twoAcc2)}>Ingredients <BsChevronDown style={{fontSize:"1.5rem"}}/></div>
                  {
                    twoAcc2&&(
                        <div className="content">
                        Glycerol/Dlycerin, Aloe barbadensis,Olea europaea, Theobroma, Cetearyl alcohol, Stearic acid, Glyceryl mono stearate, Perfum, Tocopheryl acetate, Potassium Sorbate, Propylen Glycol, Vanilla Planifolia, perfume
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

export default ProductTwo
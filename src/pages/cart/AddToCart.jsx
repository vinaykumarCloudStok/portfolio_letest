import React from 'react'
import Layout from '../../layout/Layout'
import './addtocart.css'
import { AiOutlineClose } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom'
import img1 from '../../assets/vcb.JPG'
import img2 from '../../assets/hyc.JPG'
import img3 from '../../assets/bcb.JPG'
const AddToCart = () => {
    const navigate = useNavigate()
    const cartData = [
        {
            head:"Vitamin C Serum",
            img:img1,
            price:"1199/"
        },
        {
            head:"Hyaluronic Gel cream",
            img:img2,
            price:"1099/"
        },
        {
            head:"Vanilla body lotion",
            img:img3,
            price:"999/"
        }
    ]
   
  return (
    <Layout>
         <div class="hero-container">
            <h1 class="hero-heading">Cart</h1>
        </div>
    <div className="shop-category-section">
        <div className="section">
        <ul class="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Cart</li>
            </ul>
            <div className="cart-body">
            <div className="cart-left">
                <div className="cart-left-head">
                 <h1>Shopping Cart</h1>
                 <p>3 items</p>
                </div>
               {
                cartData.map((el,i)=>(
                    <div className="cart-left-content">
                    <img src={el.img} alt="product" />
                    <div className="">
                    <p>{el.head}</p>
                    {/* <span>Serum</span> */}
                    </div>
                    <div className="product-cart">
                      <div className="product-cart-btn">
                          <button className="less-cart">-</button>
                          <input type="text" name="" id="" value="1"/>
                          <button className="less-cart">+</button>
                      </div>
                  </div>
                  <div className="">
                    <p>Rs.{el.price}</p>
                  </div>
                  <div className="">
                  <AiOutlineClose className='icon-color-menu' />
                  </div>
                </div>
                ))
               }
               <div className="backshop">
                <button onClick={()=>navigate('/product')}> Back To Shop</button>
               </div>
            </div>
            <div className="cart-right">
            <div className="summary">
                <h1>Summary</h1>
            </div>
            <div className="item-1">
                <p>Items3</p>
                <p>1199/-</p>
            </div>
            <div className="shipping-container">
                <label htmlFor="">Shipping</label> <br />
                <input type="text" name="" id="" />
            </div>
            <div className="shipping-container">
                <label htmlFor="">Give Code</label>
                <input type="text" name="" id="" placeholder='Enter Your Code' />
            </div>
            <div className="total-price">
                <h1>Total Price</h1>
                <p>1199-/</p>
            </div>
            <div className="checkout">
                <button>Chekout</button>
            </div>
            </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default AddToCart
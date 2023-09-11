import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

import { Link, useNavigate } from "react-router-dom";
import { DATA } from "../../data";
import CartItem from "./CartItem";
import '../cart/addtocart.css'
import Layout from "../../layout/Layout";
const AddToCart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="hero-container">
        <h1 className="hero-heading">Cart</h1>
      </div>
      <div className="shop-category-section">
        <div className="section">
          <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li>Cart</li>
          </ul>
          {totalAmount > 0 ? (
            <div className="cart-body">
              <div className="cart-left">
                <div className="cart-left-head">
                  {/* <p>Cart Items</p> */}
                </div>
                <div className="cart">
                  {DATA.map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <CartItem data={product} />;
                    }
                  })}
                </div>

                <div className="shopping-new-btn">
                  <div className="">
                    <button type="button" onClick={() => navigate("/allProduct")}> Continue Shopping </button>
                  </div>
                  <div className="shopping-new">
                    <p> Subtotal: Rs.{totalAmount} </p>
                  </div>

                </div>

              </div>

              <div className="cart-right">
                <div className="row">
                  <div className="col-75">
                    <div className="container-check">
                      <form>
                        <div className="row">
                          <div className="col-50">
                            {/* <h3>Billing Address</h3> */}
                            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                            <label for="email"><i className="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="john@example.com" />
                            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                            <label for="city"><i className="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="New York" />

                            <div className="row">
                              <div className="col-50">
                                <label for="state">State</label>
                                <input type="text" id="state" name="state" placeholder="NY" />
                              </div>
                              <div className="col-50">
                                <label for="zip">Zip</label>
                                <input type="text" id="zip" name="zip" placeholder="10001" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <label>
                          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                        </label>
                        <button type="button" className="btn" onClick={()=>navigate('/payment')}>Continue to checkout </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>) : (
            <div className="empty-cart">
              <div className="">
                <h1 className=""> Your Shopping Cart is Empty</h1>
                <button className="backshop" onClick={() => navigate("/allProduct")}>Back To Shop</button>
              </div>
            </div>
          )}
        </div>
      </div>

    </Layout>
  );
};
export default AddToCart


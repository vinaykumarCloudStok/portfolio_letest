import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link, useNavigate } from "react-router-dom";

import '../pages/shop/shop.css'
import '../pages/shop/productList.css'
const BodyProductCard = (props) => {
    const navigate = useNavigate()
  const { id, productName, price, productImage ,para,route} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="wrapper-card" >
    <div className="img-box" onClick={()=>navigate(route,{
           state:{
               newData:props.data
           }
       })}>
        <img src={productImage} alt="skin" />
    </div>
    <div className="wrapper-card-content">
       <div className="wrapper-price">
       <h2>{productName}</h2> <h4>Rs.{price}</h4>
       </div>
       <button className="select-btn" onClick={() => addToCart(id)}>Add Cart <i className="fa-solid fa-cart-shopping"></i> {cartItemCount > 0 && <> ({cartItemCount})</>} </button>
        <p>{para}</p>
    </div>
  </div>
 
  );
};
export default BodyProductCard
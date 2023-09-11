import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Link, useNavigate } from "react-router-dom";
import '../components/productCard.css'
import '../pages/shop/shop.css'
import '../pages/shop/productList.css'
const ProductCards = (props) => {
  const { id, productName, price, productImage ,para,route} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
const navigate = useNavigate()
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

//     <article className="card" onClick={()=>navigate(route,{
//         state:{
//             newData:props.data
//         }
//     })}>
//     <header className="card__thumb" >
//         <img src={productImage} alt="skin"/>
//     </header>
//     <date className="card__date">
//         <span className="card__date__day">29%</span>
//     </date>
//     <div className="card__body">
//         <h2 className="card__title">{productName}</h2> 
//         <div className="card__subtitle"></div>
        
//         <p className="card__description">{para}</p>
//         <div className="all-p-btn">
//         <button className="select-btn" onClick={() => addToCart(id)}>Add Cart <i className="fa-solid fa-cart-shopping"></i> {cartItemCount > 0 && <> ({cartItemCount})</>} </button> <p className="price">Rs.{price}</p>
//         </div>
//     </div>
//     <footer className="card__footer">
//         <span className="ion-clock"></span>
//     </footer>
// </article>
 
  );
};
export default ProductCards
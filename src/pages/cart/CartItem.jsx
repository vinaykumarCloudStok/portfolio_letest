import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import '../cart/addtocart.css'
import { AiOutlineClose } from "react-icons/ai";
 const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
   
     <div className="cart-left-content">
                     <div className="img-cart">
                     <img src={productImage} alt="product" />
                      <div className="">
                      <p>{productName}</p>
                      </div>
                     </div>
                      <div className="product-cart">
                        <div className="product-cart-btn">
                            <button type="button" className="less-cart" onClick={() => removeFromCart(id)}>-</button>
                            <input type="text" name="" id=""  value={cartItems[id]}
           onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                            <button type="button" className="less-cart" onClick={() => addToCart(id)}>+</button>
                        </div>
                    </div>
                   <div className="cart-new-remove">
                   <div className="">
                      <p>Rs.{price}</p>
                    </div>
                    <div className="">
                    <AiOutlineClose className='icon-color-menu' />
                    </div>
                   </div>
                  </div>
  );
};
export default CartItem

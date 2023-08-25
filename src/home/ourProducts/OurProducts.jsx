import React from 'react'
import '../ourProducts/ourproducts.css'
import productImg from '../../assets/vcb.JPG'
import productImg1 from '../../assets/hyc.JPG'
import productImg2 from '../../assets/bcb.JPG'
import { Link, useNavigate } from 'react-router-dom'
const OurProducts = () => {
  const navigate = useNavigate()
  const productData = [
    {
      pname: "Vitamin C serum",
      ppara: "Vitamin C is a powerful antioxidant that works to stimulate collagen production in the skin. It also fights fine lines, brightens complexion, and helps to reduce hyper pigmentation.",
      price: "Starting at 1199 Rs.",
      imgP: productImg,
      route: "/product/listone"
    },
    {
      pname: "Hyaluronic Gel cream",
      ppara: "Hydrating hyaluronic gel face cream infused with watermelon extract helps with retaining moisture and protecting skin barrier. Its anti- ageing properties leaves the face plump and radiant for hours.",
      price: "Starting at 999 Rs.",
      imgP: productImg1,
      route: "/product/listthree"
    },
    {
      pname: "Vanilla body lotion",
      ppara: "This creamy indulgent body lotion nourishes and moisturizes your skin to make it soft and smooth. The vanilla and cinnamon instantly refresh your body and your mind",
      price: "Starting at 1099 Rs.",
      imgP: productImg2,
      route: "/product/listtwo"
    }
  ]
  return (
    <div className="">
      <div className="section-3">
        <div className="section">
          <div className="service-container">
            <h1>Our Products</h1>
            <div className="service-card">
              {
                productData.map((el, i) => (
                  <div className="service-card-content">
                    <img src={el.imgP} alt="" />
                    <div className="service-body-content">
                      <div className="service-body">
                        <h2>{el.pname}</h2>
                        <p>
                          {el.ppara}
                        </p>
                      </div>
                      <div className="service-footer">
                        <p>
                          {el.price}
                        </p>
                        <button type='button' onClick={() => navigate(el.route)}>Shop Now</button>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className="service-btn-container">

              <button onClick={() => navigate('/product')} className="service-btn">All Products <i className="fa-solid fa-arrow-right"></i></button>

            </div>

          </div>
        </div>
      </div>
      <section className="new-banner-section">
        <h1>Following 3A Recipe</h1>
        <div className="new-banner">
          <div className="">
            <p>1. Accept</p>
          </div>
          <div className="">
            <p>2. Admire</p>
          </div>
          <div className="">
            <p>3. Adapt</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurProducts
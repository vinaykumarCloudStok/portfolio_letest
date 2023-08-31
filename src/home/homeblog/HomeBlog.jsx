import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../homeblog/homeblog.css'
import Slider from "react-slick";
import blog1 from '../../assets/vcb.JPG'
const HomeBlog = () => {
  const navigate = useNavigate()
  const blogData = [
    {
      img: blog1,
      para: "Understanding Face Serums: What They Are and How to Use Them for Optimal Skin Care",
      routeBlog:"/blogOne",
    },
    {
      img: blog1,
      para:"Winter Sun Protection: Choosing the Right Sunscreen for Cold Weather",
      routeBlog:"/blogTwo",
    },
    {
      img: blog1,
      para: "Elevating Your Grooming Game: Tips and Tricks for Men's Skincare and Grooming",
      routeBlog:"/blogThree",
    },
    {
      img: blog1,
      para: "The Daily Dose: Understanding the Benefits and Risks of Using Face Serum Every Day",
      routeBlog:"/blogFour",
    },
    {
      img: blog1,
      para: "The Moisturizer Maze: A Guide to Choosing the Right Moisturizer for Your Skin Type",
      routeBlog:"/blogFive",
    },
    {
      img: blog1,
      para: "Face Wash 101: A Guide to Choosing the Right Cleanser for Your Skin Type",
      routeBlog:"/blogSix",
    },
    {
      img: blog1,
      para: "Achieving Radiant Skin: Tips for a Hyper Glowy Complexion this Winter",
      routeBlog:"/blogSeven",
    },
    {
      img: blog1,
      para: "The Essential Five: A Guide to Basic Skincare",
      routeBlog:"/blog8",
    },
    {
      img: blog1,
      para: "The Skin-Boosting Benefits of Vitamin C: Why it's a Must-Have in Your Skincare Routine",
      routeBlog:"/blog9",
    },
    {
      img: blog1,
      para: "Creating the Perfect Skincare Routine: A Guide to Achieving Glowing, Healthy Skin",
      routeBlog:"/blog10",
    },
    {
      img: blog1,
      para: "Proper Application: A Guide to Using Face Serum for Optimal Results",
      routeBlog:"/blog11",
    },
    {
      img: blog1,
      para: "Determining Your Skin Type: A Guide to Understanding Your Complexion Needs",
      routeBlog:"/blog12",
    },
  ]
  const settings = {
    // centerMode: true,
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    // rtl: true,
    autoplay: true,
      speed: 2000,
      cssEase: "linear",
      autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
<div className="blog-main-container">
  
<section className='section'>
      <h1 className='blog-heading'>Blogs</h1>
      <div className="blog-card-container">
        <Slider {...settings}>
          {
            blogData.map((el, i) => (
              <div className="blog-card" key={i} onClick={()=>navigate(el.routeBlog)}>
                <div className="blog-card-header">
                  <img src={el.img} alt="rover" />
                </div>
                <div className="blog-card-body">
                  {/* <span className="tag tag-teal">{el.heade}</span> */}
                  <p>
                    {el.para}
                  </p>
                 
                  <div className="user">
                   <Link to="/blogDescription">Continue Reading...</Link>
                   
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>


      </div>
    </section>
</div>

  )
}

export default HomeBlog
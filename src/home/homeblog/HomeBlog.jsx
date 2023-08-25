import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../homeblog/homeblog.css'
import Slider from "react-slick";
import blog1 from '../../assets/vcb.JPG'
const HomeBlog = () => {
  const navigate = useNavigate()
  const blogData = [
    {
      img: blog1,
      heade: "Vitamin C Serum",
      para: "lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKLJ"
    },
    {
      img: blog1,
      heade: "Vitamin C Serum",
      para: "lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKLJ"
    },
    {
      img: blog1,
      heade: "Vitamin C Serum",
      para: "lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKLJ"
    },
    {
      img: blog1,
      heade: "Vitamin C Serum",
      para: "lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKLJ lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKL"
    },
    {
      img: blog1,
      heade: "Vitamin C Serum",
      para: "lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKLJ"
    },
    {
      img: blog1,
      heade: "Vitamin C Serum",
      para: "lorempoewrihusbgkflmadjiohfbjnkdfdksm dklnfdkdfsldsnflBJKFSNKLJ"
    },
  ]
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
              <div className="blog-card" key={i} onClick={()=>navigate('/blogDescription')}>
                <div className="blog-card-header">
                  <img src={el.img} alt="rover" />
                </div>
                <div className="blog-card-body">
                  <span className="tag tag-teal">{el.heade}</span>
                  <p>
                    {el.para}
                  </p>
                 
                  <div className="user">
                    <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                    <div className="user-info">
                      <h5>July Dec</h5>
                      <small>2h ago</small>
                    </div>
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
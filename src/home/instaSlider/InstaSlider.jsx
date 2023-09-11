import React from 'react'
import '../instaSlider/instaSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
// import required modules
import {EffectCoverflow,Navigation, Pagination,Autoplay} from 'swiper/modules';
import slide_image_1 from '../../assets/vcb.JPG';
import slide_image_2 from '../../assets/bcb.JPG';
import slide_image_3 from '../../assets/hyc.JPG';
import slide_image_4 from '../../assets/slide1.png';
import slide_image_5 from '../../assets/slide2.png';
import slide_image_6 from '../../assets/vcb.JPG';
import slide_image_7 from '../../assets/hyc.JPG';
import { Link } from 'react-router-dom';
const InstaSlider = () => {
  return (
    <div className="container">
  <h1 className="heading">Follow us on Instagram</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
     <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_1} alt="slide_image" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_2} alt="slide_image" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_3} alt="slide_image" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_4} alt="slide_image" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_5} alt="slide_image" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_6} alt="slide_image" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_7} alt="slide_image" /></Link>
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
    // <div className="container">
    // <h1 className="heading">Follow us on Instagram</h1>
    // <Swiper
    //   effect={'coverflow'}
    //   grabCursor={true}
    //   centeredSlides={true}
    //   loop={true}
    //   autoplay={{
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   }}
    //   slidesPerView={3}
    //   coverflowEffect={{
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 2.5,
    //   }}
      
    //   pagination={{ el: '.swiper-pagination', clickable: true }}
    //   navigation={{
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //     clickable: true,
    //   }}
    //   modules={[EffectCoverflow,Autoplay, Pagination, Navigation]}
    //   className="swiper_container"
    // >
     
    //   <SwiperSlide>
    //  <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_1} alt="slide_image" /></Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_2} alt="slide_image" /></Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_3} alt="slide_image" /></Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_4} alt="slide_image" /></Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_5} alt="slide_image" /></Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_6} alt="slide_image" /></Link>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <Link to="https://www.instagram.com/belladoreluxury/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank'>   <img src={slide_image_7} alt="slide_image" /></Link>
    //   </SwiperSlide>

    // </Swiper>
    // </div>
  )
}

export default InstaSlider
import React from 'react'
import Layout from '../layout/Layout'
import BannerScreen from './Banner/BannerScreen'
import HomeAbout from './homeAbout/HomeAbout'
import OurProducts from './ourProducts/OurProducts'
import InstaSlider from './instaSlider/InstaSlider'
import HomeBlog from './homeblog/HomeBlog'


const Home = () => {
  return (
    <>
<Layout >
<BannerScreen/>
<HomeAbout/>
<OurProducts/>
<InstaSlider/>
<HomeBlog/>
</Layout>
   
   
    </>
  )
}

export default Home
import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'
import blogimg from '../../assets/vcb.JPG'
const Blog8 = () => {
  const blogdescData = ['1', '2', '3', '4', '5']
  const imgData = ['1', '2', '3', '4', '5', '6']
  return (
    <Layout>
      <div class="hero-container">
        <h1 class="hero-heading">Blog</h1>
      </div>
      <div className="shop-category-section">
        <section className='section'>
          <ul class="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>BlogDescription</li>
          </ul>
          <div className="blog-desc">
            <div className="blog-desc-container">
              <div className="blog-desc-left">
               
{/* *********************** */}
<div className="">
                  <p className='head-blog'>The Essential Five: A Guide to Basic Skincare</p>
                  <p className='span-para'>The five basic steps of a skin care routine are:</p>
                  <ol>
                    <li>
                    Cleansing: The first step in any skincare routine is cleansing the skin. This involves using a gentle cleanser to remove dirt, oil, and makeup from the skin. It's important to choose a cleanser that is formulated for your skin type and that is gentle enough to use on a daily basis.
                    </li>
                    <li>
                    Toning: The second step in a skincare routine is toning. This step helps to restore the skin's natural pH balance and remove any remaining impurities. Toners are usually applied with a cotton pad and can also provide hydration and nourishment to the skin.
                    </li>
                    <li>
                    Exfoliating: The third step in a skincare routine is exfoliating. This step helps to remove dead skin cells and unclog pores, revealing brighter, smoother skin. There are two types of exfoliation: physical exfoliation and chemical exfoliation.
                    </li>
                    <li>
                    Moisturizing: The fourth step in a skincare routine is moisturizing. This step helps to keep the skin hydrated, plump and prevent it from drying out. Moisturizers come in various forms such as creams, lotions, and oils, and can be tailored to your specific skin type.
                    </li>

                    <li>
                    Sun protection: The fifth and final step in a skincare routine is sun protection. This step is crucial for protecting the skin from the sun's harmful UV rays, which can cause damage to the skin and lead to premature aging. Sunscreen should be applied daily, and it's important to choose a sunscreen that is formulated for your skin type and has an SPF of at least 30.
                    </li>
                    
                  </ol>
                  <p className='new-b-para'>
                  It's important to note that these are general guidelines and some steps may be tailored depending on your skin type, concerns and lifestyle. And also, a well-rounded skincare routine should also include regular exfoliation, moisturizing, and protecting your skin from the sun.              
                      </p>
                </div>

{/* ******************** */}


              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Blog8
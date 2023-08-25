import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'
import blogimg from '../../assets/vcb.JPG'
const BlogPage = () => {
    const blogdescData = ['1','2','3','4','5']
    const imgData = ['1','2','3','4','5','6']
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
           <h1>Vitamin C Serum Blog</h1>
          <p className='bg-para'>January 3, 2022 Posted by  S. Rogers</p>
           <img src={blogimg} alt="" />
           <p>A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet pretium. Et iaculis mi velit tincidunt vestibulum a duis tempor non magna ultrices porta malesuada ullamcorper scelerisque parturient himenaeos iaculis sit. Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos.

Ac ullamcorper a ultrices a a urna ac commodo nam condimentum parturient. Libero suspendisse facilisis parturient elementum curabitur. Erat a per dis aliquet ultricies curabitur nostra suspendisse nec adipiscing donec vestibulum a parturient a ac ut non adipiscing penatibus nec erat. A at nec rutrum nam molestie suspendisse scelerisque platea a ut commodo volutpat ullamcorper.</p>
           </div>
            <div className="blog-desc-right">
                <h2>Recent Post</h2>
                {
                    blogdescData.map((el,i)=>(
                        <div className="blog-desc-right-content">
                        <img src={blogimg} alt="" />
                        <div className="blog-right-footer">
                        <h4>A Compain for Extra Solution</h4>
                        <p>July 23, 2016 1 Comment</p>
                        </div>
                    </div>
                    ))
                }
              <div className="blog-insta-container">
                <h2>OUR INSTAGRAM</h2>
               <div className="blog-insta">
               {
                    imgData.map((el,i)=>(
                       <div className="blog-insta-img">
                         <img src={blogimg} alt="" />
                       </div>
                    ))
                }
               </div>
               
              </div>
            </div>
                  </div>
        </div>
        </section>
        </div>
    </Layout>
  )
}

export default BlogPage
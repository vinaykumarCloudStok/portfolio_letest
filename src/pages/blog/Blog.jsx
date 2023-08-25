import React from 'react'
import Layout from '../../layout/Layout'
import '../blog/blog.css'
import HomeBlog from '../../home/homeblog/HomeBlog'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
<Layout>
<div className="hero-container">
        <h1 className="hero-heading">Blog</h1>
    </div>
    <div className="shop-category-section">
   <section className='section'>
   <ul className="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li>Blog</li>
      </ul>
   </section>
   <HomeBlog/>
      </div>
</Layout>
  )
}

export default Blog
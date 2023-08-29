import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import ShopCategory from "./pages/shop/ShopCategory";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

import Product from "./pages/shop/Product";
import ProductTwo from "./pages/shop/ProductTwo";
import ProductThree from "./pages/shop/ProductThree";
import ProductOne from "./pages/shop/ProductOne";
import BodyProduct from "./pages/shop/BodyProduct";
import WishList from "./pages/shop/WishList";
import BlogPage from "./pages/blog/BlogPage";
import ScrollToTop from "./components/ScrollToTop";
import AddToCart from "./pages/cart/AddToCart";
import AllProduct from "./pages/shop/AllProduct";
import PageNotFound from "./components/PageNotFound";



function App() {


  return (
    <BrowserRouter>
       <ScrollToTop>
       <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/shop" element={<ShopCategory/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/blog" element={<Blog/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/addtoCart" element={<AddToCart/>} />
      <Route exact path="/product" element={<Product/>} />
      <Route exact path="/product/listtwo" element={<ProductTwo/>} />
      <Route exact path="/product/listthree" element={<ProductThree/>} />
      <Route exact path="/product/listone" element={<ProductOne/>} />
      <Route exact path="/bodyProduct" element={<BodyProduct/>} />
      <Route exact path="/wishlist" element={<WishList/>} />
      <Route exact path="/blogDescription" element={<BlogPage/>} />
      <Route exact path="/allProduct" element={<AllProduct/>} />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
       </ScrollToTop>
  
    </BrowserRouter>
  );
}

export default App;

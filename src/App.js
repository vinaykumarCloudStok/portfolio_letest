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
import BlogOne from "./pages/blog/BlogOne";
import BlogTwo from "./pages/blog/BlogTwo";
import BlogThree from "./pages/blog/BlogThree";
import BlogFour from "./pages/blog/BlogFour";
import BlogFive from "./pages/blog/BlogFive";
import BlogSix from "./pages/blog/BlogSix";
import BlogSeven from "./pages/blog/BlogSeven";
import Blog8 from "./pages/blog/Blog8";
import Blog9 from "./pages/blog/Blog9";
import Blog10 from "./pages/blog/Blog10";
import Blog11 from "./pages/blog/Blog11";
import Blog12 from "./pages/blog/Blog12";

import { ShopContextProvider } from "./context/shop-context";
import Payment from "./pages/payment/Payment";

function App() {


  return (
    <ShopContextProvider>
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
      <Route exact path="/blogOne" element={<BlogOne/>} />
      <Route exact path="/blogTwo" element={<BlogTwo/>} />
      <Route exact path="/blogThree" element={<BlogThree/>} />
      <Route exact path="/blogFour" element={<BlogFour/>} />
      <Route exact path="/blogFive" element={<BlogFive/>} />
      <Route exact path="/blogSix" element={<BlogSix/>} />
      <Route exact path="/blogSeven" element={<BlogSeven/>} />
      <Route exact path="/blog8" element={<Blog8/>} />
      <Route exact path="/blog9" element={<Blog9/>} />
      <Route exact path="/blog10" element={<Blog10/>} />
      <Route exact path="/blog11" element={<Blog11/>} />
      <Route exact path="/blog12" element={<Blog12/>} />
     <Route exact path="/payment" element={<Payment/>}/>
      <Route exact path="/allProduct" element={<AllProduct/>} />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
       </ScrollToTop>
  
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

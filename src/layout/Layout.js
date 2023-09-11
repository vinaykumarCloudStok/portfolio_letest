import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({children,size,setShow}) => {
  return (
    <>
    <Header size={size} setShow={setShow}/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
import React from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import FooterTop from '../Footer/FooterTop'
import Breadcrumb from '../Breadcrumb'

const MainLayouts = () => {
  let pageName = useLocation().pathname
  console.log(pageName)
  
  return (
    <>
      <TopBar />
      <SearchBar />
      <NavBar />
      {pageName !== '/' && <Breadcrumb />}
      <Outlet />
      <FooterTop />
      <Footer />
    </>
  )
}

export default MainLayouts
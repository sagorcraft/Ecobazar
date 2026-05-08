import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import FooterTop from '../Footer/FooterTop'

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <SearchBar />
      <NavBar />
      <Outlet />
      <FooterTop />
      <Footer />
    </>
  )
}

export default MainLayouts
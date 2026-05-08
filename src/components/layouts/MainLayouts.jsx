import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <SearchBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayouts
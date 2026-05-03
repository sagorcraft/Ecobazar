import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import FooterLinks from '../Footer/FooterLinks'
import NavBar from '../NavBar'

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <SearchBar />
      <NavBar />
      <Outlet />
      <FooterLinks />
    </>
  )
}

export default MainLayouts
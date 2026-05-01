import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import FooterLinks from '../Footer/FooterLinks'

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <SearchBar />
      <Outlet />
      <FooterLinks />
    </>
  )
}

export default MainLayouts
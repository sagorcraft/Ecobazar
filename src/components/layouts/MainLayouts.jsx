import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <SearchBar />
      <Outlet />
    </>
  )
}

export default MainLayouts
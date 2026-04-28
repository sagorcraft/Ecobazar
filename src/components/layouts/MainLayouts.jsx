import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}

export default MainLayouts
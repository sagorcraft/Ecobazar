import React from 'react'
import { Outlet } from 'react-router'
import Topbar from '../Topbar'

const MainLayouts = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  )
}

export default MainLayouts
import React from 'react'
import BreadCrumbsBanner from '../assets/images/breadcrumbs-banner.webp'
import Container from './layouts/Container'
import { MdOutlineHome } from "react-icons/md";
import { useLocation } from 'react-router';

const Breadcrumb = () => {
  let pageName = useLocation()
  let arr = pageName.pathname.split('/')
  console.log(pageName)
  return (
    <div style={{ background: `url(${BreadCrumbsBanner})` }}>
      <Container>
        <div className='flex items-center gap-2 py-5'>
          <MdOutlineHome className='text-[#808080] text-2xl' />
          {arr.map((item, index) => {
            if (item !== '') {
              return <span key={index} className='font-pop text-sm text-[#808080] hover:text-primary'>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            }
          })}
        </div>
      </Container>
    </div>
  )
}

export default Breadcrumb
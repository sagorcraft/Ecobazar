import React from 'react'
import BreadCrumbsBanner from '../assets/images/breadcrumbs-banner.webp'
import Container from './layouts/Container'
import { MdOutlineHome } from "react-icons/md";
import { Link, useLocation } from 'react-router';

const Breadcrumb = () => {
  let pageName = useLocation()
  let arr = pageName.pathname.split('/').filter(item => item !== '');


  return (
    <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${BreadCrumbsBanner})`}}>
      <Container>
        <div className='flex items-center gap-2 py-12'>
          <Link to="/" className='text-[#808080] hover:text-primary'>
            <MdOutlineHome className='text-2xl' />
          </Link>
          {/* Home icon er por separator */}
          {arr.length > 0 && (
            <span className='text-[#808080]'> &gt; </span>
          )}
          {arr.map((item, index) => (
            <span key={index} className='font-pop text-sm text-[#808080] hover:text-primary'>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {index !== arr.length - 1 && 
                  <span className=' text-[#808080]'> &gt; </span>}
              </span>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Breadcrumb
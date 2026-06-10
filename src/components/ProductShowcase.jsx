import React from 'react'
import Container from './layouts/Container'
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router';


const Productshowcase = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center justify-between pt-16'>
          <h2 className='font-pop font-semibold text-[32px] text-[#1A1A1A] pb-8'>Popular Categories</h2>
          <Link to='/cat' className='flex items-center gap-2 font-pop font-medium text-[16px] text-[#00B207] pb-8'>View all <HiArrowSmallRight className='text-[24px]' /></Link>
        </div>
      </Container>
    </div>
  )
}

export default Productshowcase
import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/images/Logo.webp'
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <Container className='py-6'>
      {/* logo start here */}
      <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <img 
            src={Logo} 
            alt="Ecobazar_logo" 
            fetchpriority="high"
          />
        </div>
        {/* logo ends here */}

        {/* search start here */}
        <div className='relative '>
          <RiSearchLine className='absolute top-0 left-4 translate-y-1/2 text-2xl' />
          <input 
            className='border border-[#808080] border-r-0 w-[400px] py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm placeholder:font-pop rounded-bl-md rounded-tl-md' 
            type="text"  
            placeholder='Search' 
          />
          <button className='font-pop font-semibold text-sm text-[14px] leading-5 py-3.75 px-6 bg-primary active:bg-green-500 relative top-[-2px] rounded-tr-md rounded-br-md cursor-pointer text-white'>Search</button>
        </div>
        {/* search ends here */}

        {/* carts start here */}
        <div className='shrink-0 flex gap-3 items-center'>
          <div className='flex items-center sm:gap-x-8 gap-x-2 relative after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-1/2'>
            <CiHeart className='w-8 h-8' />
            <HiOutlineShoppingBag className='w-8 h-8' />
          </div>
          <div className='flex flex-col'>
            <span className='font-pop text-[12px] text-gray-700'>Shopping cart:</span>
            <span className='font-pop text-[14px] text-gray-900 font-medium'>$57.00</span>
          </div>
        </div>
        {/* carts ends here */}
      </div>
    </Container>
  )
}

export default SearchBar
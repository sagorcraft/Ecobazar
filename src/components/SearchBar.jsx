import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/images/Logo.webp'
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router';

const SearchBar = () => {
  return (
    <Container className='py-6'>
      {/* logo start here */}
      <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <Link to='/'>
            <img 
              src={Logo} 
              alt="Ecobazar_logo" 
              fetchpriority="high"
            />
          </Link>
        </div>
        {/* logo ends here */}

        {/* search start here */}
        <div className='relative flex items-center'>
          <RiSearchLine className='absolute left-4 text-[20px] text-[#808080]' />
          <input 
            className='border border-[#808080] border-r-0 w-[400px] py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm placeholder:font-pop placeholder:font-normal rounded-bl-md rounded-tl-md'
            type="text"  
            placeholder='Search' 
          />
          <button className='font-pop font-semibold text-sm leading-5 py-3.75 px-6 bg-primary active:bg-green-500 rounded-tr-md rounded-br-md cursor-pointer text-white'>Search</button>
        </div>
        {/* search ends here */}

        {/* carts start here */}
        <div className='shrink-0 flex gap-3 items-center'>
          <div className='flex items-center sm:gap-x-8 gap-x-2 relative after:content[""] after:w-[1px] after:h-6 after:bg-gray-300 after:absolute after:left-1/2'>
            <CiHeart className='w-8 h-8' />
            <HiOutlineShoppingBag className='w-8 h-8' />
          </div>
          <div className='flex flex-col'>
            <span className='font-pop font-normal text-sm leading-4.25 text-[#4D4D4D]'>Shopping cart:</span>
            <span className='font-pop text-sm text-[#1A1A1A] font-medium'>$57.00</span>
          </div>
        </div>
        {/* carts ends here */}
      </div>
    </Container>
  )
}

export default SearchBar
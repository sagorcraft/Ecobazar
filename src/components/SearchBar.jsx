import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/Logo.webp'
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <Container>
      <div className='flex justify-between'>
        <div className='flex justify-center items-center'>
          <img 
            src={Logo} 
            alt="logo" 
            fetchpriority="high"
          />
        </div>
        <div>
          <input 
            className='border border-[#808080] w-[498px] py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm placeholder:font-pop rounded-md' 
            type="text"  
            placeholder='Search' 
          />
          <RiSearchLine className='relative -top-8 left-4' />
        </div>
        <div>sdfsdf</div>
      </div>
    </Container>
  )
}

export default SearchBar
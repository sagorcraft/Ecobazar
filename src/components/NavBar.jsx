import React from 'react'
import Container from './layouts/Container'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Container>
        <div className='flex justify-between items-center'>
          <ul className='flex gap-x-8 text-sm font-pop items-center relative'>
            <li className='p-4 bg-primary mr-46'>
              <FaBars size={32}/>
            </li>
            <li className='text-md font-bold bg-[#333333] absolute top-0 left-[64px] p-5.25'>
              <Link to="#" className='flex items-center gap-x-12'>All Categories <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1'>Home <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1'>Shop <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1'>Pages <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1'>Blog <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
          <div>
            <Link to="tel:2195550114" className='flex items-center gap-x-2'> <PiPhoneCall size={32}/>(219) 555-0114</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
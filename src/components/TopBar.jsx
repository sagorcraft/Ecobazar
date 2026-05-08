import React, { useRef, useState } from 'react'
import Container from './layouts/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import useOutSideClick from '../hooks/OutSideClick';

const TopBar = () => {
  let [openLan, setOpenLan] = useState(false)
  const [currencyOpen, setCurrencyOpen] = useState(false)

  const dropDownLanRef = useRef(null)
  const dropDownCurrencyRef = useRef(null)

  useOutSideClick(dropDownLanRef,()=> setOpenLan(false),openLan)
  useOutSideClick(dropDownCurrencyRef, ()=> setCurrencyOpen(false),currencyOpen)
  
  return (
    <div className='border-b border-solid border-b-gry text-sm font-Poppins text-[#666666] py-3.25'>
      <Container >
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2'>
            <Link to="#" className='text-[#808080] flex items-center'><CiLocationOn size={22}/></Link>
            <span className='font-pop font-normal text-sm text-[#808080]'>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>
          {/* Language Dropdown */}
          <div className='flex gap-x-5'>
            <div onClick={() => setOpenLan(!openLan)} className='flex items-center cursor-pointer font-pop font-normal text-sm text-[#808080] relative' ref={dropDownLanRef}>
              Eng <FaAngleDown size={20} />
              {openLan &&
                <div className='absolute top-7 left-0 bg-gry p-3.25 z-10'>
                  <ul className='font-pop font-normal text-sm text-[#808080]'>
                    <li>BN</li>
                    <li>CH</li>
                    <li>HI</li>
                  </ul>
                </div>
              }
            </div>
            {/* Currency Dropdown */}
            <div onClick={() => setCurrencyOpen(!currencyOpen)} className='flex items-center cursor-pointer font-pop font-normal text-sm text-[#808080] relative' ref={dropDownCurrencyRef}>
              USD <FaAngleDown size={20} />
              {currencyOpen &&
                <div className='absolute top-7 left-0 bg-gry p-3.25 z-10'>
                  <ul className='font-pop font-normal text-sm text-[#808080] hover:text-gray-500'>
                    <li>BDT</li>
                    <li>EUR</li>
                    <li>GBP</li>
                  </ul>
                </div>
              }
            </div>
            {/* sign in & sign Up here */}
            <div className='flex items-center relative after:w-[1px] after:h-6 after:bg-[#E6E6E6] after:content-[""] after:absolute after:top-[2px] after:left-[-10px]'>
              <Link to="/login" className='font-pop font-normal text-sm text-[#808080] mr-1'>Sign In</Link> 
              <span>/</span> 
              <Link to="/registration" className='font-pop font-normal text-sm text-[#808080] ml-1'>Sign Up</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
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
            <CiLocationOn />
            <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
          </div>
          {/* Language Dropdown */}
          <div className='flex gap-x-5'>
            <div onClick={() => setOpenLan(!openLan)} className='flex items-center cursor-pointer' ref={dropDownLanRef}>
              Eng <FaAngleDown />
              {openLan &&
                <div className='absolute top-8.75 bg-gry p-3.25'>
                  <ul>
                    <li>BN</li>
                    <li>CH</li>
                    <li>HI</li>
                  </ul>
                </div>
              }
            </div>
            {/* Currency Dropdown */}
            <div onClick={() => setCurrencyOpen(!currencyOpen)} className='flex items-center' ref={dropDownCurrencyRef}>
              USD <FaAngleDown />
              {currencyOpen &&
                <div className='absolute top-8.75 bg-gry p-3.25'>
                  <ul>
                    <li>BDT</li>
                    <li>EUR</li>
                    <li>GBP</li>
                  </ul>
                </div>
              }
            </div>
            {/* sign in & sign Up here */}
            <div className='flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:content-[] after:absolute after:top-[2px] after:left-[-10px]'><Link to="/login">Sign In</Link> / <Link to="/registration">Sign Up</Link></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
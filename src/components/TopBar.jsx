import React, { useRef } from 'react'
import Container from './layouts/Container'
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';

const TopBar = () => {
  let dropRefLan = useRef(null)
  
  let handleClickLanDrop = ()=> {
    if(dropRefLan.current.style.display === "block"){
      dropRefLan.current.style.display = "none"
    }else{
      dropRefLan.current.style.display = "block"
    }
  }
  return (
    <div className='border-b border-solid border-b-gry text-sm font-pop text-[#666666] py-3.25'>
      <Container >
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-2'>
            <CiLocationOn />
            <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
          </div>
          <div className='flex gap-x-5'>
            <div className='flex items-center' onClick={handleClickLanDrop}>Eng <FaAngleDown /></div>
            <div className='absolute top-[35px] bg-gry p-3.25 hidden' ref={dropRefLan}>
              <ul>
                <li>BN</li>
                <li>CH</li>
                <li>HI</li>
              </ul>
            </div>
            <div className='flex items-center'>USD <FaAngleDown /></div>
            <div className='flex items-center relative after:w-[1px] after:h-[15px] after:bg-[#E6E6E6] after:content-[] after:absolute after:top-[2px] after:left-[-10px]'><Link to="/login">Sign In</Link> / <Link to="/registration">Sign Up</Link></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TopBar
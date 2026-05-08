import React from 'react'
import Container from '../layouts/Container'
import { RiSearchLine } from 'react-icons/ri'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';

const FooterTop = () => {
  return (
    <div className='bg-gry py-10'>
      <Container>
        <div className='flex justify-between'>
          <div>
            <h5 className='font-pop font-semibold text-[24px]'>Subcribe our Newsletter</h5>
            <p className='max-w-[405px] font-pop font-sm text-[14px] text-[#999999] mt-1'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
          </div>
          <div className='flex items-center'>
            <div className='relative '>
              <RiSearchLine className='absolute top-0 left-4 translate-y-1/2 text-2xl' />
              <input 
                className='border border-[#808080] border-r-0 w-[400px] py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm placeholder:font-pop rounded-bl-full rounded-tl-full bg-white' 
                type="text"  
                placeholder='Your email address' 
              />
              <button className='font-pop font-semibold text-sm text-[16px] leading-5 py-4 px-10 bg-primary active:bg-green-500 relative top-[-2px] left-[-18px]  rounded-full cursor-pointer text-white'>Subscribe</button>
            </div>
            <div className='flex gap-2 ml-4'>
              <div className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer text-[#4D4D4D]'>
                <Link to='https://www.facebook.com/' target='_blank'>
                  <FaFacebookF size={22} />
                </Link>
              </div>
              <div className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer text-[#4D4D4D]'>
                <Link to='https://twitter.com/' target='_blank'>
                  <FaTwitter size={22} />
                </Link>
              </div>
              <div className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer text-[#4D4D4D]'>
                <Link to='https://www.pinterest.com/' target='_blank'>
                  <FaPinterestP size={22} />
                </Link>
              </div>
              <div className='w-10 h-10 rounded-full flex justify-center items-center hover:bg-primary hover:text-white cursor-pointer text-[#4D4D4D]'>
                <Link to='https://www.instagram.com/' target='_blank'>
                  <FaInstagram size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterTop
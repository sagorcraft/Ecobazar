import React from 'react'
import Container from '../layouts/Container'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router';

const FooterTop = () => {
  return (
    <div className='bg-gry py-10'>
      <Container>
        <div className='flex justify-between items-center'>
          <div>
            <h5 className='font-pop font-semibold text-[24px]'>Subscribe our Newsletter</h5>
            <p className='max-w-[405px] font-pop font-normal text-sm text-[#999999] mt-1'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
          </div>

          <div className='flex items-center'>
          {/* Newsleter subscription start here */}
            <div className='relative flex items-center'>
              <MdOutlineMail className='absolute left-4 text-[20px] text-[#808080]' />
              <input 
                className='border border-[#808080] pr-36 w-[492px] py-3 pl-11 placeholder:text-[#808080] placeholder:text-sm placeholder:font-pop placeholder:font-normal rounded-full bg-white'
                type="text"  
                placeholder='Your email address' 
              />
              <button className='font-pop font-semibold text-sm leading-5 py-3.5 px-6 bg-primary active:bg-green-500 rounded-full cursor-pointer text-white absolute right-0'>Subscribe</button>
            </div>
            {/* Newsleter subscription ends here */}

            {/* social media icons start here */}
            <div className='flex gap-2 ml-10'>
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
            {/* social media icons ends here */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterTop
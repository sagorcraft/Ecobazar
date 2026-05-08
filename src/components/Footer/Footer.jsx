import React from 'react'
import Container from '../layouts/Container'
import FooterLogo from '../../assets/images/footerlogo.webp'
import { Link } from 'react-router'
import FooterLogoImage from '../../assets/images/footerlogoimage.webp'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <Container>
        <div className='flex justify-between items-center py-10 text-white'>
          <div>
            <img src={FooterLogo} alt="Ecobazar_Footerlogo" />
            <p className='max-w-[336px] my-4 font-pop font-normal text-sm text-[#808080] pr-7.5'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div>
              <Link to='tel:2195550114' className='inline-block mr-4 border-b-2 border-primary pb-1.5'>(219) 555-0114</Link>
              <span className='font-normal font-pop text-[16px] text-[#808080]'>or</span>
              <Link to='mailto:Proxy@gmail.com' className='inline-block ml-4 border-b-2 border-primary pb-1.5'>Proxy@gmail.com</Link>
            </div>
          </div>
          <div>
            <h5 className='font-pop font-semibold text-[16px] mb-5'>My Account</h5>
            <ul className='font-pop font-normal text-[14px] text-[#999999] gap-3 flex flex-col'>
              <li className='hover:text-white leading-8'>My Account</li>
              <li className='hover:text-white leading-8'>Order History</li>
              <li className='hover:text-white leading-8'>Shoping Cart</li>
              <li className='hover:text-white leading-8'>Wishlist</li>
            </ul>
          </div>
          <div>
            <h5 className='font-pop font-semibold text-[16px] mb-5'>Helps</h5>
            <ul className='font-pop font-normal text-[14px] text-[#999999] gap-3 flex flex-col'>
              <li className='hover:text-white leading-8'>Contact</li>
              <li className='hover:text-white leading-8'>Faqs</li>
              <li className='hover:text-white leading-8'>Terms & Condition</li>
              <li className='hover:text-white leading-8'>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h5 className='font-pop font-semibold text-[16px] mb-5'>Proxy</h5>
            <ul className='font-pop font-normal text-[14px] text-[#999999] gap-3 flex flex-col'>
              <li className='hover:text-white leading-8'>About</li>
              <li className='hover:text-white leading-8'>Shop</li>
              <li className='hover:text-white leading-8'>Product</li>
              <li className='hover:text-white leading-8'>Track Order</li>
            </ul>
          </div>
          <div>
            <h5 className='font-pop font-semibold text-[16px] mb-5'>Categories</h5>
            <ul className='font-pop font-normal text-[14px] text-[#999999] gap-3 flex flex-col'>
              <li className='hover:text-white leading-8'>Fruit & Vegetables</li>
              <li className='hover:text-white leading-8'>Meat & Fish</li>
              <li className='hover:text-white leading-8'>Bread & Bakery</li>
              <li className='hover:text-white leading-8'>Beauty & Health</li>
            </ul>
          </div>
        </div>
        <div className=' flex justify-between text-white text-sm py-5 border-t border-solid border-t-[#808080]'>
          <div className='font-pop font-normal text-[14px] text-[#808080]'>Ecobazar eCommerce © 2021. All Rights Reserved</div>
          <div>
            <img src={FooterLogoImage} alt="Ecobazar Footer Logo" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
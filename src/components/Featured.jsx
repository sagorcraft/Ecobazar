import React from 'react'
import Container from './layouts/Container'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GoPackage } from "react-icons/go";

const Featured = () => {
  return (
    <Container>
      <div className='flex mx-auto shadow-md  p-10'>
        <div className='flex items-center w-[306px] gap-x-4 mx-auto'>
          <div>
              <TbTruckDelivery  className='text-[40px] text-[#00B207]' />
          </div>
          <div>
              <h2 className='font-poppins font-semibold text-[16px] text-[#1A1A1A] pb-[5px]'>Free Shipping</h2>
            <p className='font-poppins font-normal text-[15px] text-[#999999]'> Free shipping on all your order</p>
          </div>
        </div>

        <div className='flex items-center w-[306px] gap-x-4 mx-auto'>
          <div>
              <TfiHeadphoneAlt className='text-[40px] text-[#00B207]' />
          </div>
          <div>
              <h2 className='font-poppins font-semibold text-[16px] text-[#1A1A1A] pb-[5px]'>Customer Support 24/7</h2>
            <p className='font-poppins font-normal text-[15px] text-[#999999]'>Instant access to Support</p>
          </div>
        </div>
        
        <div className='flex items-center w-[306px] gap-x-4 mx-auto'>
          <div>
              <RiShoppingBag4Line className='text-[40px] text-[#00B207]' />
          </div>
          <div>
              <h2 className='font-poppins font-semibold text-[16px] text-[#1A1A1A] pb-[5px]'>100% Secure Payment</h2>
            <p className='font-poppins font-normal text-[15px] text-[#999999]'>We ensure your money is save</p>
          </div>
        </div>

        <div className='flex items-center w-[306px] gap-x-4 mx-auto'>
          <div>
              <GoPackage className='text-[40px] text-[#00B207]' />
          </div>
          <div>
              <h2 className='font-poppins font-semibold text-[16px] text-[#1A1A1A] pb-[5px]'>Money-Back Guarantee</h2>
            <p className='font-poppins font-normal text-[15px] text-[#999999]'>30 Days Money-Back Guarantee</p>
          </div>
        </div> 
      </div>
    </Container>

  )
}

export default Featured
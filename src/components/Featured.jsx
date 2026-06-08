import React from 'react'
import Container from './layouts/Container'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GoPackage } from "react-icons/go";

const Featured = () => {
  return (
    <div className="pt-8 pb-16 items-center">
      <Container>
        <div className='flex justify-between shadow-2xl  py-[40px] px-[40px]'>
          <div className='flex items-center'>
            <div>
                <TbTruckDelivery  className='text-[40px] text-[#00B207] mr-[16px]' />
            </div>
            <div>
                <h2 className='font-poppins font-semibold text-[16px] pb-[5px] text-[#1A1A1A]'>Free Shipping</h2>
              <p className='font-poppins font-normal text-[15px] text-[#999999]'> Free shipping on all your order</p>
            </div>
          </div>

          <div className='flex items-center'>
            <div>
                <TfiHeadphoneAlt className='text-[40px] text-[#00B207] mr-[16px]' />
            </div>
            <div>
                <h2 className='font-poppins font-semibold text-[16px] pb-[5px] text-[#1A1A1A]'>Customer Support 24/7</h2>
              <p className='font-poppins font-normal text-[15px] text-[#999999]'>Instant access to Support</p>
            </div>
          </div>
          
          <div className='flex items-center'>
            <div>
                <RiShoppingBag4Line className='text-[40px] text-[#00B207] mr-[16px]' />
            </div>
            <div>
                <h2 className='font-poppins font-semibold text-[16px] pb-[5px] text-[#1A1A1A]'>100% Secure Payment</h2>
              <p className='font-poppins font-normal text-[15px] text-[#999999]'>We ensure your money is save</p>
            </div>
          </div>

          <div className='flex items-center'>
            <div>
                <GoPackage className='text-[40px] text-[#00B207] mr-[16px]' />
            </div>
            <div>
                <h2 className='font-poppins font-semibold text-[16px] pb-[5px] text-[#1A1A1A]'>Money-Back Guarantee</h2>
              <p className='font-poppins font-normal text-[15px] text-[#999999]'>30 Days Money-Back Guarantee</p>
            </div>
          </div> 
        </div>
      </Container>
    </div>
  )
}

export default Featured
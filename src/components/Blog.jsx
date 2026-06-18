import React from 'react'
import Container from './layouts/Container'
import BlogOne from '../assets/images/blogone.webp'
import BlogTwo from '../assets/images/blogtwo.webp'
import BlogThree from '../assets/images/blogthree.webp'
import { FaTag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";

const Blog = () => {
  return (
    <Container>
        <div className='mt-15 mx-auto '>
            <h2 className='text-center font-pop text-[32px] text-[#1A1A1A] mb-8'>Latest News</h2>
            <div className='flex mx-auto gap-6 '>
               <div className='max-w-[442px] group'>
                <img src={BlogOne} alt="Blog One" className='w-full h-79' />
                <div className='flex gap-4 my-2 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-19.5'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>

               <div className='max-w-[442px] group'>
                <img src={BlogTwo} alt="Blog Two" />
                <div className='flex gap-3 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-19.5'>Eget lobortis lorem lacinia. Vivamus pharetra semper,</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>

               <div className='max-w-[442px] group'>
                <img src={BlogThree} alt="Blog Three" />
                <div className='flex gap-3 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-19.5'>Maecenas blandit risus elementum mauris malesuada.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>
              
            </div>
        </div>
        
    </Container>
  )
}

export default Blog
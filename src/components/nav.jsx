import React, { useRef, useState } from 'react'
import Container from './layouts/Container';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiMenuBurger, CiApple } from "react-icons/ci";
import { FaCarrot } from "react-icons/fa";
import { IoFishOutline } from "react-icons/io5";
import { LiaDrumstickBiteSolid } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { CgIcecream } from "react-icons/cg";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import useOutsiteClick from '../hooks/outsideClick';

const NavBer = () => {
  const [open, setOpen] = useState(false);
  const CategoryRef = useRef(null);

  useOutsiteClick(CategoryRef, () => setOpen(false), open);

  return (
    <div className='bg-[#0e0d0d] w-full'>
      <Container>
        <nav className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-white bg-primry p-4 cursor-pointer'>
              <CiMenuBurger size={32} />
            </div>
            <div className='relative' ref={CategoryRef}>
              <div 
                onClick={() => setOpen(!open)} 
                className='flex items-center gap-2 mr-14 pl-4 pr-4 bg-[#333333] py-5 text-white font-pop text-[16px] cursor-pointer'
              >
                All Categories 
                <MdOutlineKeyboardArrowDown size={20}/>
              </div>
              <div 
                className={`
                  absolute -left-16 top-full bg-white w-56.25 border border-gray-300 shadow-lg z-50
                  transition-all duration-300 ease-in-out
                  ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-3 invisible pointer-events-none'}
                `}
              >
                <ul className='font-pop text-sm'>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <CiApple size={20}/> Fresh Fruit
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <FaCarrot size={20}/> Vegetables
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <IoFishOutline size={20}/> River Fish
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <LiaDrumstickBiteSolid size={20}/> Chicken & Meat
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <SiBuymeacoffee size={20}/> Drink & Water
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <CgIcecream size={20}/> Yogurt & Ice Cream
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <GiCupcake size={20}/> Cake & Bread
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <LuIceCreamBowl size={20}/> Butter & Cream
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer'>
                    <PiCookingPot size={20}/> Cooking
                  </li>
                  <li className='py-3 px-4 flex items-center gap-2 hover:bg-gray-100 cursor-pointer font-medium'>
                    <GoPlus size={20}/> View All Category
                  </li>
                </ul>
              </div>

            </div>
            <ul className='flex gap-8 text-[#999999] font-pop text-sm py-5 cursor-pointer'>
              <li className='flex items-center gap-1 hover:text-white'>Home <MdOutlineKeyboardArrowDown size={20}/></li>
              <li className='flex items-center gap-1 hover:text-white'>Shop <MdOutlineKeyboardArrowDown size={20}/></li>
              <li className='flex items-center gap-1 hover:text-white'>Pages <MdOutlineKeyboardArrowDown size={20}/></li>
              <li className='hover:text-white'>About US</li>
              <li className='hover:text-white'>Contact US</li>
            </ul>
          </div>

          <div className='flex items-center text-white gap-2 cursor-pointer text-sm font-pop'>
            <FiPhoneCall size={18}/> (219) 555-0114
          </div>

        </nav>
      </Container>
    </div>
  )
}

export default NavBer;
import React, { useState, useRef, useCallback } from 'react'
import Container from './layouts/Container'
import { Link } from 'react-router'
import { FaBars, FaAngleDown, FaAngleRight, FaTimes, FaSearch } from "react-icons/fa"
import { PiPhoneCall } from "react-icons/pi"
import {
  TbApple, TbCarrot, TbFish, TbMeat,
  TbBottle, TbIceCream, TbBread, TbMilk, TbCooker
  } from "react-icons/tb"
import useOutSideClick from '../hooks/OutSideClick'


const CAT_ICONS = {
    fresh:     <TbApple size={20} />,
    meat:      <TbFish size={20} />,
    dairy:     <TbMilk size={20} />,
    bakery:    <TbBread size={20} />,
    beverages: <TbBottle size={20} />,
    cooking:   <TbCooker size={20} />,
  }

const CATEGORIES = [
    { id: 'fresh',     label: 'Fresh Foods',       subs: ['Organic Fruits', 'Fresh Vegetables', 'Herbs & Greens', 'Seasonal Picks'] },
    { id: 'meat',      label: 'Meat & Fish',        subs: ['River Fish', 'Sea Fish', 'Chicken', 'Beef', 'Mutton'] },
    { id: 'dairy',     label: 'Dairy & Ice-cream',  subs: ['Fresh Milk', 'Cheese', 'Butter', 'Ice Cream', 'Yogurt'] },
    { id: 'bakery',    label: 'Bakery',             subs: ['Artisan Bread', 'Cakes', 'Pastries', 'Cookies', 'Muffins'] },
    { id: 'beverages', label: 'Beverages',          subs: ['Fresh Juice', 'Mineral Water', 'Soft Drinks', 'Tea & Coffee'] },
    { id: 'cooking',   label: 'Cooking Essentials', subs: ['Spices & Herbs', 'Cooking Oils', 'Sauces', 'Rice & Flour'] },
  ]

const TOP_CATEGORIES = [
    { icon: <TbApple size={20} />,    label: 'Fresh Fruits' },
    { icon: <TbCarrot size={20} />,   label: 'Vegetables' },
    { icon: <TbFish size={20} />,     label: 'River Fish' },
    { icon: <TbMeat size={20} />,     label: 'Chicken & Meat' },
    { icon: <TbBottle size={20} />,   label: 'Drinks & Water' },
    { icon: <TbIceCream size={20} />, label: 'Yogurt & Ice Cream' },
    { icon: <TbBread size={20} />,    label: 'Cake & Bread' },
    { icon: <TbMilk size={20} />,     label: 'Butter & Cream' },
    { icon: <TbCooker size={20} />,   label: 'Cooking' },
  ]


const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeId, setActiveId] = useState(null)

  const sidebarRef = useRef(null)
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  useOutSideClick(sidebarRef, closeSidebar, sidebarOpen)

  const activeCat = CATEGORIES.find(c => c.id === activeId)
  
  return (
  <>
    {/* Overlay */}
    <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
      ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    />

    {/* Sidebar */}
    <div
      ref={sidebarRef}
      onMouseLeave={() => setActiveId(null)}
      className={`fixed top-0 left-0 h-full z-50 flex bg-white shadow-2xl
        transition-transform duration-[330ms] ease-[cubic-bezier(.4,0,.2,1)]
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Left panel */}
      <div className="w-[260px] flex flex-col border-r border-gray-200 flex-shrink-0">

        {/* Header */}
        <div className="flex justify-between items-center px-[22px] py-[18px] border-b border-gray-200">
          <h2 className="text-[18px] font-extrabold text-gray-900">Shop All</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 hover:text-gray-800 text-xl transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2 p-4 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-[13px]
              outline-none focus:border-green-500 text-gray-800"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-sm transition-colors">
            <FaSearch />
          </button>
        </div>

        {/* Category List */}
        <div className="flex-1 overflow-y-auto">
          {CATEGORIES.map(cat => (
            <div
              key={cat.id}
              onMouseEnter={() => setActiveId(cat.id)}
              className={`flex justify-between items-center px-[18px] py-[13px]
                border-b border-gray-100 text-[13px] cursor-pointer transition-colors
                ${activeId === cat.id
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:bg-green-600 hover:text-white'}`}
            >
              <div className="flex items-center gap-3">
                <span className={activeId === cat.id ? 'text-white' : 'text-gray-400'}>
                  {CAT_ICONS[cat.id]}
                </span>
                {cat.label}
              </div>
              <FaAngleRight className="text-xs opacity-60" />
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      {activeId && (
        <div className="flex-1 flex flex-col bg-white">
          <div className="px-5 py-[15px] text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">
            {activeCat?.label}
          </div>
          <div className="flex-1 overflow-y-auto">
            {activeCat?.subs.map((sub, i) => (
              <Link
                key={i}
                to="#"
                className="block px-10 py-[13px] text-[13px] text-gray-700
                  border-b border-gray-50 hover:text-green-600 hover:font-semibold transition-colors"
              >
                {sub}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Navbar section start */}
    <div className='bg-gray-900 text-white'>
      <Container>
        <div className='flex justify-between items-center'>
          <ul className='flex items-center gap-x-8 text-sm font-pop font-medium'>

            {/* All Categories button + dropdown */}
            <li className='flex items-stretch relative group'>
              <button
                onClick={() => setSidebarOpen(true)}
                className='p-4 bg-primary flex items-center border-none cursor-pointer hover:brightness-110 transition-all'
              >
                <FaBars size={32} />
              </button>
              <span className='text-base bg-[#333333] px-6 py-5 flex items-center'>
                <Link to="#" className='flex items-center gap-x-10'>
                  All Categories
                  <FaAngleDown size={22} className='transition-transform duration-300 group-hover:rotate-180' />
                </Link>
              </span>

              {/* Dropdown */}
              <div className='absolute top-full left-0 w-[280px] bg-white text-gray-800 shadow-2xl z-30
                opacity-0 invisible -translate-y-1.5
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200'>
                <div className='bg-[#1f2937] text-white px-[18px] py-[13px] text-[13px] font-bold flex justify-between items-center'>
                  Top Categories <FaAngleDown size={11} />
                </div>
                {TOP_CATEGORIES.map((item, i) => (
                  <Link
                    key={i}
                    to="#"
                    className='flex items-center gap-[14px] px-[18px] py-[11px]
                      border-b border-gray-100 text-sm font-pop font-normal text-gray-700
                      hover:text-white hover:bg-primary transition-colors'
                  >
                    <span className='w-[32px] h-[32px] flex items-center justify-center text-gray-400 hover:text-white transition-colors'>
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="#"
                  className='flex items-center gap-[14px] px-[18px] py-[11px]
                    text-[13px] font-bold text-green-600 hover:bg-green-50 transition-colors'
                >
                  <span className='w-[32px] h-[32px] flex items-center justify-center bg-green-50 rounded-full font-bold text-lg'>
                    +
                  </span>
                  View All Categories
                </Link>
              </div>
            </li>

            {/* Nav links — হাত দিতে হবে না, আগেরটাই রাখো */}
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Home <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Shop <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Pages <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Blog <FaAngleDown size={22} /></Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='flex items-center gap-x-1 text-[#808080] hover:text-white'>Contact Us</Link>
            </li>
          </ul>

          <div className='font-pop font-medium text-sm'>
            <Link to="tel:2195550114" className='flex items-center gap-x-2'>
              <PiPhoneCall size={32} />(219) 555-0114
            </Link>
          </div>
        </div>
      </Container>
    </div>
  </>
)
}

export default NavBar
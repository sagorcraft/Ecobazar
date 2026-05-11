import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Registration = () => {
  let [showPassword, setShowPassword] = useState(false)
  let [confirmPassword, setConfirmPassword] = useState(false)
  return (
    <div className='max-w-[520px] w-full bg-white p-6 shadow-md my-10 mx-auto rounded-md'>
      <h3 className='font-pop font-semibold text-[32px] text-center'>Create Account</h3>
      <form>
        <input type="email" placeholder='Email' className='w-full border border-[#808080] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mt-6 font-pop font-normal text-base' />
        <div className='relative mt-3'>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder='Password' 
            className='w-full border border-[#808080] py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop font-normal text-base' 
          />
          <div className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-xl' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className='relative mt-3'>
          <input 
            type={confirmPassword ? "text" : "password"} 
            placeholder='Confirm Password' 
            className='w-full border border-[#808080] py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop font-normal text-base' 
          />
          <div className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-xl' onClick={() => setConfirmPassword(!confirmPassword)}>
            {confirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className='flex items-center mt-4'>
          <input type="checkbox" id='terms' className='mr-2 w-5 h-5' />
          <label htmlFor='terms' className='font-pop font-normal text-sm text-[#808080]'>Accept all terms & Conditions
          </label>
        </div>
        <button type='submit' className='w-full font-pop text-sm font-semibold bg-primary text-white py-3 rounded-full mt-5 hover:bg-green-500 transition-colors duration-300 cursor-pointer'>Create Account</button>
        <p className='text-center text-sm text-[#808080] mt-4 font-pop font-normal'>
          Already have an account? 
          <Link to="/login" className='text-primary hover:underline pl-1 font-pop font-normal text-sm'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Registration
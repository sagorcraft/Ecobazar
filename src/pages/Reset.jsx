import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Reset = () => {
  let [showPassword, setShowPassword] = useState(false)
  let [confirmPassword, setConfirmPassword] = useState(false)
  return (
    <div className='max-w-[520px] w-full bg-white p-6 shadow-md my-10 mx-auto rounded-md'>
      <div className='text-center'>
        <h2 className='font-pop text-3xl font-semibold text-gray-800'>
          Reset Your Password
        </h2>

        <p className='font-pop text-sm text-gray-500 mt-3 leading-6'>
          Your previous password has been reset. Please set a new password for your account.
        </p>
      </div>

      <div className='relative mt-8'>
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder='Set A New Password' 
          className='w-full border border-[#808080] py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop font-normal text-base' 
        />
        <div className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-xl' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      </div>

      <div className='relative mt-3'>
        <input 
          type={confirmPassword ? "text" : "password"} 
          placeholder='Confirm Your Password' 
          className='w-full border border-[#808080] py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md font-pop font-normal text-base' 
        />
        <div className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 text-xl' onClick={() => setConfirmPassword(!confirmPassword)}>
          {confirmPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      </div>

      <button type='submit' className='w-full font-pop text-sm font-semibold bg-primary text-white py-3 rounded-full mt-5 hover:bg-green-500 transition-colors duration-300 cursor-pointer'>Update Password</button>
      <p className='text-center text-sm text-[#808080] mt-4 font-pop font-normal'>
        Remember Your password
        <Link to="/login" className='text-primary hover:underline pl-1 font-pop font-normal text-sm'>Login</Link>
      </p>
    </div>
  )
}

export default Reset
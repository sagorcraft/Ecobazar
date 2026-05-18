import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router'

const Otp = () => {
  return (
    <div className='w-full max-w-[520px] bg-white p-8 rounded-md shadow-lg my-10 mx-auto'>
          <div className='text-center'>
            <h2 className='font-pop text-3xl font-semibold text-gray-800'>
              Verify Your Account
            </h2>
    
            <p className='font-pop text-sm text-gray-500 mt-3 leading-6'>
              An authentication code has been sent to your email. Please enter the code below to verify your account.
            </p>
          </div>
    
          <div className='relative mt-8'>
            <input
              type='text'
              placeholder='Enter the verification code'
              className='w-full border border-gray-300 py-3 pl-12 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-pop text-base'
            />
  
            <MdOutlineEmail className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-2xl' />
          </div>
          <p className='text-sm text-gray-500 mt-2 font-pop'>
              Didn't receive the code? <Link to='/otp' className='text-primary hover:underline'>Resend</Link>
            </p>
    
          <Link to='/reset-password'>
            <button
              type='submit'
              className='w-full bg-primary text-white py-3 rounded-full mt-6 font-pop font-semibold hover:bg-green-500 duration-300 cursor-pointer'
            >
              Verify Account
            </button>
          </Link>
    
          <div className='mt-6 text-center'>
            <Link
              to='/login'
              className='inline-flex items-center gap-2 text-primary hover:underline font-pop text-sm'
            >
              <FaArrowLeft />
              Back to Login
            </Link>
          </div>
    
        </div>
  )
}

export default Otp
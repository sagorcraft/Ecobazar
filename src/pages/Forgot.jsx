import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router'

const Forgot = () => {
  return (
    <div className='w-full max-w-[520px] bg-white p-8 rounded-md shadow-lg my-10 mx-auto'>
      <div className='text-center'>
        <h2 className='font-pop text-3xl font-semibold text-gray-800'>
          Forgot Password?
        </h2>

        <p className='font-pop text-sm text-gray-500 mt-3 leading-6'>
          Don’t worry! Enter your email address and we’ll send you a link to reset your password.
        </p>
      </div>

      <form className='mt-8'>
        <div className='relative'>
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full border border-gray-300 py-3 pl-12 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-pop text-base'
          />

          <MdOutlineEmail className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-2xl' />
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-white py-3 rounded-full mt-6 font-pop font-semibold hover:bg-green-500 duration-300 cursor-pointer'
        >
          Reset Password
        </button>

      </form>

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

export default Forgot
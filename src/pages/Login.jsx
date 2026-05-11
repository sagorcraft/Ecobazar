import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='max-w-[520px] w-full bg-white p-6 shadow-md my-10 mx-auto rounded-md'>
      <h3 className='font-pop font-semibold text-[32px] text-center'>Sign In</h3>
      <form>
        <input type="email" placeholder='Email' className='w-full border border-[#808080] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mt-6 font-pop font-normal text-base' />
        <input type="password" placeholder='Password' className='w-full border border-[#808080] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mt-3 font-pop font-normal text-base' />
        <div className='flex justify-between my-4'>
          <div className='flex items-center'>
            <input type="checkbox" id='terms' className='mr-2 w-5 h-5' />
            <label htmlFor='terms' className='font-pop font-normal text-sm text-[#808080]'>Remember me</label>
          </div>
          <p className='text-sm text-[#808080] mt-2 font-pop font-normal'>
            <Link to="/forgot" className='text-primary hover:underline'>Forgot Password</Link>
          </p>
        </div>
        <button type='submit' className='w-full font-pop text-sm font-semibold bg-primary text-white py-3 rounded-full mt-5 hover:bg-green-500 transition-colors duration-300 cursor-pointer'>Login</button>
        <p className='text-center text-sm text-[#808080] mt-4 font-pop font-normal'>
          Don’t have account? 
          <Link to="/registration" className='text-primary hover:underline pl-1 font-pop font-normal text-sm'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
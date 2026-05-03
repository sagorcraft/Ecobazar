import React from 'react'
import Container from './layouts/Container'
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
      <div className='bg-gray-900'>
        <Container>
          <nav className='flex justify-between items-center'>
            <div className='flex items-center'>
              <div className='text-white bg-primry p-4 cursor-pointer'>
                <CiMenuBurger size={32} />
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </nav>
        </Container>
      </div>
    </>
  )
}

export default NavBar
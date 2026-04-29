import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/Logo.webp'

const SearchBar = () => {
  return (
    <Container>
      <div className='flex justify-between'>
        <div className='w-40 h-17'>
          <img 
            src={Logo} 
            alt="logo" 
            fetchpriority="high"
          />
        </div>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
      </div>
    </Container>
  )
}

export default SearchBar
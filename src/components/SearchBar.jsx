import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/Logo.webp'

const SearchBar = () => {
  return (
    <Container>
      <div className='flex justify-between'>
        <div className=''>
          <img src={Logo} alt="logo" />
        </div>
        <div>sdfsdf</div>
        <div>sdfsdf</div>
      </div>
    </Container>
  )
}

export default SearchBar
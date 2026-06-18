import React from 'react'
import Container from './layouts/Container'
import DiscountImg from '../assets/images/discountbanner.webp'

const DiscountBanner = () => {
  return (
    <Container>
      <div className='flex items-center justify-center py-15'>
        <img src={DiscountImg} alt="Discount Banner" />
      </div>
    </Container>
  )
}

export default DiscountBanner 
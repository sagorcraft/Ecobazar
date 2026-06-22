import React from 'react'
import Container from './layouts/Container'
import DiscountImg from '../assets/images/discountbanner.webp'

const DiscountBanner = () => {
  return (
    <div className='px-4 py-15'>
      <Container>
        <div className='size-full group overflow-hidden rounded-[10px]'>
          <img src={DiscountImg} alt="Discount Banner" className='w-full cursor-pointer group-hover:scale-[1.01] transition-all duration-300' />
        </div>
      </Container>
    </div>
  )
}

export default DiscountBanner 
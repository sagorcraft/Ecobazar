import React from 'react'
import Container from './layouts/Container'
import TestimonialOne from '../assets/images/testimonial-one.webp'
import TestimonialTwo from '../assets/images/testimonial-two.webp'
import TestimonialThree from '../assets/images/testimonial-three.webp'

const Testimonial = () => {
  return (
    <Container>
      <div className='my-15 '>
        <h3 className='font-pop font-semibold text-[32px] text-[#1A1A1A] mb-8'>Client Testimonials</h3>
        <div className='flex gap-6 '>
          <div className='max-w-[424px]'>
            <img src={TestimonialOne} alt="Testimonial One" />
          </div>
          <div className='max-w-[424px]' >
            <img src={TestimonialTwo} alt="Testimonial Two" />
          </div>
          <div className='max-w-[424px]'>
            <img src={TestimonialThree} alt="Testimonial Three" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Testimonial
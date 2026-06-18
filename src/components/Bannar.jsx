import React from 'react'
import Container from './layouts/Container'
import BannarOne from '../assets/images/bannarone.webp'
import BannarTwo from '../assets/images/bannartwo.webp'
import BannarThree from '../assets/images/bannarthree.webp'

const Bannar = () => {
  return (
    <Container>
      <div className='flex justify-between gap-4 py-15'>
        <img src={BannarOne} alt="Banner" />
        <img src={BannarTwo} alt="Banner" />
        <img src={BannarThree} alt="Banner" />
      </div>
    </Container>
  )
}

export default Bannar
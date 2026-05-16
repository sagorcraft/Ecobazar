import React from 'react'
import Container from '../components/layouts/Container'
import Banner from '../components/Banner/Banner'

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <div className='w-full bg-badgetwo h-[500px] text-center leading-[500px] text-9xl'>Home...</div>
      </Container>
    </>
  )
}

export default Home
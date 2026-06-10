import React from 'react'
import Container from '../components/layouts/Container'
import Banner from '../components/Banner/Banner'
import Featured from '../components/Featured'
import Productshowcase from '../components/Productshowcase'

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Productshowcase />
    </>
  )
}

export default Home
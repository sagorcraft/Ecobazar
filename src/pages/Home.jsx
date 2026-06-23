import React, { useEffect, useState } from 'react'
import Container from '../components/layouts/Container'
import Banner from '../components/Banner/Banner'
import Featured from '../components/Featured'
import ProductShowcase from '../components/ProductShowcase'
import axios from "axios"
import { categories } from '../Data/categories'
import Bannar from '../components/Bannar'
import DiscountBanner from '../components/DiscountBanner'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import CompanyName from '../components/CompanyName'

const Home = () => {
  let [proData, setProData] = useState([])

  useEffect(() => {
      async function allPro() {
        let proData = await axios.get('https://dummyjson.com/products')
        setProData(proData.data.products);
      }
      allPro()
    }, [])

  return (
    <>
      <Banner />
      <Featured />
      <ProductShowcase 
        type="category"
        title="Popular Categories" 
        allData={categories.slice(0, 12)} 
        viewAllLink="/cat"
      />
      <ProductShowcase 
        type="product"
        title="Popular Products" 
        allData={proData.slice(0, 10)} 
        viewAllLink="/product"
      />
      <Bannar />
      <ProductShowcase 
        type="hotdeal"
        title="Hot Deals" 
        allData={proData.slice(0, 15)} 
        viewAllLink="/product"
      />
      <DiscountBanner />
      <ProductShowcase 
        type="featured"
        title="Featured Products" 
        allData={proData.slice(0, 5)} 
        viewAllLink="/product"
      />
      <Blog />
      <Testimonial />
      <CompanyName />
    </>
  )
}

export default Home
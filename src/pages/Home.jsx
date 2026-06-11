import React, { useEffect, useState } from 'react'
import Container from '../components/layouts/Container'
import Banner from '../components/Banner/Banner'
import Featured from '../components/Featured'
import ProductShowcase from '../components/ProductShowcase'
import axios from "axios"

const Home = () => {
  let [proData, setProData] = useState([])
  let [catData, setCatData] = useState([])

  useEffect(() => {
      async function allPro() {
        let proData = await axios.get('https://dummyjson.com/products')
        setProData(proData.data.products.slice(0, 12));
      }
      allPro()
    }, [])


  useEffect(() => {
      async function allCat() {
        let catData = await axios.get('https://dummyjson.com/products/categories')
        setCatData(catData.data);
      }
      allCat()
    }, [])
  return (
    <>
      <Banner />
      <Featured />
      <ProductShowcase title="Popular Categories" allData={catData} />
      <ProductShowcase title="Popular Products" allData={proData} />
    </>
  )
}

export default Home
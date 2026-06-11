import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductShowcase from '../components/ProductShowcase'

const Category = () => {
  let [proData, setProData] = useState([])

  useEffect(() => {
      async function allPro() {
        let proData = await axios.get('https://dummyjson.com/products')
        setProData(proData.data.products);
      }
      allPro()
    }, [])
  return (
    <ProductShowcase allData={proData} />
  )
}

export default Category
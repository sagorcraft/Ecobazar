import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productshowcase from '../components/Productshowcase'

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
    <Productshowcase allData={proData} />
  )
}

export default Category
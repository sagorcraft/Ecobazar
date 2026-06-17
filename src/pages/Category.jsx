import React from 'react'
import ProductShowcase from '../components/ProductShowcase'
import { categories } from '../Data/categories'

const Category = () => {
  return (
    <ProductShowcase 
      title="Popular Categories"
      allData={categories}
      viewAllLink="/cat"
      type="category"
    />
  )
}

export default Category
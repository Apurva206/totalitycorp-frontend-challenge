import React from 'react'
import Slider from '../component/Slider';
import Categories from '../component/Categories';
import Product from '../component/Product';
import CategoryPage from '../pages/CategoryPage';
function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <CategoryPage />
      <Product />
    </div>
  )
}

export default Home

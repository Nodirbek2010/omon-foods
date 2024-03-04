import React from 'react'
import MainCom from '../main'
import CaruselCom from '../main/carusel'
import CategoriesClient from '../categories'
import CategoriyaCom from '../categories'
// import CaruselCom from '../main/carusel'
import ProductCom from '../products/products'

const HomeCom = () => {
  return (
    <div>
      <MainCom />
      <CategoriesClient/>
      <ProductCom/>
      <h1>salom</h1>
    </div>
  )
}

export default HomeCom
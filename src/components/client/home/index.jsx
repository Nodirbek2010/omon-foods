import React from 'react'
import MainCom from '../main'
import CaruselCom from '../main/carusel'
import CategoriesClient from '../categories'
import CategoriyaCom from '../categories'
// import CaruselCom from '../main/carusel'
import ProductCom from '../products/products'
import ArrivalCom from '../NewArrival/arrival'

const HomeCom = () => {
  return (
    <div>
      <MainCom />
      <CategoriesClient/>
      <ProductCom/>
      <ArrivalCom/>
    </div>
  )
}

export default HomeCom
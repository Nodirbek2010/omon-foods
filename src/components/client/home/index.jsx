import React from 'react'
import MainCom from '../main'
import CategoriesClient from '../categories'
import CategoriyaCom from '../categories'
import CaruselCom from '../main/carusel'
import ProductCom from '../products/products'
import ArrivalCom from '../NewArrival/arrival'
import TableCom from '../work-table/table'

const HomeCom = () => {
  return (
    <div>
      <MainCom />
      <CategoriesClient/>
      <ProductCom/>
      <ArrivalCom/>
      <TableCom/>
    </div>
  )
}

export default HomeCom
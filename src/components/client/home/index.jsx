import React from 'react'
import MainCom from '../main'
import CategoriesClient from '../categories'
import ProductCom from '../products/products'
import ArrivalCom from '../NewArrival/arrival'
import TableCom from '../work-table/table'
import BestCom from '../Best-sells/best-sell'

const HomeCom = () => {
  return (
    <div>
      <MainCom />
      <CategoriesClient/>
      <ProductCom/>
      <BestCom/>
      <ArrivalCom/>
      <TableCom/>
    </div>
  )
}

export default HomeCom
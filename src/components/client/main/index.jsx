import React from 'react'
// import CaruselCom from './carusel'
import Banner1 from "./banner"

const MainCom = () => {

  return (
    <div  className='main-com'>
      <div className='Links'>
        <ul>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Woman's Fashion</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Man's Fashion</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Electronics</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Home & Lifestyle</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Medicine</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Sports & Outdoors</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Baby's & Toys</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Groceries & Pets</a>
          </li>
          <li>
            <a className=' text-stone-900 font-medium' href="#">Health & Beauty</a>
          </li>
        </ul>
      </div>
      <div>
        <Banner1/>
      </div>
    </div>
  )
}

export default MainCom
import React from 'react'
import { CiPaperplane } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='grids'>
      <div className='names'>
        <p className=' text-white  text-2xl '>Exclusive</p>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form>
          <input type="text" id="fname" name="fname" placeholder='Enter your email...'  />
          <CiPaperplane className='tag'/>
        </form>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  )
}

export default Footer
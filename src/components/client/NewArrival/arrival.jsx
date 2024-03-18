import React from 'react'
import Features from '../../../assets/image/Frame 619.png'
import img_3 from '../../../assets/image/Frame 738.png'

const ArrivalCom = () => {
  return (
    <div>
        <img src={Features} alt="" />
        <div className='text-3xl mt-4'>
            <span>New Arrival</span>
        </div>
        <div>
            <img className='w-[570px] h-[600px]' src={img_3} alt="" />
        </div>
    </div>
  )
}

export default ArrivalCom
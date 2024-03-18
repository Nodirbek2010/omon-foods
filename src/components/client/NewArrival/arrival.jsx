import React from 'react'
import Features from '../../../assets/image/Frame 619.png'
import PS3 from '../../../assets/image/Frame 684 (1).png'
import Cap from '../../../assets/image/Frame 685.png'
import Speakers from '../../../assets/image/Frame 686.png'
import Pertfume from '../../../assets/image/Frame 687.png'


const ArrivalCom = () => {
  return (
    <div>
      <img src={Features} alt="" />
      <div className='text-3xl mt-4'>
        <span>New Arrival</span>
      </div>
      <div className='img_com'>
          <div>
             <img src={PS3} alt="" /> 
          </div>
          <div className='gap'>
              <div>
              <img src={Cap} alt="" />
              </div>
              <div className='image_2'>
                <img src={Speakers} alt="" />
                <img src={Pertfume} alt="" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default ArrivalCom
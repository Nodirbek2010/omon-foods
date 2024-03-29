import React from 'react'
import Side_img from '../../../assets/image/Side Image.png'

const Sign_upCom = () => {
  return (
    <div className=' grid grid-cols-2 '>
        <div>
          <img src={Side_img} alt="" />
        </div>
        <div className='flex  flex-col justify-center items-center gap-10'>
          <h1 className=' font-semibold text-5xl'>Create an account</h1>
          <div className=' text-2xl font-normal '>
            <p>Enter your details below</p>
          </div>
          <div className=''>
            <input className='w-[370px] h-[32px] border-none ' type="text"  placeholder='Name'/> <br/>
            <hr  className=' w-[370px]'/>
            <input className='w-[370px] h-[32px] border-none ' type="email"  placeholder='Email or Phone number'/><br/>
            <hr  className='w-[370px]'/>
            <input className='w-[370px] h-[32px] border-none ' type="password" name="" id="" placeholder='Password' />
            <hr className='w-[370px]' />
          </div>
        </div>
    </div>
  )
}

export default Sign_upCom
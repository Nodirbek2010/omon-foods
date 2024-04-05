import React from 'react'
import Side_img from '../../../assets/image/Side Image.png'
import Google from '../../../assets/image/Icon-Google.png'

const Sign_upCom = () => {
  return (
    <div className=' grid grid-cols-2 sign_com '>
      <div>
        <img src={Side_img} alt="" />
      </div>
      <div className='flex  flex-col justify-center items-center gap-10'>
        <h1 className=' font-semibold text-5xl'>Create an account</h1>
        <div className=' text-2xl font-normal '>
          <p>Enter your details below</p>
        </div>
        <div className=''>
          <div>
            <input className='w-[370px] h-[32px] border-none ' type="text" placeholder='Name' /> <br />
            <hr className=' w-[370px]' />
          </div>
          <div className=' pt-5 pb-5'>
            <input className='w-[370px] h-[32px] border-none ' type="email" placeholder='Email or Phone number' /><br />
            <hr className='w-[370px]' />
          </div>
          <div>
            <input className='w-[370px] h-[32px] border-none ' type="password" name="" id="" placeholder='Password' />
            <hr className='w-[370px]' />
          </div>
          <div>
            <div className=' pt-10'>
              <button className=' bg-red-600 flex justify-center padding'>Create Account</button>
            </div>
            <div className=' pt-5 relative'>
              <button className='padding2'>Sign up with Google</button>
              <img className=' absolute bottom-4 left-20 ' src={Google} alt="" />
            </div>
          </div>
          <div className=' flex justify-center pt-5'>
            <p>Already have account?</p>
            <div className=' pl-3'>
              <a href="">Login</a>
              <hr className='w-[40px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign_upCom
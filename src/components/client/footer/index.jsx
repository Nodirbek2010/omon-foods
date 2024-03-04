import React from 'react'
import { CiPaperplane } from "react-icons/ci";
import QrCode from "../../../assets/image/Qrcode 1.png"
import PlaymarketIcon from '../../../assets/image/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import AppStoreIcon from "../../../assets/image/download-appstore.png"
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Vector from "../../../assets/image/Vector.png"


const Footer = () => {
  return (
    <div className='grids'>
      <div className='names'>
        <p className=' text-white  text-2xl '>Exclusive</p>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form className='input'>
          <input type="text" id="fname" name="fname" placeholder='Enter your email...' />
          <CiPaperplane className='tag' />
        </form>
      </div>
      <div className='foot-names'>
        <p className=' text-white  text-2xl '>Support</p>
        <p>111 Bijoy sarani, Dhaka,
          DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className='sixth-names'>
        <p className=' text-white  text-2xl '>Account</p>
        <p>My Account</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>wishlist</p>
        <p>Shop</p>
      </div>
      <div className='seventh-name'>
        <p className=' text-white  text-2xl '>Quick Link</p>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className='eighth-name'>
        <p className=' text-white  text-2xl '>Download App</p>
        <p className=' text-gray-500'>Save $3 with App New User Only</p>
        <div className='icons'>
          <div>
            <img src={QrCode} alt="" />
          </div>
          <div>
            <img src={PlaymarketIcon} alt="" />
            <img src={AppStoreIcon} alt="" />
          </div>
        </div>
        <div className='nineth-name'>
          <RiFacebookLine className='facebook' />
          <CiTwitter className='twitter' />
          <FaInstagram className='instagram' />
          <img className='vector' src={Vector} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
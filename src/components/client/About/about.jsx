import React from 'react'
import Sideimg from '../../../assets/image/Side Image.png'
import FocusOnSelect from '../categories'
import Frame74 from '../../../assets/image/Frame 874.png'
import Frame75 from '../../../assets/image/Frame 875.png'
import Frame76 from '../../../assets/image/Frame 876.png'
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Inicon from '../../../assets/image/Icon-Linkedin.png'
import TableCom from '../work-table/table'

const AboutCom = () => {
    return (
        <div>
            <div className=' grid grid-cols-2 p-[50px]'>
                <div className=' flex flex-col justify-center gap-10'>
                    <h1 className='sizing'>Out Story</h1>
                    <p className='font_sizing'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
                        makterplace with an active presense in Bangladesh. Supported <br />
                        by wide range of tailored marketing, data and service solutions, <br />
                        Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                        millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a <br />
                        very fast. Exclusive offers a diverse assotment in categories <br />
                        ranging  from consumer.</p>
                </div>
                <div>
                    <img src={Sideimg} alt="" />
                </div>
            </div>
            <FocusOnSelect />
            <div className=' grid grid-cols-3 pt-[60px] pb-14'>
                <div>
                    <img src={Frame74} alt="" />
                    <h1 className='chairman pt-[40px] pb-2'>Tom Cruise</h1>
                    <p className='everyone'>Founder & Chairman</p>
                    <div className=' flex gap-4 pt-2'>
                        <FiTwitter className='twitter' />
                        <FaInstagram className='insta' />
                        <img src={Inicon} alt="" />
                    </div>
                </div>
                <div>
                    <img src={Frame75} alt="" />
                    <h1 className='chairman pt-[40px] pb-2'>Emma Watson</h1>
                    <p className='everyone'>Managing Director</p>
                    <div className=' flex gap-4 pt-2'>
                        <FiTwitter className='twitter' />
                        <FaInstagram className='insta' />
                        <img src={Inicon} alt="" />
                    </div>
                </div>
                <div>
                    <img src={Frame76} alt="" />
                    <h1 className='chairman pt-[40px] pb-2'>Will Smith</h1>
                    <p className='everyone'>Product Designer</p>
                    <div className=' flex gap-4 pt-2'>
                        <FiTwitter className='twitter' />
                        <FaInstagram className='insta' />
                        <img src={Inicon} alt="" />
                    </div>
                </div>
            </div>
            <TableCom/>
        </div>
    )
}

export default AboutCom
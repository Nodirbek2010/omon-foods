import React from 'react'
import Service from '../../../assets/image/Services.png'
import Service1 from '../../../assets/image/Services (1).png'
import Service2 from '../../../assets/image/Services (2).png'

const TableCom = () => {
    return (
        <div className='work-com'>
            <div>
                <div className='flex justify-center'>
                    <img src={Service} alt="" />
                </div>
                <div className=' flex justify-center'>
                    <p className=' font-bold '>FREE AND FAST DELIVERY</p>
                </div>
                    <span>Free delivery for all orders over $140</span>
            </div>
            <div>
                <div className=' flex justify-center'>
                <img src={Service1} alt="" />
                </div>
                <div className=' flex justify-center'>
                    <p className=' font-bold '>24/7 CUSTOMER SERVICE</p>
                </div>
                    <span>Friendly 24/7 customer support</span>
            </div>
            <div>
                <div className=' flex justify-center'>
                <img src={Service2} alt="" />
                </div>
                <div className=' flex justify-center'>
                    <p className=' font-bold'>MONEY BACK GUARANTEE</p>
                </div>
                    <span>We reurn money within 30 days</span>
            </div>
        </div>
    )
}

export default TableCom
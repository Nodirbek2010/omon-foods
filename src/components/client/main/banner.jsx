import React from 'react';
import { Carousel } from 'antd';
import { useGetBannersQuery } from "../../../redux/Slice/banner/slice"

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => {
  const { data: BannersData, isLoading } = useGetBannersQuery();

  

  return (
    <Carousel autoplay>
      {BannersData?.map((value) => {
        console.log(value,'value');
      return(
        <div className='bannrimg'>
        <img className=" bannerimg w-full" src={value?.image} alt="" />
      </div>
      )     
})}
    </Carousel>
  );
};

export default App;

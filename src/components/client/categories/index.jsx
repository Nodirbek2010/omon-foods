import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetCatigoriesQuery } from "../../../redux/Slice/catigories/slice";


function FocusOnSelect() {
  const { data: catigoriesData, isLoading } = useGetCatigoriesQuery()
  
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  };
  return (
    <div className="slider-container">
      <div>Click on any slide to select and make it current slide</div>
      <Slider className="flex gap-2" {...settings}>
 {catigoriesData?.map((value) =>{
  console.log(value,'value');
  return  ( 
  <div className="flex flex-col gap-2 hover:bg-red-500 h-[200px]">
     <img className="w-full h-full" src={value?.image} alt="" />
     <h1>{value.title}</h1>
  </div>
    
  )
 })}
      </Slider>
    </div>
  );
}

export default FocusOnSelect;

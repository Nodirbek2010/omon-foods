import React, { useState } from 'react';
import { useGetProductsQuery } from '../../../redux/Slice/Products/slice';
import { CiHeart } from "react-icons/ci";

const ProductCom = () => {
    const { data } = useGetProductsQuery();
    const [likedProducts, setLikedProducts] = useState([]);

    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    console.log(data, '');

    return (
        <div className='grid grid-cols-4 gap-5 m-auto justify-center'>
            {data?.map((value, index) => (
                <div key={index}>
                    <CiHeart
                        onClick={() => toggleLike(value.id)}
                        className={` ${likedProducts.includes(value.id) ? 'bg-red-500 rounded-3xl' : ""} w-[40px] h-[30px] mt-3 ml-5 `}
                    />
                    <img className='cursor-copy object-contain w-[270px] h-[250px] p-3' src={value.image} alt="" />
                    <h1>{value?.title}</h1>
                    {value?.price} so'm
                </div>
            ))}
        </div>
    );
}

export default ProductCom;

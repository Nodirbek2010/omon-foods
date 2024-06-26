import React, { useState } from 'react';
import { useGetProductsQuery } from '../../../redux/Slice/Products/slice';
import { CiHeart } from "react-icons/ci";
import { toast } from 'react-toastify';
import { useCreateBasketMutation } from '../../../redux/Slice/basket';
import { Link } from 'react-router-dom';

const ProductCom = () => {
    const { data } = useGetProductsQuery();
    const [createBasket] = useCreateBasketMutation()
    const [likedProducts, setLikedProducts] = useState([]);
    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };
    // 

    const addData = async (id) => {
        console.log(id, 'id');
        const formData = new FormData();
        formData.append("amount", 1);
        formData.append("product", id);
        try {
            await createBasket(formData).unwrap();
            toast.success(`Maxsulod  qushildi`);
        } catch (error) {
            toast.error(`Failed to add category `);
        }
    };

    return (
        <div>
            <h1 className='text-3xl pl-2 pt-8'>Products</h1>
            <div className='grid grid-cols-4 gap-5 m-auto justify-center'>
                {data?.map((value, index) => (
                    <div className=' relative' key={index}>
                        <CiHeart
                            onClick={() => toggleLike(value.id)}
                            className={` ${likedProducts.includes(value.id) ? 'bg-red-500 rounded-3xl' : ""} absolute left-64 top-3 w-[40px] h-[30px] mt-3 ml-5 `}
                        />
                        <Link to ={`/product/${value?.id}`}>
                        
                        <img className='cursor-copy object-contain w-full p-3 h-[450px] ' src={value.image} alt="" />
                        </Link>
                        <button onClick={() => addData(value.id)} className=' hover:bg-black  absolute top-96 bg-white text-white w-[320px] h-[56px] ml-3'>Add to card</button>
                        <h1>{value?.title}</h1>
                        {value?.price} so'm
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCom;

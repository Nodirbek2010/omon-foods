import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useDeleteBasketMutation,
  useGetBasketQuery,
  useIncrementMutation,
} from "../../../redux/Slice/basket";



const Basket = () => {
  const [key, setKey] = useState(0);
  const { data: dataBasket, isSuccess, refetch: refetchData } = useGetBasketQuery();
  const [deleteBasket] = useDeleteBasketMutation();
  const [Increment] = useIncrementMutation();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [user, setUser] = useState()
  const [selectTotal, setSelectTotal] = useState(1);
  const [totalAmount, settotalAmount] = useState(0);
  const del = async (id) => {
    try {
      await deleteBasket({ id });
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  const token = localStorage.getItem("user");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    if (isAllSelected !== undefined) {
      axios.get(`basket/change_all_status/?status=${isAllSelected}`, { headers })
        .then(() => {
          refetchData();
        })
        .catch((error) => {
          console.error("Error updating status:", error);
        });
    }
  }, [isAllSelected]);

  const handleSelectAmount = async (e, value) => {
    const newAmount = e?.target?.value;
    setSelectTotal(newAmount);

    const formData = new FormData();
    formData.append("amount", newAmount);
    formData.append("id", value.id);
    try {
      await Increment(formData).unwrap();
    } catch (error) {
    }
  };

  const increment = async (value) => {
    const formData = new FormData();
    formData.append("amount", value?.amount + 1);
    formData.append("id", value.id);

    try {
      await Increment(formData).unwrap();
    } catch (error) {
      console.error("Error incrementing item:", error);
    }
  };

  const decrement = async (value) => {
    const formData = new FormData();
    formData.append("amount", value.amount - 1);
    formData.append("id", value.id);
    try {
      await Increment(formData).unwrap();
    } catch (error) {
      console.error("Error decrementing item:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Array.isArray(dataBasket?.items)) {
        const total = dataBasket?.items?.reduce(
          (a, b) => a + (b?.total_price?.discount_price || 0) * b.amount,
          0
        );
        settotalAmount(total);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [dataBasket]);

  const selectAll = () => {
    const allUserIds = dataBasket?.items?.map((user) => user?.id);
    setIsAllSelected(!isAllSelected);
    setSelectedUsers(isAllSelected ? [] : allUserIds);
  };

  useEffect(() => {
    selectAll();
  }, [isSuccess]);
  return (
    <div className="container">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white-50 dark:bg-white-700 dark:text-gray-400 border-[2px] border-[solid]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Maxsulot
              </th>
              <th scope="col" className="px-6 py-3">
                Narxi
              </th>
              <th scope="col" className="px-6 py-3">
                Miqdori
              </th>
              <th scope="col" className="px-6 py-3">
                Umumiy narxi
              </th>
            </tr>

          </thead>



          {dataBasket?.items?.map((value) => (
            <div className="w-[100%]">
              <tbody>
                <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-gray flex">
                    <div className="flex items-center gap-[50px]">
                      <div className="flex  gap-[20px] items-center w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                        <img src={value?.product?.image} alt="" className="object-contain w-full h-full" />
                      </div>
                      <div>
                        <h1 className="w-[300px] text-center" >
                          {value?.product?.title}
                        </h1>
                        <p className="mt-1 text-base text-gray-700 w-[300px] text-center">
                          {value.product?.description?.length > 100
                            ? `${value?.product?.description.substring(0, 70)}...`
                            : value?.product?.description}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    <span className=" ">
                      {value?.product?.price?.toLocaleString("uz-UZ")} so'm
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-[10px]">
                      <button onClick={() => decrement(value)} className="text-[30px]">
                        -
                      </button>
                      <h1 className="text-[20px]">{value?.amount}</h1>
                      <button onClick={() => increment(value)} className="text-[25px]">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {(value?.product?.price * value?.amount)?.toLocaleString("uz-UZ")} so'm
                  </td>
                </tr>
              </tbody>
            </div>
          ))}
        </table>
      </div>
      <div>
        
        <NavLink to={"/"} >
          <button className='returnshop px-[122px] py-[24px] border-[1px] border-[solid] border-[#808080] mt-[30px] rounded-[10px]'>Do'konga qaytish</button>
        </NavLink>
      </div>
      <div className="flex  justify-between h-[400px] mt-[50px]">
        <div >
        </div>
        <div className=" w-[470px] h-[324px] border-[1px] border-[solid] border-[#000] rounded-[4px] p-[48px] flex flex-col justify-evenly gap-">
          <h1 className="text-[30px] font-[60px]  weight">Savat:</h1>

          <div className="flex justify-between">
            <h3>
              Maxsulotlar narxi:
            </h3>
            {dataBasket?.total_price.price?.toLocaleString("uz-UZ")} so'm
          </div>
          <div className="border-[1px] border-solid border-[#808080]  "></div>
          <div className=" flex justify-between">
            <h3>
              Yetakazib berish:
            </h3>
            <h3>Tekin</h3>
          </div>
          <div className="border-[1px] border-solid border-[#808080] "></div>

          <div className=" flex justify-between">
            <h3>
              Umumiy:
            </h3>
            <h3>
              {dataBasket?.total_price.price?.toLocaleString("uz-UZ")} so'm
            </h3>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Basket;

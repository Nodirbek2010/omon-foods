import { useEffect } from "react"
import url from "../../../api"
import { useState } from "react"
import axios from "axios"



const Products = () => {

    const [data, setData] = useState([])

    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    useEffect(() => {
        axios(`https://omofood.pythonanywhere.com/api/v1/products/`, { headers })
            .then((res) => setData(res?.data))
            .catch((error) => {
                // Handle error, e.g., log it or display an error message.
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <>
            <div className="flex justify-between p-10 10">
                <input className="border-solid border-2 border-slate-600 p-2 3 rounded-md ..." type="text" placeholder="Izlash......." />
                <button className="w-40 h-10 bg-blue-500 rounded-md">+Maxsulot</button>
            </div>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Maxsulot   
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Maxsulot narxi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Maxsulot yaratilgan vaqti
                            </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                   {data?.map((value) =>{

                    return(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th className="flex" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-[50px] h-[50px] rounded-lg " src={value?.image} alt="" />
                           {value?.title}
                        </th>
                        <td class="px-6 py-4">
                            {value?.price }<h1>so'm </h1>
                        </td>
                        <td class="px-6 py-4">
                           {value?.created_date}
                        </td>
                   
                    </tr>

                    )
                   })}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Products
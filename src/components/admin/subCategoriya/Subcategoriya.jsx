import React, { useEffect, useState } from 'react'
import '../../../App.css'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
const Products = () => {

    const [data, setData] = useState([])

    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    useEffect(() => {
        axios(`https://omofood.pythonanywhere.com/api/v1//sub-categories/`, { headers })
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
                                SUBKATEGORIYA RASMI
                            </th>
                            <th scope="col" class="px-6 py-3">
                                SUBKATEGORIYA NOMI
                            </th>
                            <th scope="col" class="px-6 py-3">
                                KATTA KATEGORY NOMI
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((value) => {

                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img src={value?.thumbnail_image} alt="" />
                                        
                                    </th>
                                    <td class="px-6 py-4">
                                        {value?.category?.title
                                        }
                                    </td>
                                    <td class="flex px-6 py-4">
                                    <FaEdit />
                                    <MdDeleteForever />
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
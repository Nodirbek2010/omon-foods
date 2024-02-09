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
            .then((res) => setData(res))
    }, [])

    console.log(data);
    return (
        <>
            <div className="flex  justify-between  p-10 10">
                <input className="border-solid border-2 border-slate-600 p-2 3 rounded-md ..." type="text" placeholder="Izlash......." />
                <button className="bg-blue-500  w-40 h-10 rounded-md">+Maxsulot</button>
            </div>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Products
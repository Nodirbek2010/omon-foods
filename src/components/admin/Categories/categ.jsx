import { useEffect, useState } from "react";
import { useGetCatigoriesQuery } from "../../../redux/Slice/catigories/slice";
import AddUser from "./addUser";
import DeleteFun from "./delete";
import UpdateCom from "./update";

const Categories = () => {
    const { data: catigoriesData, isLoading } = useGetCatigoriesQuery()
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        let res = catigoriesData?.filter((value) => value?.title.toUpperCase().includes(search.toUpperCase()))
        setFilter(res)
    }, [catigoriesData, search])

    return (
        <div >
            <div className="flex justify-between items-center">   <input className="w-[250px] border-solid border-2  p-2 3 rounded-md ..." type="text" placeholder="Izlash..."
                onChange={(e) => setSearch(e.target.value)}/>
                <AddUser />
            </div>
            <div class=" overflow-x-auto h-[75vh]">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Maxsulot turi rasmi
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Maxsulot turi nomi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? <h1>Loading...</h1>
                    
                                :
                                filter?.map((value) => {
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <img className="w-[50px] h-[50px] rounded-lg" src={value?.image} alt="" />
                                            </th>
                                            <td class="px-6 py-4">
                                                {value?.title}
                                            </td>
                                            <td className="flex gap-2 items-center">
                                                <UpdateCom user={value} />
                                                <DeleteFun ID={value.id} />
                                            </td>
                                        </tr>

                                    )
                                })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Categories
import { useGetCatigoriesQuery } from "../../../redux/Slice/catigories/slice";
import AddUser from "./addUser";

const Categories = () => {
    const { data: catigoriesData, isLoading } = useGetCatigoriesQuery()

    return (
        <>
            <AddUser />
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
                                //  <  BeatLoader       extraClass="col-span-12 flex justify-center" color="#36d7b7"/>
                                :
                                catigoriesData?.map((value) => {
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <img className="w-[50px] h-[50px] rounded-lg" src={value?.image} alt="" />
                                            </th>
                                            <td class="px-6 py-4">
                                                {value?.title}
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
export default Categories
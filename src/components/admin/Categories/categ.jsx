import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCreateFamousMutation } from "../redux/Slice/slice";



const Categories = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [createFamous, { isLoading }] = useCreateFamousMutation();
    const [input, setInput] = useState({
        thumbnail_image: "",
        title: "",
        slug: "",
        image: "",
    })

    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    useEffect(() => {
        axios(`https://omofood.pythonanywhere.com/api/v1/categories/`, { headers })
            .then((res) => setData(res?.data))
            .catch((error) => {
                // Handle error, e.g., log it or display an error message.
                console.error('Error fetching data:', error);
            });
    }, [])
    const dataSubmit = async () => {
        const formData = new FormData();
        formData.append('thumbnail_image', input.thumbnail_image);
        formData.append('title', input.title);
        formData.append('slug', input.slug);
        formData.append('image', input.image);
        try {
            await createFamous(formData).unwrap();
            toast.success(`${input.title}`);

            setInput(false);
        } catch (error) {
            toast.error(` ${input.title} qo'shildi `);
        }
    }
    return (
        <>
            <div className="flex justify-between p-10 10 relative">
                <input className="w-[250px] border-solid border-2  p-2 3 rounded-md ..." type="text" placeholder="Izlash..." />
                <button onClick={() => setModal(true)} class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FaPlus />
                    <span>Mahsulot</span>
                </button>
            </div>
            {modal &&
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class=" w-[500px] absolute top-0 left-0 bottom-0 right-0 overflow-y-auto overflow-x-hidden  justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class=" p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex items-center justify-end cursor-pointer p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <span onClick={() => setModal(false)} className="p-1">
                                    X
                                </span>
                            </div>
                            <div class="p-4 grid gap-3 grid-cols-2 md:p-5">
                                <div>
                                    <h3>Mahsulot turi nomi:</h3>
                                    <input onChange={(e) => setInput({ ...input, title: e.target.value })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <input onChange={(e) => setInput({ ...input, image: e.target.value })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <button onClick={() => dataSubmit()} type="submit" class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saqlash</button>
                                <button onClick={() => dataSubmit()} type="submit" class=" w-full text-white bg-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Orqaga</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div class="relative overflow-x-auto">
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
                        {data?.map((value) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-[50px] h-[50px] rounded-lg"  src={value?.image} alt="" />  
                                    </th>
                                    <td class="px-6 py-4">
                                        {value?.title}
                                    </td>
                                    {/* <td class="px-6 py-4">
                                        {value?.image}
                                    </td> */}

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
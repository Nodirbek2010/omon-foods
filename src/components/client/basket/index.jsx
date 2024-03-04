// import { useEffect, useMemo, useState } from "react"
// import url from "../../api/api"
// import { toast } from "react-toastify"
// import Update from "./update.jsx"
// import React from 'react'
// import Navbar from '../navbar'

// const Basket = () => {
//     // const [data, setData] = useState([])
//     // const [status, setStatus] = useState()
//     // const [search, setSearch] = useState()
//     const [modal, setModal] = useState(false)
//     // const [input, setInput] = useState({
//     //     first_name: "",
//     //     last_name: "",
//     //     age: "",
//     //     gender: "",
//     //     address: "",
//     //     university_name: "",
//     //     semester: "",
//     //     gpa: "",
//     //     nationality: "",
//     //     hobby: ""
//     // })
//     // useEffect(() => {
//     //     fetch(`${url}custom-users/`).then((res) => res.json())
//     //         .then((res) => setData(res))
//     // }, [])

//     // console.log(status, 'status');
//     // console.log(status, 'status');
//     // useEffect(() => {
//     //     setTimeout(() => {3
//     //         if (status) {
//     //             fetch(`${url}custom-users/`).then((res) => res.json())
//     //                 .then((res) => setData(res))
//     //         }
//     //     }, 500);
//     // }, [status])
//     // console.log(data, 'data');

//     // const DeleteFun = (id) => {
//     //     console.log(id, 'id');
//     //     fetch(`${url}custom-users/${id} `, {
//     //         method: 'DELETE',
//     //     }).then((res) => {
//     //         console.log(res.ok, 'res');

//     //         if (res.status) {
//     //             setTimeout(() => {
//     //                 setStatus(true)
//     //             }, 100);
//     //         }
//     //     })
//     // }
//     // const Searching = useMemo(() => {
//     //     if (search) {
//     //         return data?.filter(
//     //             (value) =>
//     //                 value?.first_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
//     //                 value?.last_name?.toLowerCase()?.includes(search?.toLowerCase()) ||
//     //                 value?.address?.toLowerCase()?.includes(search?.toLowerCase())
//     //         );
//     //     } else {
//     //         return data;
//     //     }
//     // }, [data, search]);
//     // const addUser = () => {
//     //     const formData = new FormData();
//     //     formData.append('first_name', input.first_name);
//     //     formData.append('last_name', input.last_name);
//     //     formData.append('age', input.age);
//     //     formData.append('gender', input.gender);
//     //     formData.append('address', input.address);
//     //     formData.append('university_name', input.university_name);
//     //     formData.append(' ', input.semester);
//     //     formData.append('gpa', input.gpa);
//     //     formData.append('nationality', input.nationality);
//     //     formData.append('hobby', input.hobby);
//     //     fetch(`${url}custom-users/`, {
//     //         method: 'POST',
//     //         body: formData
//     //     })
//     //         .then((res) => {
//     //             if (res.status == 201) {
//     //                 setModal(false)
//     //                 toast.success(`${input.last_name} qo'shilmoqda`)
//     //             }
//     //         })
//     // }
//     return (
//         <div className="px-[135px] py-0">
//             <h4 className='flex text-gray-400 '>
//                 Home/
//                 <h4 className='text-black'>Cart</h4>
//             </h4>
//             <div className="basket">


//                 <div class="relative overflow-x-auto p-2">
//                     <div className="flex justify-between">
//                         <div>
//                             <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name and Surname" required />
//                         </div>
//                         <button onClick={() => setModal(true)} type="button" class="text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Adding</button>
//                     </div>
//                     {modal &&
//                         <div id="authentication-modal" tabindex="-1" aria-hidden="true" class=" w-[500px] absolute top-0 left-0 bottom-0 right-0 overflow-y-auto overflow-x-hidden  justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
//                             <div class=" p-4 w-full max-w-md max-h-full">
//                                 <div class="relative bg-white rounded-lg shadow dark:bg-white-700">
//                                     <div class="flex items-center justify-end cursor-pointer p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                                         <span onClick={() => setModal(false)} className="p-1">
//                                             X
//                                         </span>
//                                     </div>
//                                     <div class="p-4 grid gap-3 grid-cols-2 md:p-5">
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, first_name: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="first_name" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, last_name: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="last_name" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, age: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="age" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, gender: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="gender" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, address: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="address" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, university_name: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="university_name" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, semester: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="semester" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, gpa: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="gpa" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, nationality: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="nationality" required />
//                                         </div>
//                                         <div>
//                                             <input onChange={(e) => setInput({ ...input, hobby: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="hobby" required />
//                                         </div>
//                                         <div></div>
//                                         <button onClick={() => addUser()} type="submit" class=" w-full text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     }
//                     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                         <thead class="text-xs text-gray-700 uppercase bg-white-50 dark:bg-white-700 dark:text-gray-400">
//                             <tr>
//                                 <th scope="col" class="px-6 py-3">
//                                     Ismi
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     Familyasi
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     Yoshi
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     Manzili
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Searching?.map((value) => {
//                                 return (
//                                     <tr class="bg-white border-b dark:bg-white-800 dark:border-gray-700">
//                                         <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">
//                                             {value?.first_name}
//                                         </th>
//                                         <td class="px-6 py-4">
//                                             {value?.last_name}
//                                         </td>
//                                         <td class="px-6 py-4">
//                                             {value?.age}
//                                         </td>
//                                         <td class="px-6 py-4">
//                                             {value?.address}
//                                         </td>
//                                         <td class="flex gap-4">
//                                             <button onClick={() => DeleteFun(value.id)} type="button" class="focus:outline-none text-gray bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
//                                             <Update item={value} />

//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div >


//             </div>
//         </div>
//     )
// }

// export default Basket
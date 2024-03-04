// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import url from '../../../api';
// const Update = ({ item }) => {
//     console.log(item, 'item');
//     const [modal, setModal] = useState(false)
//     const [input, setInput] = useState(item)
//     const addUser = () => {
//         const formData = new FormData();
//         formData.append('first_name', input.first_name);
//         formData.append('last_name', input.last_name);
//         formData.append('age', input.age);
//         formData.append('gender', input.gender);
//         formData.append('address', input.address);
//         formData.append('university_name', input.university_name);
//         formData.append('semester', input.semester);
//         formData.append('gpa', input.gpa);
//         formData.append('nationality', input.nationality);
//         formData.append('hobby', input.hobby);
//         fetch(`${url}custom-users/${item?.id}/`, {
//             method: 'PUT',
//             body: formData
//         })
//             .then((res) => {
//                 if (res.status == 200) {
//                     setModal(false)
//                     toast.success(`${input.first_name} o'zgartirildi`)
//                 }
//             })
//     }
//     return (
//         <div>
//             <button onClick={() => setModal(true)} type="button" class="text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
//             {
//                 modal &&
//                 <div id="authentication-modal" tabindex="-1" aria-hidden="true" class=" w-[500px] absolute top-0 left-0 bottom-0 right-0 overflow-y-auto overflow-x-hidden  justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
//                     <div class=" p-4 w-full max-w-md max-h-full">
//                         <div class="relative bg-white rounded-lg shadow dark:bg-white-700">
//                             <div class="flex items-center justify-end cursor-pointer p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                                 <span onClick={() => setModal(false)} className="p-1">
//                                     X
//                                 </span>
//                             </div>
//                             <div class="p-4 grid gap-3 grid-cols-2 md:p-5">
//                                 <div>
//                                     <input value={input.first_name} onChange={(e) => setInput({ ...input, first_name: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="first_name" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.last_name} onChange={(e) => setInput({ ...input, last_name: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="last_name" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.age} onChange={(e) => setInput({ ...input, age: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="age" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.gender} onChange={(e) => setInput({ ...input, gender: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="gender" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.address} onChange={(e) => setInput({ ...input, address: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="address" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.university_name} onChange={(e) => setInput({ ...input, university_name: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="university_name" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.semester} onChange={(e) => setInput({ ...input, semester: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="semester" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.gpa} onChange={(e) => setInput({ ...input, gpa: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="gpa" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.nationality} onChange={(e) => setInput({ ...input, nationality: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="nationality" required />
//                                 </div>
//                                 <div>
//                                     <input value={input.hobby} onChange={(e) => setInput({ ...input, hobby: e.target.value })} type="email" name="email" id="email" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray" placeholder="hobby" required />
//                                 </div>
//                                 <div></div>
//                                 <button onClick={() => addUser()} type="submit" class=" w-full text-gray bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </div >
//     )
// }

// export default Update
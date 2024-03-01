import React, { useState } from 'react'
import Modal from '../../generic/modal'
import ImageUpload from '../../generic/imgUploadFile'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import {  useUpdateCatigoriesMutation } from '../../../redux/Slice/catigories/slice'
import { toast } from 'react-toastify'
import { CiEdit } from "react-icons/ci";
const UpdateCom = ({user}) => {
    const [inputValue, setInputValue] = useState(user)
    const [modal, setModal] = useState(false)
    const [updateCatigories, {isLoading}] = useUpdateCatigoriesMutation()

    const addData = async () => {
        const formData = new FormData();
        formData.append('title', inputValue.title);
        formData.append('image', inputValue.img);
        formData.append('id', inputValue.id);

   
        try {
          await updateCatigories(formData).unwrap();
          toast.success(`Mahsulod ${inputValue.title} o'zgartirildi`);
          setModal(false);
        } catch (error) {
            if (error.status == 400) {
                toast.error(`Malumot o'zgartirishda xatolik !!!`);
            }
        }
      };
    return (
        <div>
            <div className="relative flex justify-between p-10 10">
                <button title='TAHRIRLASH' onClick={() => setModal(true)} className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <CiEdit />
                </button>
            </div>
            {
                modal &&
                <Modal loader={isLoading} closeModal={() => setModal(false)} addFunc={() => addData()}>

                    <div className="p-4  gap-3  md:p-5">
                        <div>
                            <h3>Edit</h3>
                            <input value={inputValue.title} onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <ImageUpload
                                title={'Image'}
                                iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                                iconTitle={'Upload Image'}
                                fileType={'PNG, JPG, JPEG up to 5MB'}
                                LabelFor={'img'}
                                setInputValue={setInputValue}
                                inputValue={inputValue}

                            />
                        </div>

                    </div>
                </Modal>

            }
        </div>
    )
}

export default UpdateCom
import React, { useState } from 'react'
import Modal from '../../generic/modal'
import { FaPlus } from 'react-icons/fa6'
import ImageUpload from '../../generic/imgUploadFile'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { useCreateCatigoriesMutation } from '../../../redux/Slice/catigories/slice'
import { toast } from 'react-toastify'

const AddUser = () => {
    const [inputValue, setInputValue] = useState({
        title: "",
    })
    const [modal, setModal] = useState(false)
    const [createCatigories, {isLoading}] = useCreateCatigoriesMutation()

    const addData = async () => {
        const formData = new FormData();
        formData.append('title', inputValue.title);
        formData.append('image', inputValue.img);
    
        try {
          await createCatigories(formData).unwrap();
          toast.success(`Mahsulod turi  ${inputValue.title} qushildi`);
          setInputValue({
            name: '',
            img: '',
          });
          setModal(false);
        } catch (error) {
            if (error.status == 400) {
                toast.error(`Malumot yuborishda xatolik !!!`);
            }
        }
      };
    return (
        <div>
            <div className="flex justify-between p-10 10 relative">
                <button onClick={() => setModal(true)} class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FaPlus />
                    <span>Mahsulot</span>
                </button>
            </div>
            {
                modal &&
                <Modal loader={isLoading} closeModal={() => setModal(false)} addFunc={() => addData()}>

                    <div class="p-4  gap-3  md:p-5">
                        <div>
                            <h3>Mahsulot turi nomi:</h3>
                            <input onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
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

export default AddUser
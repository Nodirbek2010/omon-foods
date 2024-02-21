import React, { useState } from 'react'
import Modal from '../../generic/modal'
import { FaPlus } from 'react-icons/fa6'
import ImageUpload from '../../generic/imgUploadFile'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { useCreateProductsMutation } from '../../../redux/Slice/Products/slice'
import { toast } from 'react-toastify'

const AdddUser = () => {
    const [inputValue, setInputValue] = useState({
        title: "",
    })
    const [modal, setModal] = useState(false)
    const [createProducts, { isLoading }] = useCreateProductsMutation()

    const addData = async () => {
        const formData = new FormData();
        formData.append('title', inputValue.title);
        formData.append('image', inputValue.img);

        try {
            await createProducts(formData).unwrap();
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
                            <h3>Mahsulot  nomi:</h3>
                            <input onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <h3>Mahsulot  narxi:</h3>
                            <input onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })} type="number" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <h3>Mahsulot  miqdori</h3>
                            <input onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })} type="number" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            {/* <label for="country">Country</label><span style="color: red !important; display: inline; float: none;">*</span>       */}
        
        {/* <select id="country" name="country" class="form-control">
            <option value="kg">Afghanistan</option>
            <option value="dona">dona</option>
            <option value="litr">litr</option>
            <option value="metr">metr</option>
            <option value="gramm">gramm</option>
      
        </select> */}
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

export default AdddUser
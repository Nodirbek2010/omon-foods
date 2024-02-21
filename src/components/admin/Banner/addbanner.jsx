import React, { useState } from 'react';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useCreateBannersMutation } from '../../../redux/Slice/banner/slice';
import Modal from '../../generic/modal';
import ImageUpload from '../../generic/imgUploadFile';

const AddBanners = ({ object }) => {
    const [inputValue, setInputValue] = useState(object);
    // state
    const [skip, setOpen] = useState(false);

    // redux
    const [createProduct, { isLoading: isCreating }] = useCreateBannersMutation();
    // fuction
    const onClose = () => {
        setOpen(false);
    };


    // post data
    const addData = async () => {
        const formData = new FormData();
        formData.append('title', inputValue.title);
        formData.append('image', inputValue.img);
        formData.append('description', inputValue.description);
        formData.append('price', inputValue.price);
        formData.append('amount', inputValue.amount);
        formData.append('amount_measure', inputValue.amount_measure);
        formData.append('category', inputValue?.category);
        try {
            await createProduct(formData).unwrap();
            setInputValue({
                title: '',
                img: '',
            });
            setOpen(false);
        } catch (error) {
            toast.error(`Mahsulotlar turlari qushilmadi${inputValue.title}`);
        }
    };

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className=" inline-flex bg-blue-600 items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                +
                Banner
            </button>
            {skip && (
                <Modal loader={isCreating} closeModal={onClose} addFunc={addData}>
                    <div className='grid  gap-3'>

                        <div className='flex flex-col '>
                            <div className='flex flex-col text-center'>

                                <div className=''>
                                    <ImageUpload
                                        title={'Image'}
                                        iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                                        iconTitle={'Upload Image'}
                                        fileType={'PNG, JPG, JPEG up to 5MB'}
                                        LabelFor={'img'}
                                        setInputValue={setInputValue}
                                        inputValue={inputValue}
                                    />
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            )}
        </div>
    );
};

export default AddBanners;
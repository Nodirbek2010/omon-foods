import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateNoteMutation } from '../../../redux/Slice/note/index.js';
import { useGetProductQuery } from '../../../redux/Slice/basket';
import Modal from '../../generic/modal';

const AddNote = ({ object }) => {
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(object);
  console.log(inputValue);
  const [createProduct, { isLoading: isCreating }] = useCreateNoteMutation();
  const { data: pronote, isLoading, refetch } = useGetProductQuery({ skip });



  const onClose = () => {
    setOpen(false);
  };


  const addData = async () => {
    const formData = new FormData();

    formData.append('comment', inputValue.description);
    formData.append('price', inputValue.price);
    formData.append('amount', inputValue.amount);
    formData.append('product', inputValue.product);

    try {
      await createProduct(formData).unwrap();
      toast.success(`Yon Daftarcha ${inputValue.title} added successfully`);
      setInputValue({
        title: '',
        img: '',
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Failed to add note ${inputValue.title}`);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        +
        Maxsulot
      </button>
      {skip && (
        <Modal loader={isCreating} closeModal={onClose} addFunc={addData}>
          <div className='grid grid-cols-2 gap-3 '>

            <div className='flex flex-col gap-2'>

              <div>
                <label htmlFor="Maxsulot Name:" className='text-black'>Maxsulot Narxi:</label>
                <input
                  autoComplete='off'
                  type="number"
                  id="table-search-users"
                  className=" block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-whitr-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:">Maxsulot Miqdori:</label>
                <input
                  autoComplete='off'
                  type="number"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-text dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, amount: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Comment....</label>
                <textarea
                  id="message"
                  rows="4"
                  autoComplete='off'
                  onChange={(e) => setInputValue({ ...inputValue, description: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                ></textarea>
              </div>

            </div>
            <div className='flex flex-col '>
              <div className='flex flex-col'>
                <label htmlFor="">Bor maxsulot Tanlang</label>
                <select
                  onChange={(e) => setInputValue({ ...inputValue, product: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Hech Biri">Hech Biri</option>
                  {pronote?.map((vlue) => {
                    return (
                      <option key={vlue?.id} value={vlue?.id}>{vlue?.title}</option>
                    )
                  })}
                </select>

              </div>
            </div>
          </div>

        </Modal>
      )}
    </div>
  );
};

export default AddNote;

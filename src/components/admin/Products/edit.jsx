import React, { useState } from "react";
import Modal from "../../generic/modal";
import ImageUpload from "../../generic/imgUploadFile";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useUpdateProductsMutation } from "../../../redux/Slice/Products/slice";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { useGetCatigoriesQuery } from "../../../redux/Slice/catigories/slice";

const UpdateCom = ({ user }) => {
  const [inputValue, setInputValue] = useState(user);
  const [modal, setModal] = useState(false);
  const [updateProducts, { isLoading }] = useUpdateProductsMutation();


  console.log(inputValue.category, "category");
  const { data } = useGetCatigoriesQuery();

  const addData = async () => {
    const formData = new FormData();
    formData.append("title", inputValue.title);
    formData.append("description", inputValue.description);
    formData.append("price", inputValue.price);
    formData.append("amount", inputValue.amount);
    formData.append("amount_measure", inputValue.amount_measure);
    formData.append("category", inputValue.category);
    formData.append("subcategory", inputValue.subcategory);
    formData.append("id", inputValue.id);


    try {
      await updateProducts(formData).unwrap();
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
        <button
          title="TAHRIRLASH"
          onClick={() => setModal(true)}
          class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <CiEdit />
        </button>
      </div>
      {modal && (
        <Modal 
          loader={isLoading}
          closeModal={() => setModal(false)}
          addFunc={() => addData()}
        >
          <div class="gap-10  grid grid-cols-2  p-4 h-90   w-96 gap-2  ">
            <div>
              <h3> Mahsulot nomi:</h3>
              <input
                onChange={(e) =>
                  setInputValue({ ...inputValue, title: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <h3  className="p-1">Mahsulot narxi:</h3>
              <input
                onChange={(e) =>
                  setInputValue({ ...inputValue, price: e.target.value })
                }
                type="number"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <h3  className="p-1">Mahsulot miqdori</h3>
              <input
                onChange={(e) =>
                  setInputValue({ ...inputValue, amount: e.target.value })
                }
                type="number"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <div>
              <h3 className="p-1"> Maxsulot xaqida...</h3>
          <textarea  class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name="" id="" cols="1" rows="2"></textarea>
              </div>
              <h3 className="p-1"> Maxsulot olchovi</h3>
     <select  onChange={(e) =>
                  setInputValue({ ...inputValue, amount_measure: e.target.value })
                } name="idk" id="idk" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
        <option value="">Hech biri</option>
        <option value="">Dona</option>
        <option value="">Kg</option>
        <option value="">Litr</option>
        <option value="">Metr</option>
        <option value="">Gram</option>
     </select>
            </div>
            <div>
            <h3  className="p-1">Kategoriyani tanlang</h3>
              <select
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) =>
                  setInputValue({ ...inputValue, category: e.target.value })
                }
              >
     
                {data?.map((value) => {
                  return  <option value={value.id}>{value.title}</option>;
                })}
               
              </select>
              {/* ----------------------- */}
              <h3  className="p-1">Ichki Kategoriya</h3>
              <select
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) =>
                  setInputValue({ ...inputValue, subcategory: e.target.value })
                }
              >
                <option value="">Hech biri</option>
                <option value=""> 2</option>
                <option value=""> 3</option>
              </select>
              {/* ---------------------------- */}
             
              <div>
       
              <ImageUpload
                title={"Image"}
                iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                iconTitle={"Upload Image"}
                fileType={"PNG, JPG, JPEG up to 5MB"}
                LabelFor={"img"}
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
            </div>
            </div>
           
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UpdateCom;

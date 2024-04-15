import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(false);


  console.log(data,'data');
  useEffect(() => {
    setLaoding(true);

    axios
      .get(`https://omofood.pythonanywhere.com/api/v1/products/${id}/?images=true`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res?.status === 200) {
          setData(res?.data);
          setLaoding(false);
        }
      });
  }, []);

  return (
    <div>
     {
        loading ? <h1>Malumot Yuklanmoqda</h1> : <div>
            <div className="display-grid">
            <div>
                <h1>salom</h1>
            </div>
            <div>
            <  img  src={data.image} alt="" />
            </div>
            </div>
        </div>
     }
    </div>
  );
};

export default ProductPage;

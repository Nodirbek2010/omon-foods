import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/admin/Layout';
import Products from './components/admin/Products/products';
import Subcategoriya from './components/admin/subCategoriya/Subcategoriya';
import Login from './components/admin/login';
import Categories from './components/admin/Categories/categ';
import BannerFun from './components/admin/Banner/banner';
import LayoutClient from './components/client/Layout';
import HomeCom from './components/client/home';
import NoteTable from './components/admin/note/NoteTable';
import NotFound404 from './components/client/404NotFound'; // Fixed import
import Error404 from './components/client/404page'; // Fixed import
import Basket from './components/client/basket/Basket';
import Sign_upCom from './components/client/Sign_up/sign_up';
import AboutCom from './components/client/About/about';
import  ProductPage from "./components/client/ProductsPage/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutClient />}>
            <Route index element={<HomeCom />} />
            <Route path="/shop" element={<h1>Shop</h1>} />
<<<<<<< HEAD
            <Route path="/about" element={<AboutCom/>} />
            <Route path="/sign" element={<Sign_upCom/>} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path='/basket' element={<Basket/>}/>
=======
            <Route path="/about" element={<AboutCom />} />
            <Route path="/sign" element={<Sign_upCom />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/basket/checkout' element={<h1>basket checkout</h1>} />
>>>>>>> a587c331623315ede2c7a04dff03f462c564b27f
          </Route>

          <Route path="/admin" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/admin/home" element={<h1>Admin</h1>} />
            <Route path="/admin/order" element={<h1>order</h1>} />
            <Route path="/admin/subcategories" element={<Subcategoriya />} />
            <Route path="/admin/banners" element={<BannerFun />} />
            <Route path="/admin/dashbord" element={<h1>dashbord</h1>} />
            <Route path="/admin/discount" element={<h1>discount</h1>} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/deliveries" element={<h1>deliveries</h1>} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/note" element={<NoteTable />} />
          </Route>
          <Route path="*" element={<NotFound404 />} /> {/* Handle 404 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

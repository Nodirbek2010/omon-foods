import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from './components/admin/Layout';
import Products from './components/admin/Products/products';
import Subcategoriya from "./components/admin/subCategoriya/Subcategoriya"
import Login from './components/admin/login';
import Categories from './components/admin/Categories/categ';
import BannerFun from './components/admin/Banner/banner';
import LayoutClient from './components/client/Layout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutClient />} >
            <Route index element={<h1>Home components</h1>} />
            <Route path='/shop' element={<h1>Shop</h1>} />
            <Route path='/about' element={<h1>About</h1>} />

          </Route>
        </Routes>
        <Routes>
          <Route path="/admin" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/admin/home" element={<h1>Admin</h1>} />
            <Route path="/admin/order" element={<h1>order</h1>} />
            <Route path="/admin/subcategories" element={<Subcategoriya />} />
            <Route path="/admin/banners" element={<BannerFun />} />
            <Route path="/admin/dashbord" element={<h1>dashbord</h1>} />
            <Route path="/admin/discount" element={<h1>discount</h1>} />
            <Route path="/admin/products" element={<><Products /></>} />
            <Route path="/admin/deliveries" element={<h1>deliveries</h1>} />
            <Route path="/admin/categories" element={<Categories />} />
            <Route path="/admin/note" element={<h1>note</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, } from 'react-router-dom';
import Layout from './components/admin/Layout';
// import NotFound from './components/notfound';
import Products from './components/admin/Products/products';
import Login from "./components/admin/login"
import Categories from './components/admin/Categories/categ';
// import NotFound from './NotFound.jsx';
// import Dasjboard from './components/admin/Dasjboard/Dasjboard.jsx';
// import Layout from './components/admin/Layout/index.jsx';
// import Login from './components/admin/auth/sigin.jsx';
// import Banners from './components/admin/banner/Banners.jsx';
// import CategoriesCrud from './components/admin/categoriesCrud/Table.jsx';
// import Deliveries from './components/admin/deliveries/Table.jsx';
// import DiscountTbale from './components/admin/discountCrud/Table.jsx';
// import NoteTable from './components/admin/note/NoteTable.jsx';
// import OrderCrud from './components/admin/order/Orders.jsx';
// import { default as ProductCrud, default as ProductTable } from './components/admin/productCrud/Table.jsx';
// import SubcategorieCom from './components/admin/subCategoriya/TableSub.jsx';
// import Basket from './components/client/Basket.jsx';
// import NavbarMobile from './components/client/NavbarMobile.jsx';
// import CategoryIdPage from './pages/client/categorieid/index.jsx';
// import HomePage from './pages/client/home/index.jsx';
// import ProductPage from './pages/client/product/index.jsx';
// import BaskerPage from './pages/client/basket/index.jsx';
// import DeskModal from './components/client/DeskModal.jsx';
// import HomeIndex from './components/client/index.jsx';
// import Home from './components/client/Home.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="/admin" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/admin/home" element={<h1>Admin</h1>} />
            <Route path="/admin/order" element={<h1>order</h1>} />
            <Route path="/admin/subcategories" element={<h1>subcategories</h1>} />
            <Route path="/admin/banners" element={<h1>banners</h1>} />
            <Route path="/admin/dashbord" element={<h1>dashbord</h1>} />
            <Route path="/admin/discount" element={<h1>discount</h1>} />
            <Route path="/admin/products" element={<><Products /></>} />
            <Route path="/admin/deliveries" element={<h1>deliveries</h1>} />
            <Route path="/admin/categories" element={<Categories/>} />
            <Route path="/admin/note" element={<h1>note</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
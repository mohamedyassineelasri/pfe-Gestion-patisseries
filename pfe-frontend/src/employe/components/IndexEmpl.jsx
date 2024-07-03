import React from 'react'
import MainEmpl from './MianEmpl'
import Header from './Header'
import SideBar from './SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from '../product/AddProduct'
import Product from '../product/Product'
import EditProduct from '../product/EditProduct'

function IndexEmpl() {
  return (
    <>
    <BrowserRouter>
     <Header/>
    <SideBar />
    <Routes>
      <Route path="/employe" element={<MainEmpl />} />
      <Route path="/employe/add_product" element={<AddProduct />} />
      <Route path="/employe/products" element={<Product />} />
      <Route path="/employe/edit_product/:id" element={<EditProduct />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default IndexEmpl
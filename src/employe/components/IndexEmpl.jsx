import React from 'react'
import MainEmpl from './MianEmpl'
import Header from './Header'
import SideBar from './SideBar'
import { Route, Router, Routes } from 'react-router-dom'
import Product from '../product/Product'
import AddProduct from '../product/AddProduct'
import EditProduct from '../product/EditProduct'

function IndexEmpl() {
  return (
    <>
    <Header/>
    <SideBar />
    <Routes>
      <Route path="/employe" element={<MainEmpl />} />
      <Route path='/employe/products' element={<Product />} />
      <Route path='/employe/add_product' element={<AddProduct  />} />
      <Route path='employe/edit_product/:id' element={<EditProduct  />} />
    </Routes>
    </>
  )
}

export default IndexEmpl
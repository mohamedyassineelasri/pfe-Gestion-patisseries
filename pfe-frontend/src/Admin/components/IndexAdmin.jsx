import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Main from './Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoryList from '../category/CategoryList'
import AddCategory from '../category/AddCategory'
import EditCategory from '../category/EditCategory'

function IndexAdmin() {
  return (
    <>
    <BrowserRouter>
     <Header />
    <SideBar />
    <Routes>
      <Route path="/admin/categories" element={<CategoryList/>} />
      <Route path="/admin" element={<Main />} />
      <Route path='/admin/add_categorie'  element={<AddCategory />} />
      <Route path='/admin/edit_categorie/:id' element={<EditCategory />} />
    </Routes>
    </BrowserRouter>
    </> 
  )
}

export default IndexAdmin;
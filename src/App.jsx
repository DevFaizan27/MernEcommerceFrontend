import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/auth/Login'
import Signup from './Pages/auth/Signup'
import { Toaster } from 'react-hot-toast'
import ForgotPassword from './Pages/auth/ForgotPassword'
import DiscountCalculator from './components/DiscountCalculator'
import NotFoundError from './components/NotFoundError'
import Unauthorized from './components/Unauthorized'
import ProfileContent from './Pages/common/ProfileContent'
import ProfileHome from './Pages/common/ProfileHome'
import ClientLayout from './Pages/Client/layout/ClientLayout'
import ProductDetails from './Pages/Client/clientMain/ProductDetails'
import ClientHome from './Pages/Client/clientMain/ClientHome'

import EmployeeHome from './Pages/Employee/EmployeeMain/EmployeeHome'
import EmployeeLayout from './Pages/Employee/layout/EmployeeLayout'
import ProtectedRouteEmployee from './Routes/ProtectedRouteEmployee'
import AddProduct from './Pages/Employee/EmployeeMain/AddProduct'
import AddVariations from './Pages/Employee/EmployeeMain/AddVariations'
import ViewProducts from './Pages/Employee/EmployeeMain/ViewProducts'
import ResetPassword from './Pages/auth/ResetPassword'
import ProdtectedRouteAdmin from './Routes/ProdtectedRouteAdmin'
import AdminLayout from './Pages/Admin/Layout/AdminLayout'
import AdminHome from './Pages/Admin/main/AdminHome'
import AddCategory from './Pages/Admin/main/AddCategory'
import AddSubCategory from './Pages/Admin/main/AddSubCategory'
import Categories from './Pages/Admin/main/Categories'
import SubCategories from './Pages/Admin/main/SubCategories'
import CategoryLayout from './Pages/Admin/Layout/CategoryLayout'



const App = () => {
  return (
    <>
     <Routes>

    {/* employee routes */}
      <Route path='/employee-dashboard/' element={
        <ProtectedRouteEmployee>
          <EmployeeLayout/>
      </ProtectedRouteEmployee>
      }>
      <Route index={true} path='' element={<EmployeeHome/>}/>
      <Route path='add-product' element={<AddProduct/>}/>
      <Route path='add-product-variations' element={<AddVariations/>}/>
      <Route path='view-employee-products' element={<ViewProducts/>}/>
      <Route path='show-profile' element={<ProfileContent/>}>
      <Route index={true} path='' element={<ProfileHome/>}/>
      <Route path='reset-password' element={<ForgotPassword/>}/>
      </Route>
      <Route path='discount-calculator' element={<DiscountCalculator/>}/>
      </Route>


      {/* admin routes */}
      <Route path='/admin-dashboard' element={
        <ProdtectedRouteAdmin>
          <AdminLayout/>
      </ProdtectedRouteAdmin>
      }>
      <Route index={true} path='' element={<AdminHome/>}/>
      <Route path='add-category' element={<AddCategory/>}/>
      <Route path='add-subCategory' element={<AddSubCategory/>}/>
      <Route path='categories'  element={<CategoryLayout/>}>
      <Route index={true}  path='' element={<Categories/>}/>
      <Route  path='subCategories/:categoryId' element={<SubCategories/>}/>
      </Route>
      </Route>



      {/* User routes */}
      <Route path='/' element={<ClientLayout/>}>
        <Route index={true} path='' element={<ClientHome/>}/>
      <Route path='productDetail/:slug' element={<ProductDetails/>}/>
      </Route>


      {/* authentication routes */}
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/reset-password/:token' element={<ResetPassword/>}/>



      
      <Route path='/unauthorized' element={<Unauthorized/>}/>
      <Route path="*" element={<NotFoundError/>}/>
    </Routes>
    <Toaster/>
    </>
   
  )
}

export default App
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
import AddProduct from './Pages/Employee/products/AddProduct'



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
      <Route path='show-profile' element={<ProfileContent/>}>
      <Route index={true} path='' element={<ProfileHome/>}/>
      <Route path='reset-password' element={<ForgotPassword/>}/>
      </Route>
      <Route path='discount-calculator' element={<DiscountCalculator/>}/>
      </Route>



      {/* User routes */}
      <Route path='/' element={<ClientLayout/>}>
        <Route index={true} path='' element={<ClientHome/>}/>
      <Route path='productDetail/:slug' element={<ProductDetails/>}/>
      </Route>


      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>


      
      {/* <Route path='/forgot-password' element={<ForgotPassword/>}/> */}

      
      <Route path='/unauthorized' element={<Unauthorized/>}/>
      <Route path="*" element={<NotFoundError/>}/>
    </Routes>
    <Toaster/>
    </>
   
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from './Pages/auth/Login'
import Signup from './Pages/auth/Signup'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
// import ForgotPassword from './Pages/auth/ForgotPassword'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/login' element={<Login/>}/>  */}
      <Route path='/signup' element={<Signup/>}/>
      {/* <Route path='/forgot-password' element={<ForgotPassword/>}/> */}
    </Routes>
    <Toaster/>
    </>
   
  )
}

export default App
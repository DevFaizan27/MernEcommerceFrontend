import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/auth/Login'
import Signup from './Pages/auth/Signup'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </>
   
  )
}

export default App
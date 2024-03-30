import React from 'react'
import { Link } from 'react-router-dom'
import Unauth from '../assets/Unauth.jpg'

const Unauthorized = () => {
  return (
    <div className="h-screen w-screen bg-white flex items-center">
    <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div className="w-full lg:w-1/2 mx-8">
                <div className="text-7xl text-red-500 font-dark font-extrabold mb-8">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                Unauthorized-login  to acess
            </p>
            
            <Link to={'/login'} className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-red-500 active:bg-red-600 hover:bg-red-400">Login</Link>
    </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <img src={Unauth} className="" alt="Page not found"/>
        </div>
    </div>
</div>
  )
}

export default Unauthorized
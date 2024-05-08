import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../ClientFooter/Footer';
import Header from '../Clientheader/Header';
import Categories from '../Clientheader/Categories';
import Carousel from '../clientMain/Carousel';


const ClientLayout = () => {
 
  return (
    <div className="flex bg-blue-200 flex-col min-h-[100vh]">
      <Header />
    <main className="flex-grow bg-blue-200 md:mt-14">
        <Outlet/>
        </main>
    <Footer/>
  </div>
  )
}

export default ClientLayout
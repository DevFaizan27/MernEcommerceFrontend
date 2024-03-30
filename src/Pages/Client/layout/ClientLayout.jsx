import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../ClientFooter/Footer';
import Header from '../Clientheader/Header';


const ClientLayout = () => {
 
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {/* <main className="flex-grow  md:mt-40"><Carousel images={images}/></main> */}
    <main className="flex-grow  md:mt-14">
       
        <Outlet/>
        </main>
    <Footer/>
  </div>
  )
}

export default ClientLayout
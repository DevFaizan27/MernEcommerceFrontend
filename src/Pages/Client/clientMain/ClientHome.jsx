import React from 'react'
import Benifits from './Benifits'
import TodaysOffer from './TodaysOffer'
import HomePageProduct from './HomePageProduct'
import Carousel from './Carousel'
import Categories from '../Clientheader/Categories'

const ClientHome = () => {
  return (
    <div> 
      <Carousel/>
      <Categories/>
    <Benifits/>
    <TodaysOffer/>
    <HomePageProduct/>
    </div>
  )
}

export default ClientHome
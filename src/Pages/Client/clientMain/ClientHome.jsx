import React from 'react'
import Carousel from './Carousel'
import Benifits from './Benifits'
import TodaysOffer from './TodaysOffer'
import HomePageProduct from './HomePageProduct'

const ClientHome = () => {
  return (
    <div> 
    <Carousel/>
    <Benifits/>
    <TodaysOffer/>
    <HomePageProduct/>
    </div>
  )
}

export default ClientHome
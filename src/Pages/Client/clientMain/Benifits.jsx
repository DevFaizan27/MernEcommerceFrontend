import React from 'react'
import delivery from '../../../assets/delivery.webp';
import cod from '../../../assets/cod.webp';
import headphones from '../../../assets/headphones.webp';
import seller from '../../../assets/seller.webp';


const Benifits = () => {
    const benefitContent = [
        {
          title: 'express delivery',
          imgSrc: delivery
        },
        {
          title: 'payment on the spot',
          imgSrc: cod
        },
        {
          title: '24/7 support',
          imgSrc: headphones
        },
        {
          title: 'Guarantee the originality',
          imgSrc: seller
        },
      ];
  return (
    <div className="grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto">
      {benefitContent.map((benefitItem) => {
         return ( 
          <div
            className="col-span-6 lg:col-span-3 flex flex-col items-center "
            key={benefitItem.title}
          >
            <img
              height={48}
              width={48}
              src={benefitItem.imgSrc}
              alt='.'
              className=""
            />
            <p className="py-2 text-sm md:text-base text-palette-base/90 text-center">
              {benefitItem.title}
            </p>
          </div>
         );
       })} 
    </div>
  )
}

export default Benifits
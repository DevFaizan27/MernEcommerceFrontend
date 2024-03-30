import React from 'react'

const Benifits = () => {
    const benefitContent = [
        {
          title: 'express delivery',
          imgSrc: 'https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbenefit-icons%2F005-delivery-truck-2.webp&w=96&q=75',
        },
        {
          title: 'payment on the spot',
          imgSrc: 'https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbenefit-icons%2F003-cash-on-delivery.webp&w=96&q=75',
        },
        {
          title: '24/7 support',
          imgSrc: 'https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbenefit-icons%2F004-headphones.webp&w=96&q=75',
        },
        {
          title: 'Guarantee the originality',
          imgSrc: 'https://zishop.vercel.app/_next/image?url=%2Fimages%2Fbenefit-icons%2F006-best-seller.webp&w=96&q=75',
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
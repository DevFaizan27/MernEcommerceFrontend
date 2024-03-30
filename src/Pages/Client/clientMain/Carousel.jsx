import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Carousel = () => {

  const[data,setData]=useState([]);

  useEffect(() => {
    axios.get('http://localhost:5555/api/crousel/get-crousel-data')
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container md:w-11/12 md:mx-auto  max-w-full">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.images[0].url} alt={`Slide ${index + 1}`} className="carousel-image w-full"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

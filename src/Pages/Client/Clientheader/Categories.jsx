import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:5555/api/categories/get-all-categories')
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const updateContainerWidth = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      setContainerWidth(scrollContainer.clientWidth);
    }
  };

  const handleScrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = Math.min(containerWidth, scrollContainer.scrollLeft);
      scrollContainer.scrollLeft -= scrollAmount;
      setScrollPosition(scrollContainer.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = Math.min(containerWidth, scrollContainer.clientWidth - scrollContainer.scrollLeft);
      scrollContainer.scrollLeft += scrollAmount;
      setScrollPosition(scrollContainer.scrollLeft);
    }
  };

  return (
    <div className="relative overflow-hidden mt-5">
      <div
        ref={scrollContainerRef}
        id="categoriesContainer"
        className="flex lg:justify-center hide-scroll-bar"
      >
        {categories.map((item, index) => (
          <div key={index} className="px-2 lg:px-3">
            <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-gray-500 transition-all hover:bg-gray-400 cursor-pointer mb-1">
              <div className="flex justify-center">
                <img
                  src={item.images[0].url}
                  alt="img"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
              {item.imageTitle}
            </h1>
          </div>
        ))}
      </div>
      {scrollPosition > 0 && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          onClick={handleScrollLeft}
        >
          <FaChevronLeft />
        </button>
      )}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
        onClick={handleScrollRight}
      >
        <FaChevronRight />
      </button>
      <style>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Categories;

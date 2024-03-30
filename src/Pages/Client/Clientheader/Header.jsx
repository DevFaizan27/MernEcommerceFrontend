import React, { useState } from 'react';
import Logo from '../../../components/Logo';
import SearchBar from '../../../components/SearchBar';
import { IoMenu, IoSunny } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import Categories from './Categories'; // Import your Categories component
import Button from '../../../components/Button'; // Import your Button component


const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleMenuClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header className=" bg-gray-200 shadow-sm pt-4 z-[1000]">
      <div className="flex flex-col md:px-4 mb-2">
        <div className="flex items-center justify-between md:order-2 md:mt-2  relative">
          <button onClick={handleMenuClick}>
            <IoMenu size={26} />
          </button>
          <div className="md:hidden">
            <Logo />
          </div>
          <div className="md:hidden">
            <IoSunny size={26} />
          </div>
          <div className="hidden  p-2 md:flex md:items-center md:justify-between">
            <IoSunny size={26} />
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="mb-2 mt-4 md:mt-0 flex  items-center md:order-1">
          <div className="hidden p-4 md:block">
            <Logo />
          </div>
          <div className="flex-grow">
            <SearchBar />
          </div>
          <div className="ltr:ml-4 rtl:mr-4 sm:ltr:ml-4 sm:rtl:mr-4 flex items-center justify-between ">
            <Button name={'login'} />
            <FaShoppingCart size={26}/>
          </div>
        </div>
      </div>
      {/* Conditional rendering of Categories component with transition effect */}
      {showCategories && (
        <div className="transition-all duration-300 ease-in-out scroll-smooth opacity-100 transform translate-y-0">
          <Categories />
        </div>
      )}
    </header>
  );
};

export default Header;

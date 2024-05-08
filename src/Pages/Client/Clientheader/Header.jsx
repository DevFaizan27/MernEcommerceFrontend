import React from 'react';
import Logo from '../../../components/Logo';
import SearchBar from '../../../components/SearchBar';
import { IoSunny } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../../../components/Button'; // Import your Button component

const Header = () => {
  return (
    <header className=" bg-blue-600 shadow-sm pt-4 z-[1000]">
     <div className="hidden md:flex items-center justify-between px-4 md:px-8 py-2">
        <Logo />
        <SearchBar className="w-64 md:w-auto" /> {/* Adjust width as needed */}
        <Button name={'login'} />
        <FaShoppingCart size={26} />
        <IoSunny size={26} />
      </div>
      <div className="md:hidden">
        <div className="flex flex-col items-center pt-2 pb-4">
          <div className="flex items-center space-x-4">
            <Logo />
            <FaShoppingCart size={26} />
            <IoSunny size={26} />
          </div>
         <div className="flex flex-row justify-between p-2">
         <SearchBar className="w-full mt-4" />
         <Button className="p-4" name={'login'} />
         </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

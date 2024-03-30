// SideNavbar.js
import React, { useState } from 'react';
import { FaChartPie, FaShoppingBag, FaCalculator, FaPlus, FaEye } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {useTheme} from '../../../context/themeContext'


const SideNavbar = ({ isSidebarOpen}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { isDarkMode}=useTheme()


  return (
    <aside
    className={`fixed top-0 left-0 z-40 p-4  h-screen pt-20 transition-transform ${
      isSidebarOpen ? '' :'-translate-x-full'
    }  border-r  sm:translate-x-0  ${isDarkMode?'border-slate-900 bg-slate-700':'bg-slate-200 border-gray-200'}`}
  >
    {/* <div className={`h-full  px-3 pb-4 `}> */}
      <ul className="space-y-2 font-medium">
        <li>
          <Link
            to={''}
            className={`flex items-center p-2 rounded-lg ${isDarkMode?'hover:bg-gray-900 text-white':'text-gray-900 hover:bg-slate-300'} group`}
          >
            <FaChartPie />
            <span className="ml-3">Dashboard</span>
          </Link>
        </li>
       <div className="flex items-center ">
          <button
            onClick={toggleDropdown}
            className={`flex items-center p-2  rounded-lg   ${isDarkMode?'hover:bg-gray-900 text-white':'text-gray-900 hover:bg-slate-300'} group `}
          >
            <FaShoppingBag />
            <span className="ml-3">Products</span>
          </button>
          {isDropdownOpen && (
            <div className={`absolute right-0 mt-32 w-48 origin-top-right  border  rounded-md shadow-lg  ${isDarkMode?'border-gray-700 bg-slate-800':'bg-slate-300 border-slate-200'}`}>
              <div  role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to={'/employee-dashboard/add-product'} onClick={toggleDropdown} className={`block px-4 py-2 text-sm rounded hover:bg-gray-100  ${isDarkMode?'hover:bg-slate-900 text-white':'text-slate-900 hover:bg-slate-400'}`} role="menuitem">Add Products</Link>
                <a href="#" className={`block px-4 py-2 text-sm text-gray-700  hover:text-gray-900 rounded  ${isDarkMode?'hover:bg-slate-900 text-white':'text-slate-900 hover:bg-slate-400'}`} role="menuitem">View Products</a>
              </div>
            </div>
          )}
        </div>
        <li>
          <a
            href="#"
            className={`flex items-center p-2  rounded-lg   ${isDarkMode?'hover:bg-gray-900 text-white':'text-gray-900 hover:bg-slate-300'} group`}
          >
           <IoBagCheckOutline />
            <span className="ml-3">Orders</span>
          </a>
        </li>
        <li>
          <Link
            to={'discount-calculator'}
            className={`flex items-center p-2  rounded-lg  ${isDarkMode?'hover:bg-gray-900 text-white':'text-gray-900 hover:bg-slate-300'} group`}
          >
            <FaCalculator />
            <span className="ml-3">Discount Calculator</span>
          </Link>
        </li>
      </ul>
    {/* </div> */}
  </aside>
  );
};

export default SideNavbar;

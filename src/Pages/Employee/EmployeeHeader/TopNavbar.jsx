// TopNavbar.js
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { GrMenu } from "react-icons/gr";
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from '../../../context/themeContext';
import Logo from '../../../components/Logo';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import Profile from '../../common/Profile';


const TopNavbar = ({ toggleSidebar,isSidebarOpen }) => {
    
    const { isDarkMode, toggleTheme } = useTheme();
    const[profileModal,setProfileModal]=useState(false);
    const user=JSON.parse(localStorage.getItem("userData"));


  return (
    <nav className={`fixed top-0 z-50 w-full  ${isDarkMode?'bg-slate-700 border-slate-900':'bg-slate-200 border-b border-gray-200'}`}>
    <div className="px-3 py-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
          <button
            onClick={toggleSidebar}
            aria-controls="logo-sidebar"
            type="button"
            className={`inline-flex items-center p-2 text-sm  rounded-lg sm:hidden  focus:outline-none focus:ring-2  ${isDarkMode?'text-gray-400 hover:bg-gray-700 focus:ring-gray-600':'text-gray-500 hover:bg-gray-100 focus:ring-gray-200'}`}
          >
            <span className="sr-only">Open sidebar</span>
            {isSidebarOpen?<RxCross2/>:<GrMenu />}
          </button>
          <Link to={'/employee-dashboard'} className="flex ms-2 md:me-24">
           <Logo/>
          </Link>
        </div>
        <div className="flex items-center">
    <div className="flex items-center justify-between sm:justify-start ms-3">
        <button
            type="button"
            onClick={toggleTheme}
            className={`flex items-center p-2 text-sm  rounded-full focus:ring-2 ${isDarkMode ? 'text-gray-300 bg-gray-800  focus:ring-gray-600' : 'text-gray-500 bg-white focus:ring-gray-300'}`}
            aria-expanded="false"
            data-dropdown-toggle="theme"
        >
            <span className="sr-only">Toggle theme</span>
            {isDarkMode ? <BsFillMoonStarsFill size={18} /> : <IoSunny size={18} />}
        </button>
        <div className="flex ml-3 item-center">
            <button
                type="button"
            className={`flex items-center p-1 rounded-full  ${isDarkMode ? 'text-gray-300 bg-gray-800  focus:ring-gray-600' : 'text-gray-500 bg-white focus:ring-gray-300'}`}
                aria-expanded="false"
                onClick={()=>setProfileModal(!profileModal)}
            >
                <span className="sr-only">Open user menu</span>
                <CgProfile size={26} />
            </button>
            <div className={`absolute right-7 mt-10 origin-top-right  border  rounded-md shadow-lg  ${isDarkMode?'border-gray-700 bg-gray-800':'bg-white border-gray-200'}`}>
              <div  role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {profileModal?<Profile setProfileModal={setProfileModal} user={user}/>:<></>}
              </div>
            </div>
        </div>
    </div>
</div>

      </div>
    </div>
  </nav>
  );
};

export default TopNavbar;

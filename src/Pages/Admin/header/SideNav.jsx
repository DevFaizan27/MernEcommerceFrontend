import React, { useState } from 'react';
import { FaShoppingBag, FaCalculator, FaPlus, FaEye, FaHome } from 'react-icons/fa';
import { IoBagCheckOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/themeContext';
import dashboard from '../../../assets/dashboard.png';
import Logo from '../../../components/Logo';

const SideNav = ({ isSidebarOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };




  return (
    <aside
      className={`fixed top-0 left-0 z-40 p-4 h-screen border-emerald-900 bg-sky-800  transition-transform ${isSidebarOpen ? '' : '-translate-x-full'
        } border-r sm:translate-x-0 `}
    >
      {/* Sidebar Content */}
      <div className="mt-2">
        <Link to={'/employee-dashboard'}>
          <Logo />
        </Link>
        <div className="flex items-center mt-4">
          <img className="w-10" src={dashboard} alt="Dashboard image" />
          <span className="ml-3 font-bold">admin-Dashboard</span>
        </div>
        <ul className="mt-4 space-y-2 font-medium">
          <li>
            <Link
              to={''}
              className={`flex items-center p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900 text-white' : 'text-gray-900 hover:bg-slate-300'
                } group`}
            >
              <FaHome />
              <span className="ml-3">Home</span>
            </Link>
          </li>

          <li>
            <Link
              to={'categories'}
              className={`flex items-center p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900 text-white' : 'text-gray-900 hover:bg-slate-300'
                } group`}
            >
              <FaEye/>
              <span className="ml-3">View-Categories</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-dashboard/add-category"
              onClick={toggleDropdown}
              className={`flex items-center p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900 text-white' : 'text-gray-900 hover:bg-slate-300'
                } group`}
            >
              <FaPlus/>
              <span className="ml-3">Add-Categories</span>
            </Link>
          </li><li>
            <Link to={'/admin-dashboard/add-subcategory'}
              href="#"
              className={`flex items-center p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900 text-white' : 'text-gray-900 hover:bg-slate-300'
            } group`}
            >
              <FaPlus/>
              <span className="ml-3">Add-SubCategories</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;

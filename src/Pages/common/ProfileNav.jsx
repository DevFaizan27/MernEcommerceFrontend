import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import { CgProfile } from 'react-icons/cg';

const ProfileNav = () => {
  const { isDarkMode } = useTheme();


  return (
    <aside className={`  mt-6  h-3/4   rounded  ${isDarkMode?'bg-slate-800 text-slate-500':'bg-slate-300 text-slate-900'}`}>
      <div className={`flex  h-10vh  p-8 w-100vw rounded-t  ${isDarkMode?'bg-slate-700 text-slate-300' :'bg-slate-500'}` }>
        <div className={`flex items-center   `}>
          <CgProfile size={30}/>
          <div className={`ml-2`}>
            <h1 className="text-4xl font-bold">Profile</h1>
          </div>
        </div>
      </div>
      {/* <div className=""> */}
        <ul className="flex flex-row  p-8 justify-between w-full lg:w-3/4 md:w-3/4 lg:flex-col md:flex-col py-10">
          <li className={`px-3 mt-2   py-3 rounded text-bold ${isDarkMode?'bg-slate-500 text-slate-900 hover:bg-slate-600':' bg-slate-700 text-slate-400 hover:bg-slate-500'}`}>
            <Link to="" className="block">Profile</Link>
          </li>
          <li className={`px-3 mt-2 py-3 rounded text-bold ${isDarkMode?'bg-slate-500 text-slate-900 hover:bg-slate-600':' bg-slate-700 text-slate-400 hover:bg-slate-500'}`}>
            <Link to="reset-password" className="block">Reset Password</Link>
          </li>
          <li className={`px-3 mt-2 py-3 rounded text-bold ${isDarkMode?'bg-slate-500 text-slate-900 hover:bg-slate-600':' bg-slate-700 text-slate-400 hover:bg-slate-500'}`}>
            <Link to="/logout" className="block">Logout</Link>
          </li>
        </ul>
      {/* </div> */}
    </aside>
  );
};

export default ProfileNav;

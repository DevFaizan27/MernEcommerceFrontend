import React from 'react'
import ProfileNav from './ProfileNav'
import { useTheme } from '../../context/themeContext'
import { Outlet } from 'react-router-dom';


const ProfileLayout = () => {
    const {isDarkMode}=useTheme();
  return (
    // <div className="flex flex-col h-screen">
  <div className={`flex xl:flex-row  lg:flex-row md:flex-col sm:flex-col h-full p-4  ${isDarkMode ? 'bg-slate-600' : 'bg-slate-400'}`}>
    <aside className=" xl:w-1/3 lg:w-1/3 md:w-5/6 sm:w-full ">
      <ProfileNav/>
    </aside>
    <main className={`xl:w-1/2 lg:w-1/2 md:w-2/5 sm:w-full ml-16`}>
      <Outlet/>
    </main>
  {/* </div> */}
</div>
  )
}

export default ProfileLayout
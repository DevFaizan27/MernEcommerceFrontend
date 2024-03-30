import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../EmployeeHeader/TopNavbar';
import SideNavbar from '../EmployeeHeader/SideNavbar';
import { useTheme } from '../../../context/themeContext';

const EmployeeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode } = useTheme();

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
  <div className="flex  flex-col h-screen w-full">
  <header className="h-16 shrink-0">
    <TopNavbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
  </header>
  <div className="flex  flex-row h-full">
    <aside className={`xl:w-1/6 lg:w-1/6 md:w-0 sm:w-0  ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100' }`}>
      <SideNavbar isSidebarOpen={isSidebarOpen}/>
    </aside>
    <main className={ `xl:w-full lg:w-full md:w-full sm:w-full xl:ml-4 lg:ml-6 md:ml-0 sm:ml-0  ${isDarkMode ? 'bg-slate-900' : 'bg-slate-300'}`}>
      <Outlet/>
    </main>
  </div>
</div>
  );
};

export default EmployeeLayout;

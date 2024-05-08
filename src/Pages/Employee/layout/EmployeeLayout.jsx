import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../EmployeeHeader/SideNavbar";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../../components/Logo";

const EmployeeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 bg-gray-800 flex items-center justify-between px-4 md:hidden">
      <h1 className="text-xl font-bold text-white"><Logo/></h1>
        {/* Mobile Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none md:hidden"
        >
          {isSidebarOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          {/* Add other header elements here */}
        </div>
      </header>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`md:block ${
            isSidebarOpen ? "fixed left-0 top-0  h-full w-64" : "hidden md:flex"
          } bg-gray-900 overflow-y-auto transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideNavbar isSidebarOpen={isSidebarOpen} />
        </aside>
        {/* Main Content */}
        <main className={`flex-1  overflow-y-auto bg-sky-900- md:ml-64`}>
          <Outlet />
        </main>
      </div>
      {/* Large Screen Sidebar */}
      <aside className="hidden md:block bg-gray-900 w-64 h-full">
        <SideNavbar isSidebarOpen={true} />
      </aside>
    </div>
  );
};

export default EmployeeLayout;

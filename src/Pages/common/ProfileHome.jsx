import React from 'react';
import { getUser } from '../../context/userContext';
import { useTheme } from '../../context/themeContext';

const ProfileHome = () => {
  const userData = getUser();
  const { isDarkMode } = useTheme();


  return (
        <div className={`relative mt-6 h-3/4  flex flex-col min-w-0 break-words ${isDarkMode?'bg-slate-800 text-slate-400':'bg-slate-300 text-slate-800'} w-full mb-6 shadow-xl rounded-lg `}>
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="Profile"
                    src='https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg'
                    className="shadow-xl rounded-full h-auto align-middle border-none w-20  max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-10">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className={`mr-4 p-3 rounded text-center ${isDarkMode?'bg-slate-600':'bg-slate-600'}`}>
                    <span className={`text-xl  font-bold block uppercase tracking-wide `}>22</span>
                    <span className={`text-sm `}>Products</span>
                  </div>
                  <div className={`mr-4 p-3 rounded text-center ${isDarkMode?'bg-slate-600':'bg-slate-600'}`}>
                    <span className={`text-xl font-bold block uppercase tracking-wide `}>10</span>
                    <span className={`text-sm `}>Total Sales</span>
                  </div>
                  <div className={`mr-4 p-3 rounded text-center ${isDarkMode?'bg-slate-600':'bg-slate-600'}`}>
                    <span className={`text-xl font-bold block uppercase tracking-wide `}>89</span>
                    <span className={`text-sm `}>Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <h3 className={`text-xl font-semibold leading-normal mb-2 `}>{userData.userName}</h3>
              <div className={`text-sm leading-normal mt-0 mb-2  font-bold uppercase`}>
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {userData.userEmail}
              </div>
              <div className={`mb-2 `}>
                Role: {userData.userRole.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProfileHome;

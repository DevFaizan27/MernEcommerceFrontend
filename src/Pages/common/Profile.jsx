import React from 'react';
import { BsPerson, BsClipboard, BsBoxArrowRight } from 'react-icons/bs';
import { useTheme } from '../../context/themeContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = ({setProfileModal,user}) => {
    const { isDarkMode } = useTheme();

    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setProfileModal(false)
        toast.success("Logged Out Successfully!!")
        navigate('/unauthorized')
    }

    return (
        <div className={`bg-${isDarkMode ? 'gray-800' : 'white'} rounded-lg p-6 shadow-lg w-80`}>
            <div className="flex justify-center mb-4">
                <BsPerson className={`text-4xl text-${isDarkMode ? 'white' : 'gray-600'}`} />
            </div>
            <h1 className={`text-2xl font-bold mb-4 text-${isDarkMode ? 'white' : 'black'}`}>User Name: {user.userName}</h1>
            <p className={` text-sm mb-4 text-${isDarkMode ? 'white' : 'black'}`}>{user.userEmail} ({user.userRole})</p>
            <div>
                <Link onClick={()=>setProfileModal(false)} to={'show-profile'} className={`flex items-center mb-2 text-${isDarkMode ? 'white' : 'black'}`}>
                    <BsPerson className="mr-2" />
                    Profile
                </Link>
                <Link onClick={()=>setProfileModal(false)} className={`flex items-center mb-2 text-${isDarkMode ? 'white' : 'black'}`}>
                    <BsClipboard className="mr-2" />
                    Orders
                </Link>
                <Link onClick={logout} className={`flex items-center text-${isDarkMode ? 'white' : 'black'}`}>
                    <BsBoxArrowRight className="mr-2" />
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Profile;

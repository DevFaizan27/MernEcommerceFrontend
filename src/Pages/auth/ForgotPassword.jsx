import React, { useEffect, useState } from 'react';
import { resetPasswordAction, resetPasswordOtpAction } from '../../Redux/Actions/authAction.js';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { reset } from '../../Redux/Slices/authSlice.js';
import { useTheme } from '../../context/themeContext.jsx';

const ForgotPassword = () => {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    otp: ''
  });

  const { email, newPassword, otp } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { showOTPField, isLoading, isOtpSendSuccess, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isOtpSendSuccess) {
      toast.success(message);
    }
    if (isSuccess) {
      toast.success(message);
      navigate('/login');
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigate, dispatch, isOtpSendSuccess, showOTPField]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendOtp = (e) => {
    e.preventDefault();
    const userData = { email };
    dispatch(resetPasswordOtpAction(userData));
  };

  const resetPassword = (e) => {
    e.preventDefault();
    const userData = { email, otp, newPassword };
    dispatch(resetPasswordAction(userData));
  };

  // Define dynamic styles based on the theme
  const inputBgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';
  const inputTextColor = isDarkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className={`min-h-screen w-full flex justify-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className=" p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Reset Password</h1>
          <input
            type="email"
            name='email'
            value={email}
            onChange={onChange}
            placeholder="Email"
            disabled={showOTPField}
            className={`block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500 ${inputBgColor} ${inputTextColor}`}
          />
          <button
            onClick={sendOtp}
            disabled={showOTPField}
            className={`block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4`}
          >
            Get OTP
          </button>
          {showOTPField && (
            <>
              <input
                type="text"
                name='otp'
                value={otp}
                onChange={onChange}
                placeholder="OTP"
                className={`block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500 ${inputBgColor} ${inputTextColor}`}
              />
              <input
                type="password"
                name='newPassword'
                value={newPassword}
                onChange={onChange}
                placeholder="Password"
                className={`block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500 ${inputBgColor} ${inputTextColor}`}
              />
              <button
                onClick={resetPassword}
                className={`block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4`}
              >
                Reset Password
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

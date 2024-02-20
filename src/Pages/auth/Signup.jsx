import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useCountdown from '../../hooks/countdown'; // Import the custom countdown hook
import { handleOTPVerificationAction, handleSignupAction, resendOtpAction } from './authAction';
import Spinner from '../../components/Spinner';
import toast from 'react-hot-toast';
import { reset } from './authSlice';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    otp: '',
  });

  const { name, email, password, otp } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, disable, showOTPField, isLoading, message, isOtpSendSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(isError.message);
    }

    if (isOtpSendSuccess) {
      toast.success(message);
    }

    if (isSuccess) {
      toast.success(message);
      navigate('/');
    }

    if (isError) {
      dispatch(reset());
    }
  }, [isError, isSuccess, isOtpSendSuccess, message, navigate, dispatch]);

  const seconds = useCountdown();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getOtp = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(handleSignupAction(userData));
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const userData = { email, otp };
    dispatch(handleOTPVerificationAction(userData));
  };

  const resendOtp = (e) => {
    e.preventDefault();
    const userData = { email };
    dispatch(resendOtpAction(userData));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Welcome to khareedo.com</h1>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
            disabled={showOTPField}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            disabled={showOTPField}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            disabled={showOTPField}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={getOtp}
            disabled={showOTPField}
            className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
          >
            Get OTP
          </button>
          {showOTPField && (
            <>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={onChange}
                placeholder="OTP"
                className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
              />
              <button
                onClick={verifyOtp}
                className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
              >
                Verify OTP
              </button>
              <p className="text-gray-500 text-center mt-4">Resend OTP after {seconds} seconds</p>
              <button
                onClick={resendOtp}
                disabled={seconds > 0 || disable}
                className="block w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              >
                Resend OTP
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Signup;

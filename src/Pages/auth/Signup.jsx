import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setOtp, setDisable, setPassword,setShowOTPField,setLoading } from '../signupSlice';
import { useNavigate } from 'react-router-dom';
import useCountdown from '../../hooks/countdown'; // Import the custom countdown hook
import { handleOTPVerificationAction, handleSignupAction, resendOtpAction } from './authAction';
import Spinner from '../../components/Spinner';



const Signup = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  //bring the state from store
  const { email, password, otp, disable ,showOTPField,loading} = useSelector(
    (state) => state.signup
  );

  // Use the custom countdown hook
  const seconds = useCountdown();

  console.log(showOTPField)

  const handleSignup = async (e) => {
    e.preventDefault();
    handleSignupAction(email,password, dispatch, setDisable, setShowOTPField,setLoading);
  };

  // Function to handle OTP verification
  const handleOTPVerification = async (e) => {
    e.preventDefault();
    handleOTPVerificationAction(email, otp, navigate,setLoading,dispatch);
  };

  // Function to resend OTP
  const resendOtp = async (e) => {
    e.preventDefault();
    resendOtpAction(email, dispatch, setDisable,setLoading);
  };


  return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        {loading?<Spinner/>:(
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Welcome to khareedo.com</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder="Email"
          disabled={showOTPField}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          placeholder="Password"
          disabled={showOTPField}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleSignup}
          disabled={showOTPField}
          className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
        >
          Get OTP
        </button>
        {showOTPField && (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => dispatch(setOtp(e.target.value))}
              placeholder="OTP"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleOTPVerification}
               //{/* Disable the Verify OTP button when countdown is running */}
              className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
            >
              Verify OTP
            </button>
            <p className="text-gray-500 text-center mt-4">Resend OTP after {seconds} seconds</p>
            <button
              onClick={resendOtp}
              disabled={seconds > 0 || disable}// {/* Disable the Resend OTP button when countdown is running or if already disabled */}
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

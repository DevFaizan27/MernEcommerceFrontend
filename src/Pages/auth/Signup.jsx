import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  handleSignupAction } from '../../Redux/Actions/authAction.js';
import Spinner from '../../components/Spinner';
import toast from 'react-hot-toast';
import { reset } from '../../Redux/Slices/authSlice.js';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, isLoading, message, isOtpSendSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      navigate('/login');
      dispatch(reset());
    }

    if (isError) {
      toast.error(message)
      dispatch(reset());
    }
  }, [isError, isSuccess, isOtpSendSuccess, message, navigate, dispatch]);

  

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const signupHandler = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(handleSignupAction(userData));
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
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={signupHandler}
            className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;

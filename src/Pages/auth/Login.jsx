import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { loginAction } from '../../Redux/Actions/authAction.js';
import toast from 'react-hot-toast';
import { reset } from '../../Redux/Slices/authSlice.js';
import Spinner from '../../components/Spinner';


const Login = () => {

  const[formData,setFormData]=useState({
    email:'',
    password:''
  })

  //getting data  from the user
  const user=JSON.parse(localStorage.getItem("userData"));

  const{email,password}=formData;

  const dispatch=useDispatch()
  const navigate = useNavigate();

   //bring the state from store
   const {isSuccess, isLoading,isError,message} = useSelector(
    (state) => state.auth
  );


  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      if(user.userRole=='employee'){
        navigate('/employee-dashboard/')
      }else{
        navigate('/');
      }
      dispatch(reset());
    }

    if (isError) {
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigate, dispatch]);


  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };




  const login=(e)=>{
    e.preventDefault();
    const userData={email,password}
    dispatch( loginAction(userData));
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        {isLoading?<Spinner/>:(
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Welcome to khareedo.com</h1>
        <input
          type="email"
          name='email'
          value={email}
          onChange={onChange}
          placeholder="Email"
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="password"
          name='password'
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={login}
          className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
        >
         login
        </button>
        {/* <Link to={'/forgot-password'}><p>forgot password</p></Link> */}
      </div>)
}
      </div>
    
  );
};

export default Login;

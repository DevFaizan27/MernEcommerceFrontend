import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandle = async () => {
    const data = { email, password };
    try {
      const response = await axios.post(`http://localhost:5555/api/user/login`, data);
      navigate('/');
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      console.error(error);
    }

    setEmail('');
    setPassword('');
  };

  const forgotPassword=async()=>{
    const data={email,password};
    try {
      const response=await axios.post(`http://localhost:5555/api/user/update-password`,data)
    } catch (error) {
      
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="block mt-4 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button
          onClick={loginHandle}
          className="block mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Sign In
        </button>
        
      </div>
    </div>
  );
};

export default Login;

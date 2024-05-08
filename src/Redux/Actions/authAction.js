import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// -----------------------------------------------------Signup Actions--------------------------------------------------------

//signup action to signup and genenrate otp
export const handleSignupAction = createAsyncThunk(
  'auth/handleSignupAction',
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/signup`, userData);
      return response.data.success;
    } catch (error) {
      throw rejectWithValue(error.response.data.error)
    }
  }
);


// // ------------------------------------------>>login action<<------------------------------------------


// // action for login
export const loginAction=createAsyncThunk(
  'auth/loginAction',
  async(userData,{rejectWithValue})=>{
    try {
      const response = await axios.post(`http://localhost:5555/api/user/login`,userData);
      localStorage.setItem("token",response.data.token);
      const userInfo=JSON.stringify(response.data.userInfo);
      localStorage.setItem("userData",userInfo);
      return response.data.success
    } catch (error) {
      throw rejectWithValue(error.response.data.error)
    }
  }
)


//action to send the email token for resetting password
export const forgetPassword=createAsyncThunk(
  'auth/forgetPassword',
  async(email,{rejectWithValue})=>{
      try {
      const response = await axios.post(`http://localhost:5555/api/user/forgetPassword`,{email:email});
      return response.data.success;
    } catch (error) {
      throw rejectWithValue(error.response.data.error);
    }
  }
)


//reset password
export const resetPasswordAction=createAsyncThunk(
  'auth/resetPasswordAction',
  async({token,newPassword},{rejectWithValue})=>{
    try {
      const response = await axios.post(`http://localhost:5555/api/user/reset-password/${token}`, { newPassword });
      localStorage.removeItem('token');
      return response.data.success;
    } catch (error) {
      throw rejectWithValue(error.response.data.error);
    }
  }
)
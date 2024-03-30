import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// -----------------------------------------------------Signup Actions--------------------------------------------------------

//signup action to signup and genenrate otp
export const handleSignupAction = createAsyncThunk(
  'auth/handleSignupAction',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/signup`, userData);
      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
);


//verify otp action
export const handleOTPVerificationAction = createAsyncThunk(
  'auth/handleOTPVerificationAction',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/verify-otp`, userData);
      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
);

//resent otp action
export const resendOtpAction = createAsyncThunk(
  'auth/resendOtpAction',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/resend-otp`, userData);
      return response.data.success;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
);





// // ------------------------------------------>>login action<<------------------------------------------


// // action for login
export const loginAction=createAsyncThunk(
  'auth/loginAction',
  async(userData,thunkAPI)=>{
    try {
      const response = await axios.post(`http://localhost:5555/api/user/login`,userData);
      localStorage.setItem("token",response.data.token);
      const userInfo=JSON.stringify(response.data.userInfo);
      localStorage.setItem("userData",userInfo);
      return response.data.success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)


//action to send the otp for reset password
export const resetPasswordOtpAction=createAsyncThunk(
  'auth/resetPasswordOtpAction',
  async(userData,thunkAPI)=>{
    try {
      const response = await axios.post(`http://localhost:5555/api/user/update-password-otp`,userData);
      return response.data.success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)


//reset password
export const resetPasswordAction=createAsyncThunk(
  'auth/resetPasswordAction',
  async(userData,thunkAPI)=>{
    try {
      const response = await axios.post(`http://localhost:5555/api/user/update-password`,userData);
      localStorage.removeItem('token')
      return response.data.success
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error)
    }
  }
)
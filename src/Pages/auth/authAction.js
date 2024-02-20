import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const handleSignupAction = createAsyncThunk(
  'auth/handleSignupAction',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/signup`, userData);
      return response.data.success;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const handleOTPVerificationAction = createAsyncThunk(
  'auth/handleOTPVerificationAction',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/verify-otp`, userData);
      return response.data.success;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const resendOtpAction = createAsyncThunk(
  'auth/resendOtpAction',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5555/api/user/resend-otp`, userData);
      return response.data.success;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);


// // ------------------------------------------>>login action<<------------------------------------------

// // action for signup
// export const loginAction = async (email, password, setLoading, navigate) => {
//   const data = { email, password };
//   try {
//     setLoading(true);
//     const response = await axios.post(
//       `http://localhost:5555/api/user/login`,
//       data
//     );
//     localStorage.setItem("token", response.data.token);
//     setLoading(false);
//     toast.success(response.data.success);
//     navigate("/");
//   } catch (error) {
//     setLoading(false);
//     toast.error(error.response.data.error);
//     console.error(error);
//   }
// };

// //forgot password otp
// export const resetPasswordOtpAction = async (email,setLoading,setShowOTPField,dispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const response = await axios.post(
//       `http://localhost:5555/api/user/update-password-otp`,
//       { email }
//     );
//     dispatch(setShowOTPField(true));
//     dispatch(setLoading(false));
//     toast.success(response.data.success);
//   } catch (error) {
//     dispatch(setLoading(false));
//     toast.error(error.response.data.error);
//   }
// };

// //reset password action
// export const resetPasswordAction = async (email,newPassword,otp,setLoading,dispatch,navigate) => {
//   try {
//     dispatch(setLoading(true));
//     const response=await axios.post(`http://localhost:5555/api/user/update-password`,{email,otp,newPassword});
//     dispatch(setLoading(false));
//     toast.success(response.data.success);
//     localStorage.removeItem('token')
//     navigate('/login')
//   } catch (error) {
//     toast.error(error.response.data.error);
//   }
// };

import { createSlice } from '@reduxjs/toolkit';
import { handleOTPVerificationAction, handleSignupAction, resendOtpAction } from './authAction';



// const token = JSON.parse(localStorage.getItem('token'))


const initialState = {
  // token: token ? token : null,
  step: 1,
  disable: false,
  timer: 60,
  showOTPField: false,
  isLoading:false,
  isOtpSendSuccess:false,
  isSuccess:false,
  isError:false,
  message:''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.isError=false
      state.disable=false
      state.step=1
      state.isOtpSendSuccess=false
      state.timer=60
      state.showOTPField=false
      state.message = ''
    },
  },
  extraReducers:(buider)=>{
    buider
    .addCase(handleSignupAction.pending,(state)=>{
      state.isLoading=true
      state.disable=true
      state.showOTPField=true
    })
    .addCase(handleSignupAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isOtpSendSuccess=true
      state.message=action.payload
    })
    .addCase(handleSignupAction.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      // state.token = null
    })
    .addCase(handleOTPVerificationAction.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(handleOTPVerificationAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(handleOTPVerificationAction.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      // state.token = null
    })
    .addCase(resendOtpAction.pending,(state)=>{
      state.isLoading=true
      state.disable=true
    })
    .addCase(resendOtpAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.message=action.payload
    })
    .addCase(resendOtpAction.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      // state.token = null
    })
  }
});

export const {reset} = authSlice.actions;

export default authSlice.reducer;

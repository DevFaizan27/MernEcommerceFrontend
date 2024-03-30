import { createSlice } from '@reduxjs/toolkit';
import { handleOTPVerificationAction, handleSignupAction, loginAction, resendOtpAction, resetPasswordAction, resetPasswordOtpAction } from '../Actions/authAction.js';





const initialState = {
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
      state.disable=false
      state.isOtpSendSuccess=false
      state.timer=60
      state.showOTPField=false
      state.message = ''
    },
  },
  extraReducers:(buider)=>{
    buider
    //bulders for signup and sending otp
    .addCase(handleSignupAction.pending,(state)=>{
      state.isLoading=true
      state.disable=true   
      state.isOtpSendSuccess=false
    })
    .addCase(handleSignupAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.showOTPField=true
      state.isOtpSendSuccess=true
      state.message=action.payload
    })
    .addCase(handleSignupAction.rejected, (state, action) => {
      state.isLoading = false
      state.isOtpSendSuccess=false
      state.isSuccess=false
      state.isError = true
      state.message = action.payload
    })
    //builders for otp verifications
    .addCase(handleOTPVerificationAction.pending,(state)=>{
      state.isLoading=true
      state.isSuccess=false
    })
    .addCase(handleOTPVerificationAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(handleOTPVerificationAction.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess=false
      state.isError = true
      state.message = action.payload
    })
    //builders for resend otp
    .addCase(resendOtpAction.pending,(state)=>{
      state.isLoading=true
      state.isSuccess=false
      state.disable=true
    })
    .addCase(resendOtpAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(resendOtpAction.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess=false
      state.isError = true
      state.message = action.payload
    })
    //builders for login
    .addCase(loginAction.pending,(state)=>{
      state.isLoading=true
      state.isSuccess=false
    })
    .addCase(loginAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess=false
      state.isError = true
      state.message = action.payload
    })
    //reset password otp action
     .addCase(resetPasswordOtpAction.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(resetPasswordOtpAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.showOTPField=true
      state.isOtpSendSuccess=true
      state.message=action.payload
    })
    .addCase(resetPasswordOtpAction.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    //reset password
     .addCase(resetPasswordAction.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(resetPasswordAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.showOTPField=true
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(resetPasswordAction.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess=false
      state.isError = true
      state.message = action.payload
    })
  }
});

export const {reset} = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { handleSignupAction, loginAction, forgetPassword, resetPasswordAction } from '../Actions/authAction.js';





const initialState = {
  isLoading:false,
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
      state.message = ''
    },
  },
  extraReducers:(buider)=>{
    buider
    //bulders for signup 
    .addCase(handleSignupAction.pending,(state)=>{
      state.isLoading=true
    })
    .addCase(handleSignupAction.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(handleSignupAction.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess=false
      state.isError = true
      state.message = action.payload || "An error has occurred during signup"
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
     .addCase(forgetPassword.pending,(state)=>{
      state.isLoading=true
      state.isSuccess=false
    })
    .addCase(forgetPassword.fulfilled,(state,action)=>{
      state.isLoading=false
      state.isSuccess=true
      state.message=action.payload
    })
    .addCase(forgetPassword.rejected, (state, action) => {
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

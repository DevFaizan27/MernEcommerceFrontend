import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  otp: '',
  step: 1,
  disable: false,
  timer: 60,
  showOTPField: false,
  loading:false,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setOtp(state, action) {
      state.otp = action.payload;
    },
    setDisable(state, action) {
      state.disable = action.payload;
    },
    setTimer(state, action) {
      state.timer = action.payload;
    },
    setShowOTPField(state, action) {
      state.showOTPField = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setOtp,
  setStep,
  setDisable,
  setTimer,
  setShowOTPField,
  setLoading
} = signupSlice.actions;

export default signupSlice.reducer;

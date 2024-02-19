import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name:'',
  email: '',
  password: '',
  newPassword: '',
  otp: '',
  step: 1,
  disable: false,
  timer: 60,
  showOTPField: false,
  loading:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName(state,action){
      state.name=action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setNewPassword(state, action) {
      state.newPassword = action.payload;
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
  setName,
  setEmail,
  setPassword,
  setNewPassword,
  setOtp,
  setStep,
  setDisable,
  setTimer,
  setShowOTPField,
  setLoading
} = authSlice.actions;

export default authSlice.reducer;

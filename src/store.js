import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Redux/Slices/authSlice';
import productSlice from './Redux/Slices/productslice'

const store = configureStore({
  reducer: {
    auth:authSlice,
    product:productSlice
    // Add other reducers here if needed
  },
});

export default store;

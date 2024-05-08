import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Redux/Slices/authSlice';
import productSlice from './Redux/Slices/productslice'
import categorySlice from './Redux/Slices/categorySlice';

const store = configureStore({
  reducer: {
    auth:authSlice,
    product:productSlice,
    category:categorySlice
    // Add other reducers here if needed
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Pages/authSlice';

const store = configureStore({
  reducer: {
    auth:authSlice,
    // Add other reducers here if needed
  },
});

export default store;

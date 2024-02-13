import { configureStore } from '@reduxjs/toolkit';
import signupSlice from './Pages/signupSlice';

const store = configureStore({
  reducer: {
    signup:signupSlice,
    // Add other reducers here if needed
  },
});

export default store;

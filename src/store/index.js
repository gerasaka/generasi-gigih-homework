import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import trackSlice from './trackSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    track: trackSlice
  },
})